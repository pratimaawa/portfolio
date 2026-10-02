import type { Metadata } from 'next';
import Link from 'next/link';

import { AuthProxyDiagram } from '@/components/AuthProxyDiagram';

const description =
  'Case study: frontend architecture of a multi-tenant travel platform, covering flight search and booking, B2B role-based access, HttpOnly-cookie auth, and data caching.';

export const metadata: Metadata = {
  title: 'Onta Trips case study',
  description,
  alternates: { canonical: '/work/onta-trips' },
  openGraph: { title: 'Onta Trips case study', description },
};

const facts = [
  { label: 'Role', value: 'Lead Frontend Developer' },
  { label: 'Timeframe', value: 'Dec 2025 – Present' },
  { label: 'Product', value: 'B2C booking site + B2B agency dashboard' },
  {
    label: 'Stack',
    value: 'Next.js 16, React 19, TypeScript, Tailwind CSS v4',
  },
];

const sections = [
  { id: 'overview', title: 'My part' },
  { id: 'two-portals', title: 'One app, two portals' },
  { id: 'search-booking', title: 'Search and booking flows' },
  { id: 'auth', title: 'Authentication without exposed tokens' },
  { id: 'data', title: 'Data fetching and caching' },
  { id: 'permissions', title: 'Centralised permissions' },
  { id: 'supporting', title: 'Uploads, realtime and errors' },
  { id: 'quality', title: 'Conventions and code review' },
];

export default function OntaCaseStudy() {
  return (
    <article className="wrap pt-12 sm:pt-20">
      <Link href="/#work" className="label link no-underline">
        ← Selected work
      </Link>

      <header className="mt-8">
        <p className="label">Case study</p>
        <h1 className="mt-4 max-w-[20ch] font-serif text-4xl/[1.1] tracking-tight sm:text-6xl/[1.05]">
          Onta Trips: one codebase for travellers and travel agencies
        </h1>
        <p className="mt-6 prose-body text-muted">
          A production travel platform where consumers search and book flights,
          and agencies manage bookings, staff and clients from a dashboard, both
          served by a single Next.js application.
        </p>
        <p className="mt-4 text-sm">
          <a href="https://ontatrip.com" className="link">
            Visit Onta Trips ↗
          </a>
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-rule py-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="label">{f.label}</dt>
              <dd className="mt-1 text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-10">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <ol className="sticky top-8 space-y-2 text-sm text-muted">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-fg">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose-body min-w-0 space-y-16 [&_h2]:scroll-mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:tracking-tight sm:[&_h2]:text-3xl [&_h2+p]:mt-4 [&_p+p]:mt-4">
          <section aria-labelledby="overview">
            <h2 id="overview">My part</h2>
            <p>
              I lead the frontend on Onta Trips, an independent engagement
              alongside my role at Gurzu. I built the B2C and B2B agency booking
              experience from a single shared Next.js codebase with multi-tenant
              configuration, using App Router route groups, JWT-based role
              access and feature-level permission gating.
            </p>
            <p>
              Within that architecture I own the flight booking workflow end to
              end: search, fare selection, reservation and ticketing.
            </p>
          </section>

          <section aria-labelledby="two-portals">
            <h2 id="two-portals">One app, two portals</h2>
            <p>
              Consumers and agencies use the same Next.js App Router codebase.
              B2C users book for themselves. B2B accounts have sub-roles (admin,
              agent and client) with different levels of access to the agency
              dashboard.
            </p>
            <p>
              Sharing one codebase means shared types, services and UI, with the
              tenant type deciding which shell, navigation and permissions
              apply.
            </p>
          </section>

          <section aria-labelledby="search-booking">
            <h2 id="search-booking">Search and booking flows</h2>
            <p>
              Flight search and booking are form-heavy: passenger details,
              itineraries and validation rules that change with the trip. Forms
              are built with React Hook Form and Zod schemas, so validation is
              declarative and typed end to end. Cross-step state lives in
              Zustand stores.
            </p>
          </section>

          <section aria-labelledby="auth">
            <h2 id="auth">Authentication without exposed tokens</h2>
            <p>
              The JWT is stored in an HttpOnly cookie and is never kept in
              localStorage or anywhere else client-side JavaScript can read.
              Cookies are set and cleared on the server, and the client asks a
              session endpoint for its auth state.
            </p>
            <AuthProxyDiagram />
            <p>
              Every API call goes through a Next.js route handler that reads the
              cookie and adds the Bearer header before forwarding to the
              backend. Middleware only does coarse redirects; access checks
              happen in the app shell.
            </p>
          </section>

          <section aria-labelledby="data">
            <h2 id="data">Data fetching and caching</h2>
            <p>
              Server data is managed with TanStack Query. A shared Axios
              instance handles the auth header and converts the backend’s
              snake_case responses to camelCase, so components only ever see one
              naming convention.
            </p>
            <p>
              I resolved server-state issues involving request deduplication,
              cache invalidation and refetch correctness across the shared
              multi-tenant codebase.
            </p>
          </section>

          <section aria-labelledby="permissions">
            <h2 id="permissions">Centralised permissions</h2>
            <p>
              B2B page access is defined in a single page-access map and checked
              in the dashboard shell, not with guards scattered across pages.
              Adding a route means adding one entry. In-page controls use a{' '}
              <code className="font-mono text-[0.9em]">usePermissions()</code>{' '}
              hook to show or hide actions based on full or view-only access.
            </p>
          </section>

          <section aria-labelledby="supporting">
            <h2 id="supporting">Uploads, realtime and errors</h2>
            <p>
              File uploads use presigned URLs and go straight to Cloudflare R2,
              bypassing the backend. Notifications arrive in real time over
              ActionCable, and errors are reported to Sentry.
            </p>
          </section>

          <section aria-labelledby="quality">
            <h2 id="quality">Conventions and code review</h2>
            <p>
              The codebase follows a strict layering: types, services, hooks,
              components, pages. Components never call services directly. Husky
              and lint-staged run ESLint, Prettier and the TypeScript compiler
              on every commit, with zero lint warnings allowed, and shared
              components are documented in Storybook.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
