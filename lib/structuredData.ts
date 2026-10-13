import { SITE } from "@/lib/content";

// JSON-LD for the home page. The download is free; subscription prices are left to the
// App Store, which shows them per region.
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Pdfino",
      url: SITE.url,
      logo: SITE.logoUrl,
      email: SITE.supportEmail,
      sameAs: [SITE.appStoreUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: "Pdfino",
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE.url}/#app`,
      name: "Pdfino",
      description: SITE.description,
      operatingSystem: "iOS, iPadOS",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Productivity",
      image: SITE.logoUrl,
      url: SITE.url,
      downloadUrl: SITE.appStoreUrl,
      installUrl: SITE.appStoreUrl,
      sameAs: [SITE.appStoreUrl],
      publisher: { "@id": `${SITE.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        url: SITE.appStoreUrl,
        availability: "https://schema.org/InStock",
      },
    },
  ],
};
