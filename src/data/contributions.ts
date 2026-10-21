/**
 * Contribution graph data sources and cache management.
 *
 * Both GitHub and LeetCode activity are fetched dynamically in the browser,
 * with resilient API fallbacks, localStorage caching (1-hour expiry), and
 * fallback to the build-time same-origin snapshot if network calls fail.
 */

export interface ContributionDay {
  date: string; // yyyy-mm-dd
  count: number;
  level: number; // 0 (none) - 4 (most)
}

export interface ContributionSource {
  id: string;
  name: string;
  handle: string;
  profileUrl: string;
  unit: string;
  /** Neutral ramp shown until the reader hovers the card. */
  bwPalette: string[];
  /** The platform's own colours, revealed on hover. */
  colorPalette: string[];
}

export const GITHUB_SOURCE: ContributionSource = {
  id: 'github',
  name: 'GitHub',
  handle: 'rajkumarpawar07',
  profileUrl: 'https://github.com/rajkumarpawar07',
  unit: 'contributions',
  bwPalette: ['#181818', '#2e2e2e', '#4a4a4a', '#8a8a8a', '#e5e5e5'],
  // GitHub's own dark-theme contribution scale.
  colorPalette: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const LEETCODE_SOURCE: ContributionSource = {
  id: 'leetcode',
  name: 'LeetCode',
  handle: 'rajkumarpawar',
  profileUrl: 'https://leetcode.com/u/rajkumarpawar/',
  unit: 'submissions',
  bwPalette: ['#181818', '#2e2e2e', '#4a4a4a', '#8a8a8a', '#e5e5e5'],
  // LeetCode's heatmap ramp.
  colorPalette: ['#1b1b1b', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
};

const SNAPSHOT_URL = '/data/contributions.json';

/** Cache time-to-live: 1 hour in milliseconds */
export const CACHE_TTL_MS = 60 * 60 * 1000;

export interface CacheEntry<T> {
  timestamp: number;
  data: T;
}

export interface Snapshot {
  generatedAt?: string;
  github?: ContributionDay[];
  leetcode?: { date: string; count: number }[];
}

/** Cache key generator based on provider and username */
export function getContributionsCacheKey(sourceId: string, handle: string): string {
  return `activity_cache_${sourceId}_${handle}`;
}

/**
 * Reads data from localStorage.
 * Returns null if not found or corrupted.
 * Indicates whether the cache is expired (> 1 hour).
 */
export function getCachedContributions(key: string): {
  data: ContributionDay[];
  isExpired: boolean;
  timestamp: number;
} | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry: CacheEntry<ContributionDay[]> = JSON.parse(raw);
    if (!entry || typeof entry.timestamp !== 'number' || !Array.isArray(entry.data)) {
      return null;
    }
    const age = Date.now() - entry.timestamp;
    const isExpired = age >= CACHE_TTL_MS || age < 0;
    return { data: entry.data, isExpired, timestamp: entry.timestamp };
  } catch (err) {
    console.warn(`[contributions] Error reading cache for ${key}:`, err);
    return null;
  }
}

/**
 * Saves contribution days to localStorage with current timestamp.
 */
