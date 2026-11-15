import AppStoreBadge from "@/components/ui/AppStoreBadge";
import BrandMark from "@/components/ui/BrandMark";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "/privacy.html", label: "Privacy Policy" },
  { href: "/terms.html", label: "Terms of Use" },
  { href: "/ro/privacy.html", label: "Politica de confidențialitate" },
  { href: "/ro/terms.html", label: "Termeni de utilizare" },
];

const STUDIO_URL = "https://vistoapps.com";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <BrandMark />
            <p style={{ marginTop: 16 }}>PDF tools for iPhone and iPad. Your documents stay on your device.</p>
            <AppStoreBadge size="sm" />
          </div>
          <nav className="footer-section" aria-label="Legal">
            <h4>Legal</h4>
            <ul>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-note">
          <strong>Official Pdfino.</strong> {SITE.officialNote}
        </p>
        <div className="footer-bottom">
          <span>&copy; 2026 Visto Apps, the brand of Darius Cirjan</span>
          <a href={STUDIO_URL}>Made by Visto Apps</a>
        </div>
      </div>
    </footer>
  );
}
