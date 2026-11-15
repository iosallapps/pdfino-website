import AppStoreBadge from "@/components/ui/AppStoreBadge";
import BrandMark from "@/components/ui/BrandMark";
import { COPY, SITE, type Lang } from "@/lib/content";

const EN_LINKS = [
  { href: "/privacy.html", label: "Privacy Policy", lang: "en" },
  { href: "/terms.html", label: "Terms of Use", lang: "en" },
];
const RO_LINKS = [
  { href: "/ro/privacy.html", label: "Politica de confidențialitate", lang: "ro" },
  { href: "/ro/terms.html", label: "Termeni de utilizare", lang: "ro" },
];
const OFFICIAL_NOTE: Record<Lang, string> = {
  en: SITE.officialNote,
  ro: "Pdfino este o aplicație iOS și iPadOS disponibilă în App Store. pdfino.com este singurul său site oficial.",
};
const STUDIO_APPS_URL = "https://vistoapps.com/apps.html";
const MADE_BY: Record<Lang, string> = { en: "Made by Visto Apps", ro: "Creat de Visto Apps" };

const STUDIO_URL = "https://vistoapps.com";

export default function Footer({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const links = lang === "en" ? [...EN_LINKS, ...RO_LINKS] : [...RO_LINKS, ...EN_LINKS];
  const other = COPY[lang === "en" ? "ro" : "en"];
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <BrandMark lang={lang} />
            <p style={{ marginTop: 16 }}>{c.ui.footerBlurb}</p>
            <AppStoreBadge size="sm" lang={lang} />
          </div>
          <nav className="footer-section" aria-label={c.ui.legal}>
            <h2>{c.ui.legal}</h2>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} hrefLang={link.lang} lang={link.lang}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-section">
            <h2>{c.ui.support}</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
              </li>
              <li>
                <a href={other.homePath} hrefLang={other.htmlLang} lang={other.htmlLang}>
                  {c.ui.switchLabel}
                </a>
              </li>
              <li>
                <a href={STUDIO_APPS_URL}>{c.ui.more}</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-note">
          <strong>{c.ui.officialLead}</strong> {OFFICIAL_NOTE[lang]}
        </p>
        <div className="footer-bottom">
          <span>&copy; 2026 Visto Apps, the brand of Darius Cirjan</span>
          <a href={STUDIO_URL}>{MADE_BY[lang]}</a>
        </div>
      </div>
    </footer>
  );
}
