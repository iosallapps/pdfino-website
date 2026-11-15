"use client";

import { useEffect } from "react";
import { THEME_SCROLLED, THEME_TOP } from "@/lib/constants";

const SCROLL_THRESHOLD = 8;

/**
 * Status bar color + rubber-band stretch, as on vistoapps.com. While iOS bounces the page
 * above its top, --osy holds the overscroll in px and .animated-bg scales from its bottom
 * edge (globals.css), so its top edge follows the page down and no gap shows.
 */
export default function Overscroll() {
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    const root = document.documentElement;
    let last = "";
    let pending = false;
    let stretched = false;
    const apply = () => {
      pending = false;
      const y = window.scrollY;
      const theme = y > SCROLL_THRESHOLD ? THEME_SCROLLED : THEME_TOP;
      if (meta && theme !== last) {
        meta.setAttribute("content", theme);
        last = theme;
      }
      if (y < 0) {
        root.style.setProperty("--osy", String(-y));
        stretched = true;
      } else if (stretched) {
        root.style.removeProperty("--osy");
        stretched = false;
      }
    };
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(apply);
      }
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
