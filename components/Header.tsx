"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import { COPY, SITE, type Lang } from "@/lib/content";

const NAV_IDS = ["features", "tools", "privacy", "faq"] as const;

const SCROLL_THRESHOLD = 8;

export default function Header({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const other = COPY[lang === "en" ? "ro" : "en"];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`.trim()}>
      <div className="container">
        <BrandMark lang={lang} />
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={c.ui.menu}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <nav aria-label="Main" id="main-nav">
          <ul className="nav-links">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <Link href={`${c.homePath}#${id}`} onClick={() => setOpen(false)}>
                  {c.ui.nav[id]}
                </Link>
              </li>
            ))}
            <li>
              <a href={other.homePath} hrefLang={other.htmlLang} lang={other.htmlLang} className="lang-switch">
                {c.ui.switchLabel}
              </a>
            </li>
          </ul>
        </nav>
        <a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-glow btn-sm nav-cta">
          {c.ui.getApp}
        </a>
      </div>
    </header>
  );
}