export function setCachedContributions(key: string, data: ContributionDay[]): void {
  try {
    const entry: CacheEntry<ContributionDay[]> = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch (err) {
    console.warn(`[contributions] Error saving cache for ${key}:`, err);
  }
}

/** GitHub's own bucketing: quartiles of the busiest day. */
export function levelFor(count: number, max: number): number {
  if (count <= 0) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

/** Buckets raw counts the way the platform would, for sources that only give counts. */
export function assignLevels(days: Omit<ContributionDay, 'level'>[]): ContributionDay[] {
  const max = Math.max(1, ...days.map((day) => day.count));
  return days.map((day) => ({ ...day, level: levelFor(day.count, max) }));
}

/**
 * Normalizes GitHub raw array into sorted ContributionDay array with valid level (0-4).
 */
export function normalizeGithubDays(
  rawDays: { date: string; count?: number | string; level?: number | string }[]
): ContributionDay[] {
  const max = Math.max(1, ...rawDays.map((d) => Number(d.count) || 0));
  return rawDays
    .filter((d) => typeof d.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d.date))
    .map((d) => {
      const count = Number(d.count) || 0;
      const level =
        d.level !== undefined && Number.isFinite(Number(d.level))
          ? Math.min(4, Math.max(0, Number(d.level)))
          : levelFor(count, max);
      return { date: d.date, count, level };
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Fetches dynamic GitHub contributions from live APIs with fallback.
 */
export async function fetchGithubContributions(username: string): Promise<ContributionDay[]> {
  // 1. Primary: jogruber.de
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    if (res.ok) {
      const data = (await res.json()) as {
        contributions?: { date: string; count: number; level: number }[];
        years?: { contributions: { date: string; count: number; level: number }[] }[];
      };
      const raw = data.contributions ?? data.years?.[0]?.contributions ?? [];
      if (raw.length > 0) {
        return normalizeGithubDays(raw);
      }
    }
  } catch (e) {
    console.warn('[contributions] jogruber GitHub API failed, trying backup:', e);
  }

  // 2. Backup: vercel API
  try {
    const res = await fetch(`https://github-contributions.vercel.app/api/v1/${username}`);
    if (res.ok) {
      const data = (await res.json()) as {
        contributions?: { date: string; count: number; level?: number }[];
      };
      const raw = data.contributions ?? [];
      if (raw.length > 0) {
        return normalizeGithubDays(raw);
      }
    }
  } catch (e) {
    console.warn('[contributions] vercel GitHub backup API failed:', e);
  }

  throw new Error('All GitHub contribution APIs failed');
}

/**
 * Parses LeetCode submissionCalendar object or string into sorted ContributionDay array.
 */
export function parseLeetcodeSubmissionCalendar(rawCalendar: unknown): ContributionDay[] {
  let calendarMap: Record<string, number> = {};
  if (typeof rawCalendar === 'string') {
    try {
      calendarMap = JSON.parse(rawCalendar);
    } catch {
      calendarMap = {};
    }
  } else if (typeof rawCalendar === 'object' && rawCalendar !== null) {
    calendarMap = rawCalendar as Record<string, number>;
  }

  const map = new Map<string, number>();
  for (const [timestamp, count] of Object.entries(calendarMap)) {
    const ts = Number(timestamp);
    if (!Number.isFinite(ts)) continue;
    const date = new Date(ts * 1000).toISOString().slice(0, 10);
    const cnt = Number(count) || 0;
    map.set(date, (map.get(date) ?? 0) + cnt);
  }

  const daysWithoutLevels = Array.from(map.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return assignLevels(daysWithoutLevels);
}

/**
 * Fetches dynamic LeetCode contributions from CORS-friendly live APIs with fallback.
 */
export async function fetchLeetcodeContributions(username: string): Promise<ContributionDay[]> {
  // 1. Primary: alfa-leetcode-api
  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
    if (res.ok) {
      const data = (await res.json()) as { submissionCalendar?: unknown };
      if (data?.submissionCalendar) {
        const days = parseLeetcodeSubmissionCalendar(data.submissionCalendar);
        if (days.length > 0) return days;
      }
    }
  } catch (e) {
    console.warn('[contributions] alfa LeetCode API failed, trying backup:', e);
  }

  // 2. Backup: leetcode-api-faisalshohag
  try {
    const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
    if (res.ok) {
      const data = (await res.json()) as { submissionCalendar?: unknown };
      if (data?.submissionCalendar) {
        const days = parseLeetcodeSubmissionCalendar(data.submissionCalendar);
        if (days.length > 0) return days;
      }
    }
  } catch (e) {
    console.warn('[contributions] faisalshohag LeetCode API failed:', e);
  }

  throw new Error('All LeetCode contribution APIs failed');
}

/** Same-origin snapshot written at build time. */
export async function fetchSnapshot(): Promise<Snapshot> {
  const res = await fetch(SNAPSHOT_URL);
  if (!res.ok) throw new Error('Contribution snapshot unavailable');
  return (await res.json()) as Snapshot;
}

/**
 * Loads contribution data with 1-hour caching policy:
 * - If fresh (< 1h) and !forceRefresh, returns cached data immediately.
 * - If expired or forced, fetches live data and updates cache.
 * - On network failure, falls back to stale cache, then snapshot.
 */
export async function loadSourceContributions(
  source: ContributionSource,
  options?: { forceRefresh?: boolean }
): Promise<{ days: ContributionDay[]; timestamp: number }> {
  const cacheKey = getContributionsCacheKey(source.id, source.handle);
  const cached = getCachedContributions(cacheKey);

  // Return fresh cache directly if available
  if (cached && !cached.isExpired && !options?.forceRefresh) {
    return { days: cached.data, timestamp: cached.timestamp };
  }

  try {
    let freshDays: ContributionDay[];
    if (source.id === 'github') {
      freshDays = await fetchGithubContributions(source.handle);
    } else if (source.id === 'leetcode') {
      freshDays = await fetchLeetcodeContributions(source.handle);
    } else {
      throw new Error(`Unknown source: ${source.id}`);
    }

    const timestamp = Date.now();
    setCachedContributions(cacheKey, freshDays);
    return { days: freshDays, timestamp };
  } catch (err) {
    console.warn(`[contributions] Live fetch failed for ${source.id}, falling back:`, err);

    // Fallback 1: Use stale cache if present
    if (cached?.data?.length) {
      return { days: cached.data, timestamp: cached.timestamp };
    }

    // Fallback 2: Build snapshot
    const snapshot = await fetchSnapshot();
    if (source.id === 'github' && snapshot.github?.length) {
      const days = normalizeGithubDays(snapshot.github);
      const timestamp = snapshot.generatedAt ? new Date(snapshot.generatedAt).getTime() : Date.now();
      setCachedContributions(cacheKey, days);
      return { days, timestamp };
    }
    if (source.id === 'leetcode' && snapshot.leetcode?.length) {
      const days = assignLevels(snapshot.leetcode.map((day) => ({ date: day.date, count: day.count })));
      const timestamp = snapshot.generatedAt ? new Date(snapshot.generatedAt).getTime() : Date.now();
      setCachedContributions(cacheKey, days);
      return { days, timestamp };
    }

    throw err;
  }
}
