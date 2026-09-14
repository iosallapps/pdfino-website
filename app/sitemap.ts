import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

// The legal pages keep their .html URLs: every App Store listing links to them.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/privacy.html`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms.html`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
