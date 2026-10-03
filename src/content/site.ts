// Single source of truth for page content, taken from the CV.

export const profile = {
  name: 'Pratima Awa',
  role: 'Senior Frontend Developer',
  location: 'Kathmandu Valley, Nepal',
  email: 'pratimaawal@gmail.com',
  url: 'https://pratima-awa.vercel.app',
  headline:
    'I build fast, reliable web applications with React, Next.js and TypeScript, and the frontend architecture that keeps them easy to change.',
  intro:
    "Frontend developer since 2019. I've worked on AI platforms, enterprise dashboards and task-management tools, and today I build multi-tenant B2B and B2C products at Gurzu. I care about clean component architecture, getting server state right, accessible UI, and code that other developers can extend. I have led frontend teams of three to five developers.",
  links: [
    { label: 'GitHub', href: 'https://github.com/pratimaawa' },
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
      'Multi-tenant platform with a consumer site and a B2B dashboard in one Next.js codebase, using JWT-based role access and feature-level permissions. I own the core booking flow, from search to ticketing.',
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
      'Booking platform. I owned the consumer booking flow end to end, built B2B workflows for holds, amendments and group bookings, and designed the pricing logic that reconciles promo codes with partner sales rules.',
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
      'B2B and B2C booking platform: multi-step flows, interactive search dashboards, and CMS interfaces for content and pricing.',
    role: 'Frontend Developer',
    stack: ['React', 'Next.js', 'TypeScript'],
    live: 'https://hamrotrips.com',
  },
  {
    name: 'Flight Booking Demo',
    summary:
      'Open-source search-to-booking flow: URL-driven search, server-rendered results with client caching, typed multi-passenger forms, and a fare re-check before confirming. Built on fictional data.',
    role: 'Side project',
    stack: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'RHF + Zod'],
    live: 'https://flight-booking-demo-next.vercel.app',
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
      'Frontend for multi-tenant B2B and B2C platforms: complex multi-step flows, role-based dashboards, and account, wallet and onboarding workflows. I lead a three-person frontend team and contribute to the shared design system in Storybook.',
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
    title: 'Complex flows & forms',
    body: 'Multi-step flows and long forms with schema validation, predictable state and clear error handling.',
    tools: 'React Hook Form, Zod, Zustand',
  },
  {
    title: 'Server state & caching',
    body: 'Request deduplication, cache invalidation and refetch correctness: the bugs that only show up when real users hit shared data.',
    tools: 'TanStack Query, Next.js App Router',
  },
  {
    title: 'Frontend architecture & access control',
    body: 'Shared codebases that serve different kinds of users, with route groups, role-based access and feature-level permissions.',
    tools: 'Next.js route groups, middleware, HttpOnly cookies',
  },
  {
    title: 'Design systems',
    body: 'Reusable components and primitives that keep products consistent, documented where the team can find them.',
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
