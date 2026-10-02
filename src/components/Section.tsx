type Props = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
};

// Numbered section with a hairline rule; label column collapses above content on mobile.
export function Section({ id, index, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="wrap mt-20 scroll-mt-8 sm:mt-28"
    >
      <div className="grid gap-6 border-t border-rule pt-6 md:grid-cols-[12rem_1fr] md:gap-10">
        <h2 id={`${id}-heading`} className="flex gap-3 label">
          <span className="tabular-nums" aria-hidden="true">
            {index}
          </span>
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
