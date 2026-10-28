import Image from 'next/image';
import Link from 'next/link';

import flightDemoShot from '@/assets/flight-demo-results.png';
import { Section } from '@/components/Section';
import {
  capabilities,
  experience,
  facts,
  otherProjects,
  profile,
  projects,
  type Project,
} from '@/content/site';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  url: profile.url,
  worksFor: { '@type': 'Organization', name: 'Gurzu' },
  sameAs: profile.links.map((l) => l.href),
};

const IMAGES = {
  'flight-demo': {
    src: flightDemoShot,
    alt: 'Flight Booking Demo results page with filters and expandable fare options',
  },
} as const;

// Unversioned, de-duplicated stack across all projects, for the marquee.
const stack = [
  ...new Set(
    projects.flatMap((p) => p.stack.map((t) => t.replace(/ \d+$/, '')))
  ),
];

const meta = (p: Project) => [p.role, p.period].filter(Boolean).join(' · ');
const pad = (n: number) => String(n).padStart(2, '0');

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const github = profile.links.find((l) => l.label === 'GitHub');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="wrap flex min-h-[calc(100svh-6rem)] flex-col justify-end pt-8 pb-14 sm:pb-20">
        <p className="enter label">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-1 display text-[clamp(3.5rem,14.5vw,12.5rem)] leading-[0.86]">
          {profile.name.split(' ').map((word, i) => (
            <span
              key={word}
              className="mr-[0.18em] inline-block overflow-hidden pt-[0.14em] pr-[0.06em] align-bottom"
            >
              <span
                className={`mask-up block ${i > 0 ? 'text-accent italic' : ''}`}
                style={{ animationDelay: `${i * 140}ms` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 border-t border-rule pt-8 sm:mt-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <p className="enter display text-[clamp(1.65rem,3.2vw,2.6rem)] leading-[1.12] [animation-delay:250ms]">
            <Headline />
          </p>
          <div className="enter [animation-delay:350ms]">
            <p className="text-base/7 text-muted sm:text-lg/8">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-solid">
                Email me
              </a>
              <a href="#work" className="btn-outline">
                View work <span aria-hidden="true">↓</span>
              </a>
              {github && (
                <a
                  href={github.href}
                  className="btn-outline"
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <dl className="enter mt-12 grid border-y border-rule [animation-delay:450ms] sm:mt-16 sm:grid-cols-[1fr_1fr_auto]">
          {facts.map((f) => (
            <div
              key={f.label}
              className="border-rule py-5 not-first:border-t sm:px-6 sm:py-6 sm:not-first:border-t-0 sm:not-first:border-l sm:first:pl-0"
            >
              <dt className="sr-only">{f.label}</dt>
              <dd className="display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none whitespace-nowrap">
                {f.value}
              </dd>
              <dd className="mt-2 text-sm text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        aria-hidden="true"
        className="band overflow-hidden border-b border-rule"
      >
        <div className="marquee flex w-max py-5">
          {[0, 1].map((half) => (
            <ul key={half} className="flex shrink-0">
              {[...stack, ...stack].map((t, i) => (
                <li
                  key={i}
                  className="flex items-center gap-8 pr-8 font-mono text-sm tracking-widest text-muted uppercase"
                >
                  {t}
                  <span className="text-accent">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <Section id="work" index="01 / 03" title="Selected work" band>
        <div className="space-y-24 sm:space-y-32">
          {featured.map((p, i) => (
            <Showcase key={p.name} project={p} n={i + 1} flip={i % 2 === 1} />
          ))}
        </div>

        <ul className="mt-24 border-t border-rule sm:mt-32">
          {rest.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </ul>

        <div className="reveal mt-16">
          <h3 className="label">Also worked on</h3>
          <ul className="mt-5 grid gap-6 sm:grid-cols-3">
            {otherProjects.map((o) => (
              <li key={o.name} className="border-l-2 border-rule pl-4">
                <p className="font-medium">{o.name}</p>
                <p className="mt-1 text-sm text-muted">{o.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="experience" index="02 / 03" title="Experience">
        <ol>
          {experience.map((r) => (
            <li
              key={r.company}
              className="reveal grid gap-3 border-b border-rule py-8 first:border-t sm:py-10 md:grid-cols-[14rem_1fr] md:gap-12"
            >
              <p className="font-mono text-sm text-muted tabular-nums md:pt-2">
                {r.period}
              </p>
              <div>
                <h3 className="display text-3xl leading-tight sm:text-4xl">
                  {r.title}
                </h3>
                <p className="mt-1 font-medium text-accent">{r.company}</p>
                <p className="mt-4 max-w-[62ch] text-muted">{r.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="practice" index="03 / 03" title="How I work">
        <ol className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <li key={c.title} className="reveal border-t border-rule pt-5">
              <p className="font-mono text-xs text-accent tabular-nums">
                {pad(i + 1)}
              </p>
              <h3 className="mt-3 display text-2xl leading-tight sm:text-[1.75rem]">
                {c.title}
              </h3>
              <p className="mt-3 text-muted">{c.body}</p>
              <p className="mt-5 font-mono text-xs text-muted">{c.tools}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}

function Headline() {
  const { headline, headlineEmphasis } = profile;
  const i = headline.indexOf(headlineEmphasis);
  if (i === -1) return headline;
  return (
    <>
      {headline.slice(0, i)}
      <em className="text-accent">{headlineEmphasis}</em>
      {headline.slice(i + headlineEmphasis.length)}
    </>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

// Large alternating showcase for featured projects: visual on one side, story + actions on the other.
function Showcase({
  project: p,
  n,
  flip,
}: {
  project: Project;
  n: number;
  flip: boolean;
}) {
  const image = p.image ? IMAGES[p.image] : null;

  return (
    <article className="reveal grid items-center gap-10 *:min-w-0 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? 'lg:order-2' : ''}>
        {image ? (
          <BrowserFrame host={p.live ? new URL(p.live).host : ''}>
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </BrowserFrame>
        ) : (
          <Poster project={p} />
        )}
      </div>

      <div>
        <p className="label">
          <span className="text-accent">{pad(n)}</span> · {meta(p)}
        </p>
        <h3 className="mt-4 display text-[clamp(2.5rem,5vw,3.75rem)] leading-none">
          {p.name}
        </h3>
        <p className="mt-5 max-w-[52ch] text-muted sm:text-lg/8">{p.summary}</p>
        <Stack items={p.stack} />
        <div className="mt-8 flex flex-wrap gap-3">
          {p.href && (
            <Link href={p.href} className="group btn-solid">
              Read case study
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          )}
          {p.live && (
            <a
              href={p.live}
              className={p.href ? 'btn-outline' : 'btn-solid'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site <span aria-hidden="true">↗</span>
            </a>
          )}
          {p.source && (
            <a
              href={p.source}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function BrowserFrame({
  host,
  children,
}: {
  host: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-rule bg-surface shadow-2xl shadow-black/40 transition-transform duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          {[0, 1, 2].map((d) => (
            <span key={d} className="size-2.5 rounded-full bg-rule" />
          ))}
        </span>
        <span className="mx-auto truncate rounded-full bg-bg px-3 py-0.5 font-mono text-[11px] text-muted">
          {host}
        </span>
        <span aria-hidden="true" className="w-[42px]" />
      </div>
      {children}
    </div>
  );
}

// Typographic stand-in for projects without a screenshot. Duplicates the case-study button, so it's hidden from AT and tab order.
function Poster({ project: p }: { project: Project }) {
  const body = (
    <>
      <div className="flex justify-between gap-4 font-mono text-xs tracking-widest uppercase">
        <span>{p.href ? 'Case study' : p.role}</span>
        <span>{p.period}</span>
      </div>
      <p className="display text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.85] italic transition-transform duration-500 group-hover:-translate-y-1">
        {p.name}
      </p>
      <div className="flex items-end justify-between gap-6">
        <p className="max-w-[32ch] font-mono text-xs tracking-wide uppercase opacity-80">
          {p.role}
        </p>
        <span className="text-3xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </>
  );
  const cls =
    'group flex aspect-[4/3] flex-col justify-between rounded-xl bg-accent p-6 text-bg sm:p-10';

  return p.href ? (
    <Link href={p.href} tabIndex={-1} aria-hidden="true" className={cls}>
      {body}
    </Link>
  ) : (
    <div aria-hidden="true" className={cls}>
      {body}
    </div>
  );
}

function ProjectRow({ project: p }: { project: Project }) {
  return (
    <li className="reveal group hit grid gap-4 border-b border-rule py-8 sm:py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
      <div>
        <p className="label">{meta(p)}</p>
        <h3 className="mt-3 display text-3xl leading-tight sm:text-4xl">
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="stretched-link transition-colors group-hover:text-accent"
            >
              {p.name}
            </a>
          ) : (
            p.name
          )}
        </h3>
      </div>
      <div>
        <p className="text-muted">{p.summary}</p>
        <p className="mt-4 font-mono text-xs text-muted">
          {p.stack.join(' · ')}
        </p>
        {p.live && (
          <p
            aria-hidden="true"
            className="mt-4 text-sm font-medium text-accent"
          >
            {new URL(p.live).host}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </p>
        )}
      </div>
    </li>
  );
}
