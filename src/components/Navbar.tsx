"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "./Icons";
import { btnPrimary } from "./ui";

export function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = [...site.nav.map((n) => n.href.slice(1)), "project-acme-softs", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id === "project-acme-softs" ? "work" : e.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 border-b bg-bg/90 backdrop-blur transition-shadow " +
        (scrolled ? "border-line shadow-sm" : "border-transparent")
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px]">
        <a
          href="#home"
          aria-label={`${site.name}, back to top`}
          className="flex items-center gap-3 rounded-lg"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-heading text-sm font-extrabold text-white dark:text-ink"
          >
            SU
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight">
            {site.name}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {site.nav.map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={isActive ? "location" : undefined}
                className={
                  "relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors " +
                  (isActive ? "text-fg" : "text-muted hover:text-fg")
                }
              >
                {n.label}
                <span
                  aria-hidden="true"
                  className={
                    "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 " +
                    (isActive ? "scale-x-100" : "scale-x-0")
                  }
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className={btnPrimary + " !px-5 !py-2.5 !text-sm"}>
            {site.hero.primaryCta}
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5"
            />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-bg px-5 pb-5 pt-3 md:hidden"
        >
          <ul className="flex flex-col">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === n.href.slice(1) ? "location" : undefined}
                  className={
                    "block rounded-lg px-3 py-3 text-base font-semibold " +
                    (active === n.href.slice(1) ? "bg-soft text-primary" : "text-fg")
                  }
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
