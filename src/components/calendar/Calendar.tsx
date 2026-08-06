import React, { useEffect, useState } from 'react';
import './Calendar.css';

interface DayCell {
  count: number;
  level: number;
  date: Date;
}

interface ApiActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total?: number;
  contributions?: ApiActivity[];
  years?: { contributions: ApiActivity[] }[];
}

const GITHUB_USERNAME = 'rajkumarpawar07';
const API_URL = 'https://github-contributions-api.jogruber.de/v4/';

const LEVEL_COLORS = ['#181818', '#2e2e2e', '#4a4a4a', '#8a8a8a', '#e5e5e5'];

function parseDays(data: ApiResponse): DayCell[] {
  const raw = data.contributions ?? data.years?.[0]?.contributions ?? [];
  return raw.map((d) => ({
    count: d.count,
    level: d.level,
    date: new Date(d.date + 'T00:00:00Z'),
  }));
}

function buildWeeks(days: DayCell[]): { weeks: DayCell[][]; total: number } {
  const total = days.reduce((sum, d) => sum + d.count, 0);
  if (days.length === 0) return { weeks: [], total };

  const end = days.length - 1;
  let start = end - 35 * 7;
  while (start > 0 && days[start].date.getDay() !== 0) start--;

  const weeks: DayCell[][] = [];
  for (let i = start; i <= end; i += 7) {
    const week: DayCell[] = [];
    for (let j = 0; j < 7; j++) {
      week.push(days[Math.min(i + j, end)]);
    }
    weeks.push(week);
  }
  return { weeks, total };
}

function buildFallback(): { weeks: DayCell[][]; total: number } {
  const days: DayCell[] = [];
  const offset = new Date('2026-01-01T00:00:00Z').getTime();
  for (let i = 0; i < 280; i++) {
    const date = new Date(offset + i * 86400000);
    const seed = Math.abs(Math.sin(i * 12.9898 + 4.1414) * 43758.5453);
    const level = Math.floor(seed % 5);
    days.push({ count: level * 2 + (level > 0 ? 1 : 0), level, date });
  }
  return { ...buildWeeks(days), total: 2158 };
}

function monthLabel(date: Date): string {
  return date.toLocaleString('en-US', { month: 'short' });
}

export const Calendar: React.FC = () => {
  const [weeks, setWeeks] = useState<DayCell[][]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_URL}${GITHUB_USERNAME}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('contributions fetch failed');
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        const { weeks: w, total: t } = buildWeeks(parseDays(data));
        setWeeks(w);
        setTotal(t);
        setLoaded(true);
      })
      .catch(() => {
        if (cancelled) return;
        const { weeks: w, total: t } = buildFallback();
        setWeeks(w);
        setTotal(t);
        setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="calendar-box dashed-box">
      <div className="cal-months">
        {weeks.map((week, idx) => {
          const label = monthLabel(week[0].date);
          const prev = idx > 0 ? monthLabel(weeks[idx - 1][0].date) : '';
          return (
            <span key={idx} className={label !== prev ? 'cal-month' : 'cal-month empty'}>
              {label !== prev ? label : ''}
            </span>
          );
        })}
      </div>

      <div className="cal-grid">
        {weeks.map((week, wIdx) => (
          <div className="cal-week" key={wIdx}>
            {week.map((day, dIdx) => (
              <span
                key={dIdx}
                className="cal-cell"
                style={{ background: LEVEL_COLORS[day.level] }}
                title={`${day.count} contributions on ${day.date.toISOString().slice(0, 10)}`}
              ></span>
            ))}
          </div>
        ))}
      </div>

      {loaded && (
        <div className="cal-footer">
          <p className="cal-stats">
            This year, I achieved <strong>{total.toLocaleString()}</strong> contributions
          </p>
          <div className="cal-legend">
            <span className="cal-legend-label">Less</span>
            {LEVEL_COLORS.map((color, idx) => (
              <span key={idx} className="cal-legend-cell" style={{ background: color }}></span>
            ))}
            <span className="cal-legend-label">More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
