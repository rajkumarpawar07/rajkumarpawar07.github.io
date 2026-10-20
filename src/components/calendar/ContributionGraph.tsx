import React, { useMemo } from 'react';
import { ContributionDay, ContributionSource } from '../../data/contributions';
import './Calendar.css';

const CELL = 12; // px
const GAP = 4; // px
const PITCH = CELL + GAP; // one week column
const DAY_MS = 86400000;

interface WeekCell {
  date: string;
  count: number;
  level: number;
  inWindow: boolean;
}

interface ContributionGraphProps {
  days: ContributionDay[];
  source: ContributionSource;
  months?: number;
}

const monthLabel = (date: string): string =>
  new Date(`${date}T00:00:00Z`).toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });

const formatDay = (date: string): string =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

/** Slices the raw feed down to the trailing `months` window. */
function buildWindow(days: ContributionDay[], months: number): WeekCell[] {
  const byDate = new Map(days.map((day) => [day.date, day]));

  const now = new Date();
  const end = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  // Start on the 1st so every month label can sit on the column that holds
  // its 1st — no label ever lands a week off.
  const startDate = new Date(end);
  startDate.setUTCMonth(startDate.getUTCMonth() - months);
  startDate.setUTCDate(1);
  const start = startDate.getTime();

  const cells: WeekCell[] = [];
  for (let ts = start; ts <= end; ts += DAY_MS) {
    const date = new Date(ts).toISOString().slice(0, 10);
    const hit = byDate.get(date);
    cells.push({
      date,
      count: hit?.count ?? 0,
      level: hit?.level ?? 0,
      inWindow: true,
    });
  }

  // Pad the first column so every column is a full Sunday-to-Saturday week.
  const lead = new Date(start).getUTCDay();
  const padded: WeekCell[] = [];
  for (let i = lead - 1; i >= 0; i--) {
    const date = new Date(start - i * DAY_MS).toISOString().slice(0, 10);
    padded.push({ date, count: 0, level: 0, inWindow: false });
  }

  return padded.concat(cells);
}

export const ContributionGraph: React.FC<ContributionGraphProps> = ({
  days,
  source,
  months = 6,
}) => {
  const { weeks, labels, total } = useMemo(() => {
    const cells = buildWindow(days, months);

    const weekList: WeekCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      weekList.push(cells.slice(i, i + 7));
    }

    // A month label belongs to the column that contains its 1st.
    const monthLabels: { label: string; left: number }[] = [];
    weekList.forEach((week, index) => {
      const start = week.find((cell) => cell.inWindow && cell.date.slice(8, 10) === '01');
      if (start) monthLabels.push({ label: monthLabel(start.date), left: index * PITCH });
    });

    const sum = cells.reduce((acc, cell) => (cell.inWindow ? acc + cell.count : acc), 0);
    return { weeks: weekList, labels: monthLabels, total: sum };
  }, [days, months]);

  return (
    <div className="cal-graph">
      <div className="cal-scroll">
        <div
          className="cal-inner"
          style={{ '--cal-cell': `${CELL}px`, '--cal-gap': `${GAP}px` } as React.CSSProperties}
        >
          <div className="cal-months">
            {labels.map((entry) => (
              <span key={`${entry.label}-${entry.left}`} className="cal-month" style={{ left: `${entry.left}px` }}>
                {entry.label}
              </span>
            ))}
          </div>

          <div className="cal-grid">
            {weeks.map((week, wIdx) => (
              <div className="cal-week" key={wIdx}>
                {week.map((cell) => (
                  <span
                    key={cell.date}
                    className={`cal-cell${cell.inWindow ? '' : ' out'}`}
                    style={
                      {
                        '--bw': source.bwPalette[cell.level],
                        '--fg': source.colorPalette[cell.level],
                      } as React.CSSProperties
                    }
                    title={`${cell.count} ${source.unit} on ${formatDay(cell.date)}`}
                    aria-label={`${cell.count} ${source.unit} on ${formatDay(cell.date)}`}
                  ></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cal-footer">
        <p className="cal-stats">
          Last {months} months · <strong>{total.toLocaleString()}</strong> {source.unit}
        </p>
        <div className="cal-legend" aria-hidden="true">
          <span className="cal-legend-label">Less</span>
          {source.bwPalette.map((color, idx) => (
            <span
              key={idx}
              className="cal-legend-cell"
              style={
                {
                  '--bw': color,
                  '--fg': source.colorPalette[idx],
                } as React.CSSProperties
              }
            ></span>
          ))}
          <span className="cal-legend-label">More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
