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

      <div className="wrap pt-14 sm:pt-24">
        <p className="enter label">
          {profile.role} · {profile.location}
        </p>
        <h1 className="enter mt-6 max-w-[20ch] font-serif text-[2.6rem]/[1.05] tracking-tight sm:text-6xl/[1.02] lg:text-7xl/[1]">
          <Headline />
        </h1>
        <p className="enter mt-8 prose-body text-muted [animation-delay:120ms]">
          {profile.intro}
        </p>

        <div className="enter mt-10 flex flex-wrap gap-3 [animation-delay:200ms]">
          <a href={`mailto:${profile.email}`} className="btn-solid">
            Email me
          </a>
          <a href="#work" className="btn-outline">
            View work <span aria-hidden="true">↓</span>
          </a>
          {github && (
            <a href={github.href} className="btn-outline" rel="me">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        <dl className="enter mt-14 grid grid-cols-1 gap-6 border-t border-rule pt-8 [animation-delay:280ms] sm:grid-cols-3 sm:gap-8">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-serif text-3xl tracking-tight sm:text-4xl">
                {f.value}
              </dd>
              <dd className="mt-1 text-sm text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Section id="work" index="01" title="Selected work" wide>
        <ul className="grid gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} featured />
          ))}
        </ul>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </ul>
        <div className="reveal mt-12">
          <h3 className="label">Also worked on</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {otherProjects.map((o) => (
              <li key={o.name} className="border-l-2 border-accent pl-4">
                <p className="font-medium">{o.name}</p>
                <p className="mt-1 text-sm text-muted">{o.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="experience" index="02" title="Experience">
        <ol className="relative space-y-10 border-l border-rule pl-6 sm:pl-8">
          {experience.map((r) => (
            <li key={r.company} className="reveal relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2rem+5px)]"
              />
              <p className="font-mono text-xs text-muted tabular-nums">
                {r.period}
              </p>
              <h3 className="mt-1 font-serif text-2xl tracking-tight">
                {r.title}
                <span className="text-muted"> · {r.company}</span>
              </h3>
              <p className="mt-2 max-w-[62ch] text-muted">{r.summary}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="practice" index="03" title="How I work" wide>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <li
              key={c.title}
              className="reveal rounded-2xl border border-rule p-5 sm:p-6"
            >
              <h3 className="font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
              <p className="mt-4 font-mono text-xs text-accent">{c.tools}</p>
            </li>
          ))}
        </ul>
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
      <em className="draw-underline text-accent">{headlineEmphasis}</em>
      {headline.slice(i + headlineEmphasis.length)}
    </>
  );
}

function ProjectCard({
  project: p,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const image = p.image ? IMAGES[p.image] : null;
  const meta = [p.role, p.period].filter(Boolean).join(' · ');
  const interactive = Boolean(p.href || p.live);

  return (
    <li
      className={`reveal card ${interactive ? 'group hover:-translate-y-1 hover:border-fg/30 hover:shadow-xl hover:shadow-fg/5' : ''} ${
        image ? 'grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center' : ''
      }`}
    >
      <div>
        <p className="label">{meta}</p>
        <h3
          className={`mt-3 font-serif tracking-tight ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}
        >
          {p.href ? (
            <Link href={p.href} className="stretched-link">
              {p.name}
            </Link>
          ) : p.live ? (
            <a href={p.live} className="stretched-link">
              {p.name}
            </a>
          ) : (
            p.name
          )}
        </h3>
        <p className="mt-3 max-w-[60ch] text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.stack.map((t) => (
            <li
              key={t}
              className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          {p.href && (
            <span className="text-accent" aria-hidden="true">
              Read case study{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
          {p.live && !p.href && (
            <span className="text-accent" aria-hidden="true">
              {new URL(p.live).host}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          )}
          {p.source && (
            <a href={p.source} className="relative z-10 link">
              Source code
            </a>
          )}
        </div>
      </div>
      {image && (
        <div className="overflow-hidden rounded-xl border border-rule bg-bg">
          <Image
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[16/11] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </li>
  );
}
