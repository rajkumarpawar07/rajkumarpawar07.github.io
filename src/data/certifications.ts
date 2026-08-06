export interface Certification {
  provider: 'GCP' | 'Azure';
  title: string;
  badgeUrl: string;
}

export const certificationsData: Certification[] = [
  {
    provider: 'GCP',
    title: 'Associate Data Practitioner',
    badgeUrl: 'https://www.credly.com/badges/dc0581e0-be77-41e1-97d8-6c248706503f',
  },
  {
    provider: 'GCP',
    title: 'Professional Cloud Developer',
    badgeUrl: 'https://www.credly.com/badges/5a02edc3-bf1b-405c-9f1a-e523474f9e94',
  },
  {
    provider: 'GCP',
    title: 'Associate Cloud Engineer',
    badgeUrl: 'https://www.credly.com/badges/ffaa6376-9b1d-4b4a-8f7b-a162d27ad403',
  },
  {
    provider: 'GCP',
    title: 'Professional Cloud Architect',
    badgeUrl: 'https://www.credly.com/badges/e89135e6-60f6-4d68-ad16-ef5867c2947d',
  },
  {
    provider: 'GCP',
    title: 'Professional ML Engineer',
    badgeUrl: 'https://www.credly.com/badges/624784ca-410f-4fbe-8cad-d171c21728a9',
  },
  {
    provider: 'GCP',
    title: 'Professional DevOps Engineer',
    badgeUrl: 'https://www.credly.com/badges/47746152-7cfc-4ed2-92ca-7066198d1279',
  },
  {
    provider: 'GCP',
    title: 'Professional Network Engineer',
    badgeUrl: 'https://www.credly.com/badges/be48dc7c-9bbc-4a80-9e31-4ee26a4cada2',
  },
  {
    provider: 'GCP',
    title: 'Professional Data Engineer',
    badgeUrl: 'https://www.credly.com/badges/1bf9cdc0-e003-4190-aaac-ac2fb2c279c6',
  },
  {
    provider: 'Azure',
    title: 'Administrator Associate (AZ-104)',
    badgeUrl: 'https://learn.microsoft.com/en-us/users/rajkumarpawar-1332/credentials/d7351a2b47a5b269',
  },
  {
    provider: 'Azure',
    title: 'DevOps Engineer Expert (AZ-400)',
    badgeUrl: 'https://learn.microsoft.com/en-us/users/rajkumarpawar-1332/credentials/74bfeea03dacb779',
  },
];
