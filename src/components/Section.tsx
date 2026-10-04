type Props = {
  id: string;
  index: string;
  title: string;
  // Stack the heading above the content and use the full width (for card grids).
  wide?: boolean;
  children: React.ReactNode;
};

// Numbered section with a hairline rule; label column collapses above content on mobile.
export function Section({ id, index, title, wide = false, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="wrap mt-24 scroll-mt-24 sm:mt-32"
    >
      <div
        className={`grid gap-8 border-t border-rule pt-8 ${wide ? '' : 'md:grid-cols-[12rem_1fr] md:gap-10'}`}
      >
        <h2 id={`${id}-heading`} className="reveal">
          <span
            className="block font-serif text-5xl leading-none text-accent tabular-nums sm:text-6xl"
            aria-hidden="true"
          >
            {index}
          </span>
          <span className="mt-3 block label">{title}</span>
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
