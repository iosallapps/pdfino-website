import JsonLd from "@/components/JsonLd";
import { breadcrumbData } from "@/lib/structuredData";
import { LEGAL_HTML, type LegalKind, type LegalLang } from "@/lib/legalContent";

const SWITCH: Record<LegalKind, Record<LegalLang, { href: string; label: string; hreflang: string }>> = {
  privacy: {
    en: { href: "/ro/privacy.html", label: "Română", hreflang: "ro" },
    ro: { href: "/privacy.html", label: "English", hreflang: "en" },
  },
  terms: {
    en: { href: "/ro/terms.html", label: "Română", hreflang: "ro" },
    ro: { href: "/terms.html", label: "English", hreflang: "en" },
  },
};

/** The generated Privacy Policy or Terms, in English or Romanian, with a link to the other language. */
export default function LegalPage({ kind, lang, breadcrumb }: { kind: LegalKind; lang: LegalLang; breadcrumb: { name: string; path: string } }) {
  const other = SWITCH[kind][lang];
  return (
    <div lang={lang} className="legal-page">
      <JsonLd data={breadcrumbData(lang, breadcrumb.name, breadcrumb.path)} />
      <p className="legal-switch">
        <a href={other.href} hrefLang={other.hreflang}>
          {other.label}
        </a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: LEGAL_HTML[kind][lang] }} />
    </div>
  );
}
