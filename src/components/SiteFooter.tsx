import { profile } from '@/content/site';

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="band mt-24 sm:mt-36"
      aria-labelledby="contact-heading"
    >
      <div className="wrap pt-24 pb-10 sm:pt-32">
        <p className="label">Contact</p>
        <h2
          id="contact-heading"
          className="reveal mt-6 max-w-[14ch] display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92]"
        >
          Let&apos;s build something that <em className="text-accent">lasts</em>
          .
        </h2>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="max-w-[48ch] text-muted sm:text-lg">
              Want to talk frontend, architecture or a project? Email is the
              fastest way to reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-6 inline-block display text-[clamp(1.5rem,4vw,2.75rem)] break-all underline decoration-rule decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-accent"
            >
              {profile.email}
              <span
                aria-hidden="true"
                className="ml-2 inline-block text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="btn-outline"
                target="_blank"
                rel="me noopener noreferrer"
              >
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <a href="#main" className="transition-colors hover:text-fg">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
