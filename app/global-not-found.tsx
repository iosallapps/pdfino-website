import type { Metadata, Viewport } from "next";
import { THEME_TOP } from "@/lib/constants";
import Link from "next/link";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { COPY } from "@/lib/content";
import Highlighted from "@/components/ui/Highlighted";

// The 404 page: the same shell, never indexed.
export const metadata: Metadata = {
  title: "Page not found - Pdfino",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: THEME_TOP, colorScheme: "dark" };

export default function GlobalNotFound() {
  const c = COPY.en.ui.notFound;
  return (
    <SiteShell lang="en">
      <section className="notfound">
        <div>
          <span className="section-label">{c.label}</span>
          <h1>
            <Highlighted text={c.title} />
          </h1>
          <p>{c.body}</p>
          <Link href="/" className="btn-glow">
            {c.back}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
