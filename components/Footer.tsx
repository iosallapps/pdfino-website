import Link from "next/link";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import BrandMark from "@/components/ui/BrandMark";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-sm leading-relaxed text-ink-muted">
            PDF tools for iPhone and iPad. Your documents stay on your device.
          </p>
          <div className="mt-6">
            <AppStoreBadge size="sm" />
          </div>
        </div>
        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold text-ink">Legal</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-ink">Support</h2>
          <a href={`mailto:${SITE.supportEmail}`} className="mt-4 inline-block text-ink-muted transition-colors hover:text-ink">
            {SITE.supportEmail}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-ink-muted sm:px-8">&copy; {year} Pdfino. All rights reserved.</p>
      </div>
    </footer>
  );
}
