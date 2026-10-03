import { profile } from '@/content/site';

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-28 border-t border-rule sm:mt-36"
      aria-labelledby="contact-heading"
    >
      <div className="wrap py-16 sm:py-24">
        <p className="label">Contact</p>
        <h2
          id="contact-heading"
          className="reveal mt-4 max-w-[16ch] font-serif text-4xl/[1.05] tracking-tight sm:text-6xl/[1.02]"
        >
          Let&apos;s build something that <em className="text-accent">lasts</em>
          .
        </h2>
        <p className="mt-6 max-w-[48ch] text-muted sm:text-lg">
          Want to talk frontend, architecture or a project? Email is the fastest
          way to reach me.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-solid">
            Email me
          </a>
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} className="btn-outline" rel="me">
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="mt-6 font-mono text-sm break-all text-muted">
          {profile.email}
        </p>
      </div>
    </footer>
  );
}
