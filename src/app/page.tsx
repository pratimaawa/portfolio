import Link from 'next/link';

import { Section } from '@/components/Section';
import {
  capabilities,
  experience,
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="wrap pt-12 sm:pt-20">
        <p className="label">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-6 max-w-[22ch] font-serif text-4xl/[1.1] tracking-tight sm:text-5xl/[1.08] lg:text-6xl/[1.05]">
          {profile.headline}
        </h1>
        <p className="mt-8 prose-body text-muted">{profile.intro}</p>
      </div>

      <Section id="work" index="01" title="Selected work">
        <ol className="divide-y divide-rule">
          {projects.map((p, i) => (
            <WorkItem key={p.name} project={p} index={i + 1} />
          ))}
        </ol>
        <div className="mt-6 border-t border-rule pt-6">
          <h3 className="label">Also worked on</h3>
          <ul className="mt-4 space-y-2 text-muted">
            {otherProjects.map((o) => (
              <li key={o.name}>
                <span className="text-fg">{o.name}</span>: {o.note}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="experience" index="02" title="Experience">
        <ol className="space-y-8">
          {experience.map((r) => (
            <li
              key={r.company}
              className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6"
            >
              <h3 className="font-medium">
                {r.title}, <span className="text-muted">{r.company}</span>
              </h3>
              <p className="font-mono text-sm text-muted tabular-nums sm:-col-end-1 sm:row-start-1">
                {r.period}
              </p>
              <p className="max-w-[60ch] text-muted">{r.summary}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="practice" index="03" title="How I work">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title}>
              <dt className="font-medium">{c.title}</dt>
              <dd className="mt-2 text-muted">{c.body}</dd>
              <dd className="mt-2 font-mono text-xs text-muted">{c.tools}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}

function WorkItem({ project, index }: { project: Project; index: number }) {
  const n = String(index).padStart(2, '0');
  const body = (
    <>
      <span
        className="font-mono text-xs text-muted tabular-nums"
        aria-hidden="true"
      >
        {n}
      </span>
      <div>
        <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
          {project.name}
          {project.href && (
            <span
              aria-hidden="true"
              className="ml-2 inline-block text-accent transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </h3>
        <p className="mt-2 max-w-[60ch] text-muted">{project.summary}</p>
        <p className="mt-3 font-mono text-xs text-muted">
          {[project.role, project.period, project.stack.join(' / ')]
            .filter(Boolean)
            .join(' · ')}
        </p>
        {project.live && (
          <a href={project.live} className="mt-3 inline-block text-sm link">
            {new URL(project.live).host} ↗
          </a>
        )}
      </div>
    </>
  );
  const grid = 'grid grid-cols-[2rem_1fr] gap-x-4 py-6 sm:grid-cols-[3rem_1fr]';

  return (
    <li>
      {project.href ? (
        <Link href={project.href} className={`group ${grid}`}>
          {body}
          <span className="sr-only">Read the case study</span>
        </Link>
      ) : (
        <div className={grid}>{body}</div>
      )}
    </li>
  );
}
