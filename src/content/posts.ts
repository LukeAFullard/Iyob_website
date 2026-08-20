export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  app: string;          // which app this post is associated with, e.g. 'TimeDoco'
  sourceUrl: string;     // canonical URL of the original post on the app's own site
  body?: string;         // full content if hosting it here; omit + link out if not
};

export const posts: Post[] = [
  {
    slug: 'why-client-side-privacy-matters',
    title: 'Why Client-Side Privacy Matters for Contractors and Freelancers',
    excerpt: 'When client data leaves your machine, you inherit security liability. Discover why zero-server architecture protects both you and your clients.',
    date: '2026-06-01',
    app: 'TimeDoco',
    sourceUrl: 'https://lukeafullard.github.io/TimeTag/blog/why-client-side-privacy-matters/',
    body: `
### Why Client-Side Privacy Matters for Contractors and Freelancers

As a freelancer or independent contractor, every piece of client information you manage—hourly rates, project scope details, invoice totals, client contact information—is sensitive commercial data.

Traditional Web2 SAAS time-tracking tools upload all this information to centralized databases on cloud servers. If those servers suffer a data breach, your client data, billing rates, and working hours could be leaked.

#### The Client-Side Advantage

**InYourOwnBrowser (InYOB)** applications flip this model upside down:

1. **Zero Server Storage**: Your data never leaves your browser's local storage or IndexedDB.
2. **No Accounts Required**: No passwords to leak, no credential stuffing attacks.
3. **Complete Ownership**: Export your data anytime as JSON or CSV. You retain full control over backup and archiving.

When you use client-side tools like **TimeDoco**, you aren't just protecting yourself—you are offering your clients an ironclad guarantee that their sensitive project details never touch third-party servers.
`,
  },
  {
    slug: 'tax-and-currency-reporting-guide',
    title: 'A Guide to Tax and Multi-Currency Reporting in TimeDoco',
    excerpt: 'How to manage multi-currency billing and extract compliant tax reports without sending financial numbers to a cloud server.',
    date: '2026-06-01',
    app: 'TimeDoco',
    sourceUrl: 'https://lukeafullard.github.io/TimeTag/blog/tax-and-currency-reporting-guide/',
    body: `
### A Guide to Tax and Multi-Currency Reporting in TimeDoco

Working with international clients usually introduces currency exchange friction and complex tax reporting.

In **TimeDoco**, multi-currency support and tax calculations are performed entirely in your browser using local exchange rate snapshots and instant client-side processing.

#### Key Features

- **Multi-Currency Tracking**: Assign different base currencies per client or per project.
- **Instant Tax Calculation**: Automatically apply VAT, GST, or local sales tax at custom rates.
- **Local Data Export**: Generate summary reports as CSV or PDF directly in your browser without transmitting financial data anywhere.

By keeping financial reports in your browser, you fulfill your reporting requirements while maintaining total privacy.
`,
  },
];
