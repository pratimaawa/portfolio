'use client';

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
    };
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="group relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-rule bg-surface p-1 transition-colors hover:border-fg"
    >
      {/* Knob slides right in dark mode; icon swaps via the dark: variant, so no hydration mismatch. */}
      <span className="flex size-6 items-center justify-center rounded-full bg-fg text-bg shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.75,0.15,1)] dark:translate-x-6">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-3.5 transition-transform duration-500 group-hover:rotate-45 dark:hidden"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hidden size-3.5 transition-transform duration-500 group-hover:-rotate-12 dark:block"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </span>
    </button>
  );
}
