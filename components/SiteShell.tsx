import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COPY, type Lang } from "@/lib/content";

/** Fonts used above the fold, preloaded so the headline does not wait for the stylesheet. */
const PRELOAD_FONTS = ["/fonts/instrument-serif.woff2", "/fonts/inter.woff2"];

/** The <html> document for one language: skip link, header, page, footer. */
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const c = COPY[lang];
  return (
    <html lang={c.htmlLang}>
      <body>
        {PRELOAD_FONTS.map((href) => (
          <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        <div className="animated-bg" aria-hidden="true" />
        <a href="#main" className="skip-link">
          {c.ui.skip}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
