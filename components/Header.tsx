"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import { SITE } from "@/lib/content";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#tools", label: "Tools" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
];

const SCROLL_THRESHOLD = 8;

export default function Header() {
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
        <BrandMark />
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle menu"
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
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-glow btn-sm nav-cta">
          Get the app
        </a>
      </div>
    </header>
  );
}
