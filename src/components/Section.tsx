type Props = {
  id: string;
  index: string;
  title: string;
  // Full-bleed inverted band (see `.band` in globals.css).
  band?: boolean;
  children: React.ReactNode;
};

// Numbered section: mono counter + large serif title, content below.
export function Section({ id, index, title, band = false, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-8 ${band ? 'band py-24 sm:py-32' : 'mt-24 sm:mt-36'}`}
    >
      <div className="wrap">
        <h2
          id={`${id}-heading`}
          className="reveal flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <span className="order-2 display text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] sm:order-1">
            {title}
          </span>
          <span
            aria-hidden="true"
            className="order-1 font-mono text-xs tracking-widest text-accent tabular-nums sm:order-2"
          >
            {index}
          </span>
        </h2>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
