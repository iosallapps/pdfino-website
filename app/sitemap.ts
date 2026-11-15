import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

const LASTMOD = "2026-11-15";

type Pair = { en: string; ro: string; priority: number; changeFrequency: "monthly" | "yearly" };

// The legal pages keep their .html URLs: every App Store listing links to them.
const PAGES: Pair[] = [
  { en: "/", ro: "/ro/", priority: 1, changeFrequency: "monthly" },
  { en: "/privacy.html", ro: "/ro/privacy.html", priority: 0.3, changeFrequency: "yearly" },
  { en: "/terms.html", ro: "/ro/terms.html", priority: 0.3, changeFrequency: "yearly" },
];

/** Every URL in both languages, each with hreflang alternates to its sibling. */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    (["en", "ro"] as const).map((lang) => ({
      url: `${SITE.url}${page[lang]}`,
      lastModified: LASTMOD,
      changeFrequency: page.changeFrequency,
      priority: lang === "en" ? page.priority : Math.max(page.priority - 0.1, 0.1),
      alternates: {
        languages: { en: `${SITE.url}${page.en}`, ro: `${SITE.url}${page.ro}`, "x-default": `${SITE.url}${page.en}` },
      },
    })),
  );
}
