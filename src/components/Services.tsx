import { site } from "@/content/site";
import { Heading } from "./ui";
import { Icon } from "./Icons";

export function Services() {
  return (
    <section id="services" className="services-band scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-20">
        <Heading
          center
          eyebrow="Services"
          title={site.servicesIntro.title}
          text={site.servicesIntro.text}
        />

        <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <article
              key={s.title}
              className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 text-center shadow-sm transition duration-300 hover:border-primary hover:shadow-xl motion-safe:hover:-translate-y-1 lg:[&:nth-child(3n+2)]:mt-10"
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-md transition-transform duration-300 dark:text-ink motion-safe:group-hover:scale-105">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-extrabold leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.get}</p>

              <dl className="mt-5 space-y-3 border-t border-line pt-5 text-left text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary">
                    Business value
                  </dt>
                  <dd className="mt-1">{s.value}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary">
                    Useful when
                  </dt>
                  <dd className="mt-1">{s.useful}</dd>
                </div>
              </dl>

              <a
                href="#contact"
                aria-label={`Discuss ${s.title}`}
                className="mx-auto mt-6 text-sm font-bold uppercase tracking-widest underline decoration-2 underline-offset-8 transition-colors hover:text-primary"
              >
                Discuss this
              </a>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center text-white">
          Not sure which service you need?{" "}
          <a href="#contact" className="font-bold underline underline-offset-4 hover:text-amber">
            Tell me about your project
          </a>
          .
        </p>
      </div>
    </section>
  );
}
