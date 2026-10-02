import { profile } from '@/content/site';

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-rule sm:mt-32"
      aria-labelledby="contact-heading"
    >
      <div className="wrap grid gap-8 py-12 sm:grid-cols-[1fr_auto] sm:items-end sm:py-16">
        <div>
          <p className="label">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl"
          >
            Building something complex?
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-lg link"
          >
            {profile.email}
          </a>
        </div>
        {profile.links.length > 0 && (
          <ul className="flex gap-6 text-sm">
            {profile.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link" rel="me">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
