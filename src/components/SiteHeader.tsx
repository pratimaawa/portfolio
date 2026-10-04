import Link from 'next/link';

import { profile } from '@/content/site';

import { NavLinks } from './NavLinks';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <div className="wrap flex items-center justify-between gap-4 py-4 sm:py-5">
        <Link
          href="/"
          className="font-serif text-base font-medium tracking-tight whitespace-nowrap sm:text-lg"
        >
          {profile.name}
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
