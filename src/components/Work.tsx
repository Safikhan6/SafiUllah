import Image from "next/image";
import { site } from "@/content/site";
import { Heading, btnPrimary, btnSecondary } from "./ui";
import { Icon } from "./Icons";

export function Work() {
  const [featured, ...demos] = site.projects;
  const cs = site.caseStudy;

  return (
    <>
      <section id="work" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Heading eyebrow="Work" title={site.workIntro.title} text={site.workIntro.text} />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* FEATURED: ACME SOFTS */}
            <article className="group relative overflow-hidden rounded-3xl border border-line bg-card shadow-sm transition duration-300 hover:border-primary hover:shadow-xl md:col-span-2">
              <div className="relative h-64 w-full overflow-hidden bg-ink sm:h-80 lg:h-96">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={`Screenshot of the ${featured.title} website`}
                    fill
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
                      <span className="flex gap-1.5" aria-hidden="true">
                        <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      </span>
                      <span className="rounded-md bg-white/10 px-3 py-1 text-xs text-white/70">
                        {featured.domain}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                      <p className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                        {featured.title}
                      </p>
                      <p className="mt-3 text-white/60">{featured.type}</p>
                    </div>
                  </div>
                )}
                <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-ink shadow">
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                  Live project
                </span>
              </div>

              <div className="flex flex-col gap-6 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h3 className="font-heading text-2xl font-extrabold sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-muted">{featured.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#project-acme-softs"
                    className={btnPrimary + " after:absolute after:inset-0 after:content-['']"}
                  >
                    View Case Study
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnSecondary + " relative z-10"}
                  >
                    Visit Live Website
                    <Icon name="external" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>

            {/* DEMO PROJECTS */}
            {demos.map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-3xl border border-line bg-card">
                <div className="grid h-48 place-items-center border-b border-dashed border-line bg-soft px-6 text-center">
                  <div>
                    <span className="inline-block rounded-full bg-amber px-3.5 py-1.5 text-xs font-bold text-ink">
                      Demo Project: Coming Soon
                    </span>
                    <p className="mt-3 text-sm text-muted">Not a client project</p>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>

          {site.reviews.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {site.reviews.map((r) => (
                <blockquote key={r.name} className="rounded-2xl border border-line bg-card p-6">
                  <p>{r.text}</p>
                  <footer className="mt-3 text-sm text-muted">
                    {r.name}, {r.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="project-acme-softs" className="scroll-mt-20 border-y border-line bg-soft/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Heading eyebrow="Case study" title={cs.heading} />

          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="h-fit rounded-2xl border border-line bg-card p-6 lg:sticky lg:top-28">
              <h3 className="font-heading text-lg font-extrabold">Project snapshot</h3>
              <dl className="mt-4 space-y-4">
                {cs.snapshot.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs font-bold uppercase tracking-widest text-primary">
                      {s.label}
                    </dt>
                    <dd className="mt-0.5 font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary + " mt-6 w-full"}
              >
                {cs.cta}
                <Icon name="external" className="h-4 w-4" />
              </a>
              <a href="#work" className="mt-4 block text-center text-sm font-semibold text-muted hover:text-primary">
                Back to all work
              </a>
            </aside>

            <div className="space-y-4">
              {cs.blocks.map((b, i) => (
                <div key={b.label} className="rounded-2xl border border-line bg-card p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    0{i + 1} / {b.label}
                  </p>
                  <p className="mt-2 text-lg leading-relaxed">{b.text}</p>
                </div>
              ))}
              <p className="px-1 text-sm text-muted">{cs.note}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
