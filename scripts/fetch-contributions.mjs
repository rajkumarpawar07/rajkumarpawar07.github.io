/**
 * Build-time contribution snapshot.
 *
 * GitHub's contributions API sends CORS headers, so the browser can call it
 * directly. LeetCode's GraphQL endpoint does not, so its submission calendar
 * is fetched here at build time and served as a same-origin static file.
 *
 * The script never fails the build: on error it keeps the previously
 * generated snapshot (if any) and exits successfully.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIR = join(process.cwd(), 'public', 'data');
const OUT_FILE = join(OUT_DIR, 'contributions.json');

const GITHUB_USERNAME = 'rajkumarpawar07';
const LEETCODE_USERNAME = 'rajkumarpawar';
const GITHUB_API = 'https://github-contributions-api.jogruber.de/v4/';

const LEETCODE_QUERY =
  'query userSubmissions($username: String!){ matchedUser(username: $username){ submissionCalendar } }';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; rajkumarpawar-portfolio/build)',
  Accept: 'application/json',
};

async function fetchLeetcode() {
  // 1. Direct GraphQL
  try {
    const url =
      'https://leetcode.com/graphql?query=' +
      encodeURIComponent(LEETCODE_QUERY) +
      '&variables=' +
      encodeURIComponent(JSON.stringify({ username: LEETCODE_USERNAME }));

    const res = await fetch(url, { headers: HEADERS });
    if (res.ok) {
      const json = await res.json();
      const raw = json?.data?.matchedUser?.submissionCalendar;
      if (raw) {
        const calendar = JSON.parse(raw);
        const days = Object.entries(calendar)
          .map(([timestamp, count]) => ({
            date: new Date(Number(timestamp) * 1000).toISOString().slice(0, 10),
            count: Number(count),
          }))
          .filter((day) => Number.isFinite(day.count))
          .sort((a, b) => a.date.localeCompare(b.date));

        if (days.length) return days;
      }
    }
  } catch (err) {
    console.warn(`[contributions] LeetCode direct query failed (${err.message}), trying fallback...`);
  }

  // 2. Fallback: alfa-leetcode-api
  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/calendar`, {
      headers: HEADERS,
    });
    if (res.ok) {
      const json = await res.json();
      const raw =
        typeof json.submissionCalendar === 'string'
          ? JSON.parse(json.submissionCalendar)
          : json.submissionCalendar;
      if (raw) {
        const days = Object.entries(raw)
          .map(([timestamp, count]) => ({
            date: new Date(Number(timestamp) * 1000).toISOString().slice(0, 10),
            count: Number(count),
          }))
          .filter((day) => Number.isFinite(day.count))
          .sort((a, b) => a.date.localeCompare(b.date));

        if (days.length) return days;
      }
    }
  } catch (err) {
    console.warn(`[contributions] LeetCode alfa fallback failed (${err.message})`);
  }

  throw new Error('LeetCode calendar could not be retrieved');
}

async function fetchGithub() {
  // 1. Primary: jogruber.de
  try {
    const res = await fetch(`${GITHUB_API}${GITHUB_USERNAME}?y=last`, { headers: HEADERS });
    if (res.ok) {
      const json = await res.json();
      const raw = json?.contributions ?? json?.years?.[0]?.contributions ?? [];
      if (raw.length) {
        return raw
          .map((entry) => ({
            date: entry.date,
            count: Number(entry.count) || 0,
            level: Number(entry.level) || 0,
          }))
          .sort((a, b) => a.date.localeCompare(b.date));
      }
    }
  } catch (err) {
    console.warn(`[contributions] GitHub primary failed (${err.message}), trying backup...`);
  }

  // 2. Backup: vercel
  try {
    const res = await fetch(`https://github-contributions.vercel.app/api/v1/${GITHUB_USERNAME}`, {
      headers: HEADERS,
    });
    if (res.ok) {
      const json = await res.json();
      const raw = json?.contributions ?? [];
      if (raw.length) {
        return raw
          .map((entry) => ({
            date: entry.date,
            count: Number(entry.count) || 0,
            level: Number(entry.level) || 0,
          }))
          .sort((a, b) => a.date.localeCompare(b.date));
      }
    }
  } catch (err) {
    console.warn(`[contributions] GitHub vercel backup failed (${err.message})`);
  }

  throw new Error('GitHub contributions could not be retrieved');
}

async function main() {
  const snapshot = { generatedAt: new Date().toISOString(), github: null, leetcode: null };
  const problems = [];

  for (const [key, fetcher] of [
    ['github', fetchGithub],
    ['leetcode', fetchLeetcode],
  ]) {
    try {
      snapshot[key] = await fetcher();
      console.log(`[contributions] ${key}: ${snapshot[key].length} days`);
    } catch (error) {
      problems.push(`${key}: ${error.message}`);
    }
  }

  if (!snapshot.github && !snapshot.leetcode) {
    console.warn(`[contributions] snapshot failed (${problems.join('; ')}) - keeping previous file`);
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });

  // Merge with whatever is already on disk so one failing provider keeps its
  // last known good data instead of disappearing.
  let previous = {};
  if (existsSync(OUT_FILE)) {
    try {
      previous = JSON.parse(readFileSync(OUT_FILE, 'utf8'));
    } catch {
      previous = {};
    }
  }

  const merged = {
    generatedAt: snapshot.generatedAt,
    github: snapshot.github ?? previous.github ?? null,
    leetcode: snapshot.leetcode ?? previous.leetcode ?? null,
  };

  // Leave the file untouched when the data is unchanged, so a rebuild does
  // not dirty the working tree for no reason.
  const same =
    JSON.stringify(merged.github) === JSON.stringify(previous.github ?? null) &&
    JSON.stringify(merged.leetcode) === JSON.stringify(previous.leetcode ?? null);
  if (same) {
    console.log('[contributions] snapshot unchanged');
    return;
  }

  writeFileSync(OUT_FILE, JSON.stringify(merged));
  console.log(`[contributions] wrote ${OUT_FILE}`);
  if (problems.length) console.warn(`[contributions] partial snapshot (${problems.join('; ')})`);
}

main().catch((error) => {
  console.warn(`[contributions] skipped: ${error.message}`);
});
