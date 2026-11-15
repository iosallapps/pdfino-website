import Link from "next/link";
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
export default function LegalPage({ kind, lang }: { kind: LegalKind; lang: LegalLang }) {
  const other = SWITCH[kind][lang];
  return (
    <div lang={lang} className="legal-page">
      <p className="legal-switch">
        <Link href={other.href} hrefLang={other.hreflang} prefetch={false}>
          {other.label}
        </Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: LEGAL_HTML[kind][lang] }} />
    </div>
  );
}
