'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Highlights the last menu section scrolled past (so gaps and unlisted sections don't flicker).
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const n of nav) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= line) current = n.id;
      }
      setActive(atBottom ? 'contact' : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled]);

  return enabled ? active : null;
}

export function NavLinks() {
  const isHome = usePathname() === '/';
  const active = useActiveSection(isHome);

  return (
    <nav aria-label="Primary">
      <ul className="flex text-[0.8125rem] sm:gap-2 sm:text-sm">
        {nav.map((item) => {
          const current = active === item.id;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={current ? 'location' : undefined}
                className={`relative inline-flex min-h-11 items-center px-1.5 transition-colors after:absolute after:inset-x-1.5 after:bottom-2 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 sm:px-2 sm:after:inset-x-2 ${
                  current
                    ? 'text-fg after:scale-x-100'
                    : 'text-muted after:scale-x-0 hover:text-fg'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
