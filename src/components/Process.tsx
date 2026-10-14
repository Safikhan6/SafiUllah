import { site } from "@/content/site";
import { Heading } from "./ui";
import { Icon } from "./Icons";

export function Process() {
  const p = site.processIntro;
  return (
    <section id="process" className="scroll-mt-20 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[5fr_7fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading eyebrow="Process" title={p.title} text={p.text} />
          <ul className="mt-8 space-y-3">
            {p.promises.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#22C55E] text-ink">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-line" />
          {site.process.map((s, i) => (
            <li
              key={s.step}
              tabIndex={0}
              className="group relative rounded-2xl pb-5 pl-[4.5rem] last:pb-0"
            >
              <span className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border-2 border-line bg-card font-heading text-base font-extrabold text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-focus-visible:border-primary group-focus-visible:bg-primary group-focus-visible:text-white dark:group-hover:text-ink dark:group-focus-visible:text-ink">
                0{i + 1}
              </span>
              <div className="rounded-2xl border border-line bg-card p-5 transition duration-300 group-hover:border-primary group-hover:shadow-md group-focus-visible:border-primary sm:p-6">
                <h3 className="font-heading text-lg font-extrabold">{s.step}</h3>
                <p className="mt-1.5 text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
