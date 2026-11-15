import type { Metadata } from "next";
import { COPY, SITE, type Lang } from "@/lib/content";

export const ALT_LANG: Record<Lang, Lang> = { en: "ro", ro: "en" };

/** Absolute-path alternates for a page that exists in both languages (EN path, RO path). */
export function pageAlternates(paths: Record<Lang, string>, lang: Lang): NonNullable<Metadata["alternates"]> {
  return {
    canonical: paths[lang],
    languages: { en: paths.en, ro: paths.ro, "x-default": paths.en },
  };
}

const OG_IMAGE = { url: "/og.png", width: 1200, height: 630 };

/** Title, description, Open Graph and Twitter for one page. `title` is the full <title> text. */
export function pageMetadata(lang: Lang, paths: Record<Lang, string>, title: string, description: string): Metadata {
  const c = COPY[lang];
  return {
    title: { absolute: title },
    description,
    alternates: pageAlternates(paths, lang),
    openGraph: {
      title,
      description,
      url: paths[lang],
      siteName: "Pdfino",
      locale: c.seo.ogLocale,
      alternateLocale: [COPY[ALT_LANG[lang]].seo.ogLocale],
      type: "website",
      images: [{ ...OG_IMAGE, alt: c.seo.ogAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

/** Site-wide metadata shared by every page. */
export function baseMetadata(lang: Lang): Metadata {
  const c = COPY[lang];
  return {
    metadataBase: new URL(SITE.url),
    applicationName: "Pdfino",
    keywords: c.seo.keywords,
    authors: [{ name: "Visto Apps", url: "https://vistoapps.com" }],
    itunes: { appId: SITE.appStoreId },
    icons: {
      icon: [
        { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    robots: { index: true, follow: true },
  };
}
