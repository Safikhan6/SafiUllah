export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-xl bg-amber px-6 py-3 text-base font-bold text-ink shadow-sm transition hover:brightness-105 hover:shadow-lg motion-safe:hover:-translate-y-0.5";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-card px-6 py-3 text-base font-semibold text-fg transition hover:border-primary hover:text-primary";

export function Heading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={
          "text-sm font-bold uppercase tracking-[0.18em] " +
          (light ? "text-amber" : "text-primary")
        }
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {text && (
        <p className={"mt-4 text-lg " + (light ? "text-white/75" : "text-muted")}>
          {text}
        </p>
      )}
    </div>
  );
}
