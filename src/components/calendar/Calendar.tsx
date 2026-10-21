import React, { useCallback, useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaSyncAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionTitle from '../sectionTitle/SectionTitle';
import ContributionGraph from './ContributionGraph';
import {
  ContributionDay,
  ContributionSource,
  GITHUB_SOURCE,
  LEETCODE_SOURCE,
  getCachedContributions,
  getContributionsCacheKey,
  loadSourceContributions,
} from '../../data/contributions';
import './Calendar.css';

type CardStatus = 'loading' | 'ready' | 'error';

interface CardState {
  status: CardStatus;
  days: ContributionDay[];
  timestamp?: number | null;
  isRefreshing?: boolean;
}

const getInitialCardState = (source: ContributionSource): CardState => {
  const cached = getCachedContributions(getContributionsCacheKey(source.id, source.handle));
  if (cached?.data?.length) {
    return {
      status: 'ready',
      days: cached.data,
      timestamp: cached.timestamp,
      isRefreshing: cached.isExpired,
    };
  }
  return { status: 'loading', days: [], timestamp: null, isRefreshing: false };
};

function formatTimeAgo(timestamp: number): string {
  const diffMinutes = Math.floor((Date.now() - timestamp) / 60000);
  if (diffMinutes < 1) return 'just now';
  if (diffMinutes === 1) return '1 min ago';
  if (diffMinutes < 60) return `${diffMinutes} mins ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
}

interface ContributionCardProps {
  source: ContributionSource;
  state: CardState;
  icon: React.ReactNode;
  onRefresh: () => void;
}

const ContributionCard: React.FC<ContributionCardProps> = ({
  source,
  state,
  icon,
  onRefresh,
}) => (
  <article className="cal-card dashed-box">
    <header className="cal-head">
      <span className="cal-head-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="cal-head-copy">
        <strong>{source.name}</strong>
        <span>@{source.handle}</span>
      </span>
      <div className="cal-head-actions">
        <button
          type="button"
          className={`cal-head-btn ${state.isRefreshing ? 'is-spinning' : ''}`}
          onClick={onRefresh}
          disabled={state.isRefreshing}
          title={
            state.timestamp
              ? `Cached ${formatTimeAgo(state.timestamp)} (1h expiry). Click to refresh.`
              : 'Click to refresh activity data'
          }
          aria-label={`Refresh ${source.name} activity`}
        >
          <FaSyncAlt />
        </button>
        <a
          className="cal-head-link"
          href={source.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${source.name} profile`}
        >
          <FaExternalLinkAlt />
        </a>
      </div>
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
  const [github, setGithub] = useState<CardState>(() => getInitialCardState(GITHUB_SOURCE));
  const [leetcode, setLeetcode] = useState<CardState>(() => getInitialCardState(LEETCODE_SOURCE));

  const refreshSource = useCallback(async (source: ContributionSource, force = false) => {
    const isGithub = source.id === 'github';
    const setter = isGithub ? setGithub : setLeetcode;

    setter((prev) => ({ ...prev, isRefreshing: true }));

    try {
      const result = await loadSourceContributions(source, { forceRefresh: force });
      setter({
        status: 'ready',
        days: result.days,
        timestamp: result.timestamp,
        isRefreshing: false,
      });
    } catch {
      setter((prev) => {
        if (prev.days.length > 0) {
          // Keep displaying current days if available
          return { ...prev, isRefreshing: false };
        }
        return { status: 'error', days: [], timestamp: null, isRefreshing: false };
      });
    }
  }, []);

  useEffect(() => {
    // Check GitHub: if not cached or cache expired, fetch fresh data
    const ghCached = getCachedContributions(
      getContributionsCacheKey(GITHUB_SOURCE.id, GITHUB_SOURCE.handle)
    );
    if (!ghCached || ghCached.isExpired) {
      refreshSource(GITHUB_SOURCE, !ghCached ? false : true);
    }

    // Check LeetCode: if not cached or cache expired, fetch fresh data
    const lcCached = getCachedContributions(
      getContributionsCacheKey(LEETCODE_SOURCE.id, LEETCODE_SOURCE.handle)
    );
    if (!lcCached || lcCached.isExpired) {
      refreshSource(LEETCODE_SOURCE, !lcCached ? false : true);
    }
  }, [refreshSource]);

  return (
    <section className="section-wrapper">
      <SectionTitle>Activity</SectionTitle>

      <ContributionCard
        source={GITHUB_SOURCE}
        state={github}
        icon={<FaGithub />}
        onRefresh={() => refreshSource(GITHUB_SOURCE, true)}
      />
      <ContributionCard
        source={LEETCODE_SOURCE}
        state={leetcode}
        icon={<SiLeetcode />}
        onRefresh={() => refreshSource(LEETCODE_SOURCE, true)}
      />
    </section>
  );
};

export default Calendar;
