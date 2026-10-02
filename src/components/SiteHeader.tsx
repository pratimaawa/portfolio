import Link from 'next/link';

import { profile } from '@/content/site';

const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
    <header className="wrap flex items-baseline justify-between gap-4 py-6 sm:py-8">
      <Link href="/" className="font-serif text-lg font-medium tracking-tight">
        {profile.name}
      </Link>
      <nav aria-label="Primary">
        <ul className="flex gap-4 text-sm text-muted sm:gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
