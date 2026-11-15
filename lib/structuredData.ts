import { COPY, SITE, type Lang } from "@/lib/content";

const STUDIO = { name: "Visto Apps", url: "https://vistoapps.com", founder: "Darius Cirjan" };
const MIN_OS = "iOS 17.0 or later, iPadOS 17.0 or later";
const SCREENSHOTS = ["home", "compress", "scan", "split", "protect"].map((name) => `${SITE.url}/screens/${name}-720.webp`);

const orgId = `${SITE.url}/#organization`;

/** Visto Apps as the author and publisher of the app and the site. */
const ORGANIZATION = {
  "@type": "Organization",
  "@id": orgId,
  name: STUDIO.name,
  url: STUDIO.url,
  founder: { "@type": "Person", name: STUDIO.founder },
  email: SITE.supportEmail,
};

/** JSON-LD for a home page: WebSite, Organization, the app and the visible FAQ. No ratings: the app has none to report. */
export function homeStructuredData(lang: Lang) {
  const c = COPY[lang];
  const url = `${SITE.url}${c.homePath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION,
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: "Pdfino",
        url: `${SITE.url}/`,
        inLanguage: ["en", "ro"],
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: c.seo.title,
        description: c.seo.description,
        inLanguage: c.htmlLang,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#app` },
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE.url}/#app`,
        name: "Pdfino",
        alternateName: "Pdfino: Compress PDF File Size",
        description: c.seo.description,
        operatingSystem: MIN_OS,
        applicationCategory: "UtilitiesApplication",
        image: SITE.logoUrl,
        screenshot: SCREENSHOTS,
        url: `${SITE.url}/`,
        downloadUrl: SITE.appStoreUrl,
        installUrl: SITE.appStoreUrl,
        sameAs: [SITE.appStoreUrl],
        inLanguage: ["en", "ro"],
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: SITE.appStoreUrl, availability: "https://schema.org/InStock" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: c.htmlLang,
        mainEntity: c.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

/** BreadcrumbList for an inner page: Pdfino home, then the page. */
export function breadcrumbData(lang: Lang, name: string, path: string) {
  const c = COPY[lang];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pdfino", item: `${SITE.url}${c.homePath}` },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}

/** Serialises JSON-LD for a script tag. */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
