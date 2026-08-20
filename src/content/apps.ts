export type AppEntry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'coming-soon';
  url?: string;        // omit while status is 'coming-soon'
  logo?: string;       // path to logo asset — see Assets section
};

export const apps: AppEntry[] = [
  {
    slug: 'timedoco',
    name: 'TimeDoco',
    tagline: 'Track time. Bill clients. Own your data.',
    description: 'A privacy-first time tracking and client billing tool designed for freelancers and contractors. Everything stays client-side in your browser.',
    status: 'live',
    url: 'https://lukeafullard.github.io/TimeTag/', // update once custom domain is live
  },
  {
    slug: 'vaultnote',
    name: 'VaultNote',
    tagline: 'Zero-knowledge encrypted notes and docs.',
    description: 'Secure, local-first markdown note taking with client-side end-to-end encryption. No cloud servers, no trackers.',
    status: 'coming-soon',
  },
  {
    slug: 'calcbyob',
    name: 'CalcSpread',
    tagline: 'Private client-side financial forecasting.',
    description: 'Powerful financial modeler and cash flow planner running completely in memory. Keep sensitive financials strictly on your device.',
    status: 'coming-soon',
  },
];
