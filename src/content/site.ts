// Single source of truth for page content, taken from the CV.
// Anything marked TODO still needs real information — do not ship it as-is.

export const profile = {
  name: 'Pratima Awa',
  role: 'Senior Frontend Developer',
  location: 'Kathmandu Valley, Nepal',
  email: 'pratimaawal@gmail.com',
  url: 'https://TODO.example.com',
  headline:
    'I build complex travel products for the web: flight search, booking flows, multi-tenant B2B portals, and the frontend architecture that keeps them maintainable.',
  intro:
    'Frontend developer since 2019, working in React, Next.js and TypeScript. I currently work at Gurzu on multi-tenant B2B and B2C travel platforms, and I own the flight booking workflow end to end, from search to ticketing. I have led frontend teams of three to five developers.',
  // TODO: add GitHub if wanted.
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pratima-awa-2b8759202/',
    },
  ],
};

export type Project = {
  name: string;
  summary: string;
  role: string;
  period?: string;
  stack: string[];
  href?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: 'Onta Trips',
    summary:
      'Multi-tenant travel platform: B2C booking and a B2B agency dashboard from one Next.js codebase, with JWT-based role access and feature-level permissions. I own the flight booking workflow from search to ticketing.',
    role: 'Lead Frontend Developer',
    period: 'Dec 2025 – Present',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'TanStack Query',
      'Zustand',
    ],
    href: '/work/onta-trips',
  },
  {
    name: 'Ouro Trips',
    summary:
      'Flight booking platform. I owned consumer booking across domestic, international and return journeys, built agency workflows for hold bookings, amendments and group bookings, and designed the net-price logic that reconciles promo codes with agency sales rules.',
    role: 'Frontend Developer',
    period: 'Jun 2025 – Aug 2026',
    stack: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'TanStack Query',
      'Zustand',
    ],
  },
  {
    name: 'HamroTrips',
    summary:
      'B2B and B2C travel booking platform: multi-step booking flows, interactive dashboards for flight and travel search, and CMS interfaces for content, pricing and booking data.',
    role: 'Frontend Developer',
    stack: ['React', 'Next.js', 'TypeScript'],
    live: 'https://hamrotrips.com',
  },
];

export const otherProjects = [
  {
    name: 'BodyBrainAI',
    note: 'Led frontend development for an AI-driven platform with real-time data updates.',
  },
  {
    name: 'TMS',
    note: 'Owned frontend architecture and delivery for a task-management platform, from initial structure to deployment.',
  },
  {
    name: 'Edfluent',
    note: 'Responsive redesign and backend integration for new product features.',
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export const experience: Role[] = [
  {
    company: 'Gurzu',
    title: 'Frontend Developer',
    period: 'Aug 2024 – Present',
    summary:
      'Frontend for multi-tenant B2B/B2C travel platforms: flight search, fare selection, reservation and ticketing, plus agent management, wallet/ledger and KYC onboarding for agencies. I lead a three-person frontend team and contribute to the shared design system in Storybook.',
  },
  {
    company: 'Axios Softwork',
    title: 'Frontend Developer',
    period: 'Jan 2019 – Aug 2024',
    summary:
      'Client projects across AI platforms, enterprise apps and dashboards. Built reusable components and patterns adopted across projects, and led a five-person frontend team on a task-management platform.',
  },
  {
    company: 'Kosmos Technology',
    title: 'Frontend Developer Intern',
    period: 'Jun – Aug 2018',
    summary:
      'Responsive, component-based interfaces with HTML, SASS, JavaScript and React.',
  },
];

export const capabilities = [
  {
    title: 'Booking workflows end to end',
    body: 'Search, fare selection, reservation and ticketing as one connected flow, with multi-step forms, schema validation and predictable state.',
    tools: 'React Hook Form, Zod, Zustand',
  },
  {
    title: 'Server state & caching',
    body: 'Request deduplication, cache invalidation and refetch correctness: the bugs that only show up when real users hit shared data.',
    tools: 'TanStack Query, Next.js App Router',
  },
  {
    title: 'Multi-tenant architecture & RBAC',
    body: 'One codebase serving consumers and agencies, with route groups, JWT-based roles and feature-level permission gating.',
    tools: 'Next.js route groups, middleware, HttpOnly cookies',
  },
  {
    title: 'Design systems',
    body: 'Reusable components and primitives that stay consistent across portals, documented where the team can find them.',
    tools: 'Tailwind CSS, shadcn/ui, Mantine, Storybook',
  },
  {
    title: 'Performance & SEO',
    body: 'Moving data fetching to the server where it helps, for example fixing hydration issues and improving SEO on a marketing homepage.',
    tools: 'SSR, Next.js metadata, Core Web Vitals',
  },
  {
    title: 'Leading frontend teams',
    body: 'Led teams of three and five developers: technical decisions, code reviews and delivery.',
    tools: 'PR reviews, conventions, CI',
  },
];
