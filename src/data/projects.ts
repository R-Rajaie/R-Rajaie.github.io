export type Project = {
  slug: string;
  title: string;
  short: string; // short label on the tile
  summary: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  report: string; // basic HTML/markdown-ish string
};

export const projects: Project[] = [
  {
    slug: 'etl-pipeline-lightweight',
    title: 'Lightweight ETL Pipeline for CSV → SQLite',
    short: 'ETL',
    summary: 'Python + Pandas pipeline with idempotent loads and schema checks.',
    date: '2025-06-01',
    tags: ['Python', 'Pandas', 'SQLite'],
    report: `<p>Built a compact ETL that ingests CSVs, normalizes schema, and loads into SQLite with idempotent upserts.
    Benchmarked transforms (~1.2M rows) and added data quality checks.
    <strong>Impact:</strong> cut analyst time by 60%.</p>`
  },
  {
    slug: 'lol-match-analytics',
    title: 'League Match Analytics: Ward & Objective Timelines',
    short: 'LoL',
    summary: 'Event‑level analysis with timeline visualizations; win rate deltas.',
    date: '2025-03-14',
    tags: ['Python', 'Viz', 'Game Analytics'],
    report: `<p>Parsed match timelines, mapped event coordinates, and computed ward lifetimes.
    Built charts for objective control vs. win probability swings.</p>`
  },
  {
    slug: 'bay-area-transit-dash',
    title: 'Bay Area Transit Dashboard',
    short: 'Transit',
    summary: 'Real‑time arrivals + historical reliability reports.',
    date: '2025-02-02',
    tags: ['JS', 'API', 'Dashboards'],
    report: `<p>Prototyped an arrivals dashboard; added station views and headway variance metrics.</p>`
  }
];