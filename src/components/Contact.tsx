"use client";

import { useRef, useState } from "react";
import { site, isSet } from "@/content/site";
import { Heading, btnPrimary } from "./ui";
import { Icon } from "./Icons";

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition focus:border-primary";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const c = site.contactSection;

  function message() {
    const d = new FormData(formRef.current ?? undefined);
    const v = (k: string) => String(d.get(k) ?? "").trim() || "-";
    return [
      `Name: ${v("name")}`,
      `Email: ${v("email")}`,
      `Service: ${v("service")}`,
      "",
      `What I want to build:\n${v("build")}`,
      "",
      `My business / product:\n${v("business")}`,
      "",
      `Requirements and details:\n${v("details")}`,
      "",
      `Timeline / budget: ${v("timeline")}`,
    ].join("\n");
  }

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!isSet(site.contact.email)) {
      setStatus("Email is not set up yet. Add your address in src/content/site.ts.");
      return;
    }
    const subject = encodeURIComponent("New project inquiry");
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(message())}`;
    setStatus("Opening your email app...");
  }

  function sendWhatsApp() {
    if (!formRef.current?.reportValidity()) return;
    if (!isSet(site.contact.whatsapp)) {
      setStatus("WhatsApp is not set up yet. Add your number in src/content/site.ts.");
      return;
    }
    window.open(
      `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message())}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("Opening WhatsApp...");
  }

  return (
    <section id="contact" className="scroll-mt-20 pb-24 pt-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 rounded-[2rem] bg-ink p-7 text-white sm:p-12 lg:grid-cols-[5fr_6fr]">
          <div>
            <Heading light eyebrow="Start a project" title={c.title} text={c.text} />
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-white/60">
              Helpful to include
            </p>
            <ul className="mt-3 space-y-2.5">
              {c.include.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-amber text-ink">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="rounded-2xl bg-card p-6 text-fg sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Your name
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="text-sm font-semibold">
                Your email
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
            </div>

            <label className="mt-4 block text-sm font-semibold">
              Service you need
              <select name="service" className={field} defaultValue="Not sure yet">
                {site.services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </label>

            <label className="mt-4 block text-sm font-semibold">
              What do you want to build?
              <textarea name="build" required rows={3} className={field} placeholder="Describe your idea in a few sentences" />
            </label>

            <label className="mt-4 block text-sm font-semibold">
              About your business or product
              <textarea name="business" rows={2} className={field} />
            </label>

            <label className="mt-4 block text-sm font-semibold">
              Requirements and other details
              <textarea name="details" rows={2} className={field} />
            </label>

            <label className="mt-4 block text-sm font-semibold">
              Timeline or budget (optional)
              <input name="timeline" className={field} />
            </label>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" className={btnPrimary + " cursor-pointer"}>
                Send by email
                <Icon name="arrow" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={sendWhatsApp}
                className="cursor-pointer rounded-xl border border-line px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
              >
                Send on WhatsApp
              </button>
            </div>
            <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-muted">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
