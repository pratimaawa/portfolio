import Link from 'next/link';

import { ThemeToggle } from '@/components/ThemeToggle';
import { profile } from '@/content/site';

const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
    <header className="wrap flex items-center justify-between gap-4 py-6 sm:py-8">
      <Link href="/" className="font-serif text-lg font-medium tracking-tight">
        {profile.name}
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav aria-label="Primary">
          <ul className="flex gap-4 text-sm text-muted sm:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="-my-3 inline-block py-3 transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
