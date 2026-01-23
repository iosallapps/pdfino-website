import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-2xl font-bold text-[var(--brand)]">Pdfino</span>
            </Link>
            <p className="text-[var(--foreground-muted)] max-w-sm mb-6">
              The ultimate PDF toolkit for iPhone and iPad. Compress, edit, sign, merge, and convert PDFs. 100% offline. 100% private.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="mailto:pdfinoapp@gmail.com"
                className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                pdfinoapp@gmail.com
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--foreground-muted)]">
            &copy; {currentYear} Pdfino. All rights reserved.
          </p>
          <p className="text-sm text-[var(--foreground-muted)]">
            Made with care for iPhone and iPad users
          </p>
        </div>
      </div>
    </footer>
  );
}
