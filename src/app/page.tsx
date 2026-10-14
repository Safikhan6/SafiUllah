import { site, isSet } from "@/content/site";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Heading, btnPrimary, btnSecondary } from "@/components/ui";
import { Icon } from "@/components/Icons";

export default function Home() {
  const h = site.hero;
  return (
    <>
      <Navbar />
      <main>
        {/* HOME */}
        <section id="home" className="scroll-mt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[7fr_5fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-1.5 text-sm font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                {site.name} · {h.eyebrow}
              </p>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {h.before}
                <span className="underline decoration-amber decoration-[6px] underline-offset-[10px]">
                  {h.highlight}
                </span>
                {h.after}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {site.positioning}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact" className={btnPrimary}>
                  {h.primaryCta}
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5"
                  />
                </a>
                <a href="#work" className={btnSecondary}>
                  {h.secondaryCta}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-card p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                I work with
              </p>
              <ul className="mt-5 space-y-5">
                {site.clients.map((c) => (
                  <li key={c.title} className="flex gap-4">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-soft text-primary">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-heading font-extrabold">{c.title}</span>
                      <span className="text-sm text-muted">{c.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Services />
        <Work />

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[7fr_5fr]">
            <div>
              <Heading eyebrow="About" title={site.about.title} />
              <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
                {site.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {site.showCredentials && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {site.credentials.map((c) => (
                    <li key={c} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm">
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <dl className="h-fit divide-y divide-line rounded-3xl border border-line bg-card">
              {site.about.facts.map((f) => (
                <div key={f.label} className="p-5">
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Process />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-5">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-fg">
                {n.label}
              </a>
            ))}
            {isSet(site.contact.email) && (
              <a href={`mailto:${site.contact.email}`} className="hover:text-fg">
                Email
              </a>
            )}
          </nav>
        </div>
      </footer>
    </>
  );
}
