import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import { SITE } from "@/lib/content";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#tools", label: "Tools" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-page/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={SITE.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-chip neu-press px-5 py-2.5 text-sm font-semibold text-accent-text"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
