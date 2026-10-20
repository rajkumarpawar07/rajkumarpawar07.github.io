import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionTitle from '../sectionTitle/SectionTitle';
import ContributionGraph from './ContributionGraph';
import {
  ContributionDay,
  ContributionSource,
  GITHUB_SOURCE,
  LEETCODE_SOURCE,
  assignLevels,
  fetchGithubContributions,
  fetchSnapshot,
} from '../../data/contributions';
import './Calendar.css';

type CardStatus = 'loading' | 'ready' | 'error';

interface CardState {
  status: CardStatus;
  days: ContributionDay[];
}

const EMPTY: CardState = { status: 'loading', days: [] };

interface ContributionCardProps {
  source: ContributionSource;
  state: CardState;
  icon: React.ReactNode;
}

const ContributionCard: React.FC<ContributionCardProps> = ({ source, state, icon }) => (
  <article className="cal-card dashed-box">
    <header className="cal-head">
      <span className="cal-head-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="cal-head-copy">
        <strong>{source.name}</strong>
        <span>@{source.handle}</span>
      </span>
      <a
        className="cal-head-link"
        href={source.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${source.name} profile`}
      >
        <FaExternalLinkAlt />
      </a>
    </header>

    {state.status === 'loading' && <p className="cal-note">Loading activity…</p>}

    {state.status === 'error' && (
      <p className="cal-note cal-note-error">
        Activity data is unavailable right now — the upstream API did not respond.
      </p>
    )}

    {state.status === 'ready' && <ContributionGraph days={state.days} source={source} />}
  </article>
);

export const Calendar: React.FC = () => {
  const [github, setGithub] = useState<CardState>(EMPTY);
  const [leetcode, setLeetcode] = useState<CardState>(EMPTY);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // Same-origin snapshot: the only source for LeetCode, and the fallback
      // for GitHub when the live API is unreachable.
      const snapshot = await fetchSnapshot().catch(() => null);

      const githubLive = await fetchGithubContributions(GITHUB_SOURCE.handle).catch(() => null);

      const leetcodeRaw = snapshot?.leetcode ?? [];
      const leetcodeDays = leetcodeRaw.length
        ? assignLevels(leetcodeRaw.map((day) => ({ date: day.date, count: day.count })))
        : null;

      if (cancelled) return;

      const githubDays = githubLive ?? (snapshot?.github?.length ? snapshot.github : null);
      setGithub(githubDays ? { status: 'ready', days: githubDays } : { status: 'error', days: [] });
      setLeetcode(leetcodeDays ? { status: 'ready', days: leetcodeDays } : { status: 'error', days: [] });
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-wrapper">
      <SectionTitle>Activity</SectionTitle>

      <ContributionCard source={GITHUB_SOURCE} state={github} icon={<FaGithub />} />
      <ContributionCard source={LEETCODE_SOURCE} state={leetcode} icon={<SiLeetcode />} />
    </section>
  );
};

export default Calendar;
