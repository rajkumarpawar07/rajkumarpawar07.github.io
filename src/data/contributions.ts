/**
 * Contribution graph data sources.
 *
 * GitHub is fetched live in the browser (the upstream API sends CORS
 * headers). LeetCode's GraphQL endpoint does not send them, so its calendar
 * comes from the same-origin snapshot written by scripts/fetch-contributions.mjs
 * during the build.
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

const GITHUB_API = 'https://github-contributions-api.jogruber.de/v4/';
const SNAPSHOT_URL = '/data/contributions.json';

interface Snapshot {
  generatedAt?: string;
  github?: ContributionDay[];
  leetcode?: { date: string; count: number }[];
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

export async function fetchGithubContributions(username: string): Promise<ContributionDay[]> {
  const res = await fetch(`${GITHUB_API}${username}?y=last`);
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

  const data = (await res.json()) as {
    contributions?: { date: string; count: number; level: number }[];
    years?: { contributions: { date: string; count: number; level: number }[] }[];
  };

  const raw = data.contributions ?? data.years?.[0]?.contributions ?? [];
  if (!raw.length) throw new Error('GitHub API returned no contributions');

  return raw.map((entry) => ({
    date: entry.date,
    count: Number(entry.count) || 0,
    level: Number(entry.level) || 0,
  }));
}

/** Same-origin snapshot written at build time. */
export async function fetchSnapshot(): Promise<Snapshot> {
  const res = await fetch(SNAPSHOT_URL);
  if (!res.ok) throw new Error('Contribution snapshot unavailable');
  return (await res.json()) as Snapshot;
}
