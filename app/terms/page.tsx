import type { Metadata } from "next";
import { FileText, Check, AlertTriangle, CreditCard, XCircle, Scale, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Pdfino",
  description: "Terms of Service for Pdfino PDF toolkit app.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-light)] mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-[var(--foreground-muted)]">Last Updated: January 24, 2026</p>
        </div>

        {/* Developer Info */}
        <div className="mb-8 p-4 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] text-sm text-[var(--foreground-muted)]">
          <p><strong className="text-[var(--foreground)]">Developer:</strong> Cirjan Darius</p>
          <p><strong className="text-[var(--foreground)]">Contact:</strong> pdfinoapp@gmail.com</p>
          <p><strong className="text-[var(--foreground)]">App:</strong> Pdfino - PDF Toolkit for iPhone</p>
        </div>

        {/* Quick Summary */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
          <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Quick Summary</h2>
          <ul className="space-y-2 text-blue-800/80 dark:text-blue-200/80">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Use Pdfino for lawful purposes only</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>All file processing is local - your files stay on your device</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Always backup files before processing</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Subscriptions are managed through Apple</span>
            </li>
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Service Description */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">What Pdfino Does</h2>
            </div>

            <p className="text-[var(--foreground-muted)] mb-4">
              Pdfino is a PDF toolkit for iPhone that lets you:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Compress & optimize PDFs",
                "Edit, annotate, sign documents",
                "Convert between formats",
                "Merge, split, reorder pages",
                "Add passwords & redact info",
                "Extract text & images",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                  <Check className="w-4 h-4 text-[var(--brand)]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-sm text-green-800/80 dark:text-green-200/80">
                <strong className="text-green-700 dark:text-green-300">100% Local Processing:</strong> All files are processed on your device. Nothing is uploaded to servers.
              </p>
            </div>
          </section>

          {/* Subscriptions */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Subscriptions & Payments</h2>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                  <h3 className="font-medium mb-2">Free Tier</h3>
                  <ul className="text-sm text-[var(--foreground-muted)] space-y-1">
                    <li>10 compressions/day</li>
                    <li>All tools available</li>
                    <li>Includes ads</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand-light)]/10 border border-[var(--brand)]/20">
                  <h3 className="font-medium mb-2 text-[var(--brand)]">Premium</h3>
                  <ul className="text-sm text-[var(--foreground-muted)] space-y-1">
                    <li>Unlimited compressions</li>
                    <li>All premium features</li>
                    <li>No ads</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Auto-Renewal</h3>
                <p className="text-sm text-amber-800/80 dark:text-amber-200/80">
                  Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-3">How to Cancel</h3>
                <ol className="space-y-2 text-[var(--foreground-muted)]">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-sm font-medium">1</span>
                    <span>Open <strong>Settings</strong> on your iPhone</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-sm font-medium">2</span>
                    <span>Tap your name at the top</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-sm font-medium">3</span>
                    <span>Tap <strong>Subscriptions</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center text-sm font-medium">4</span>
                    <span>Select <strong>Pdfino</strong> and tap <strong>Cancel</strong></span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-medium mb-2">Pricing</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Current subscription prices are displayed in the App Store and within the app before purchase. Prices may vary by region and are subject to change. Any price changes will not affect active subscriptions until renewal.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Refunds</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  All refunds are handled by Apple. Visit{" "}
                  <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">
                    reportaproblem.apple.com
                  </a>{" "}
                  to request a refund.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Your Responsibilities</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Do
                </h3>
                <ul className="space-y-2 text-[var(--foreground-muted)]">
                  <li>Use the app lawfully</li>
                  <li>Backup your files before processing</li>
                  <li>Keep your device secure</li>
                  <li>Verify processed files before deleting originals</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Don&apos;t
                </h3>
                <ul className="space-y-2 text-[var(--foreground-muted)]">
                  <li>Process illegal content</li>
                  <li>Reverse engineer the app</li>
                  <li>Distribute malware</li>
                  <li>Abuse the service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-semibold">Important Disclaimers</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="font-medium mb-2 text-amber-700 dark:text-amber-300">Provided &quot;As Is&quot;</h3>
                <p className="text-sm text-amber-800/80 dark:text-amber-200/80">
                  The app is provided without warranties. We don&apos;t guarantee it will be error-free or meet all your requirements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <h3 className="font-medium mb-2 text-red-700 dark:text-red-300">Backup Your Files</h3>
                <p className="text-sm text-red-800/80 dark:text-red-200/80">
                  You are solely responsible for backing up your original files. We are not liable for any data loss.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--background)]">
                <h3 className="font-medium mb-2">Limitation of Liability</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  We are not liable for indirect damages, data loss, or quality loss from file processing.
                </p>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Legal</h2>
            </div>

            <div className="space-y-4 text-[var(--foreground-muted)]">
              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Intellectual Property</h3>
                <p className="text-sm">Pdfino and all related content are protected by copyright and trademark laws.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">App Store</h3>
                <p className="text-sm">Use of the app is also subject to Apple&apos;s App Store Terms of Service.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Governing Law</h3>
                <p className="text-sm">These terms are governed by the laws of Romania, without regard to conflict of law principles. For EU consumers, mandatory consumer protection laws of your country of residence also apply.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Dispute Resolution</h3>
                <p className="text-sm">Any disputes shall first be attempted to be resolved through good-faith negotiation by contacting us at pdfinoapp@gmail.com. If unresolved within 30 days, disputes may be submitted to the competent courts in Romania, or for EU consumers, the courts of your place of residence.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Termination</h3>
                <p className="text-sm">We may terminate access for violations of these terms or abuse of the service.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Severability</h3>
                <p className="text-sm">If any provision of these terms is found invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Entire Agreement</h3>
                <p className="text-sm">These terms, together with our Privacy Policy, constitute the entire agreement between you and Cirjan Darius regarding Pdfino.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Changes</h3>
                <p className="text-sm">We may update these terms. Continued use after changes means acceptance.</p>
              </div>

              <div>
                <h3 className="font-medium text-[var(--foreground)] mb-1">Privacy</h3>
                <p className="text-sm">
                  Your use is also governed by our{" "}
                  <Link href="/privacy" className="text-[var(--brand)] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="p-8 rounded-2xl bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand-light)]/10 border border-[var(--brand)]/20 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--brand)]/20 mb-4">
              <Mail className="w-7 h-7 text-[var(--brand)]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Questions?</h2>
            <p className="text-[var(--foreground-muted)] mb-4">
              Contact us if you have any questions about these terms.
            </p>
            <a
              href="mailto:pdfinoapp@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand)] text-white font-medium hover:bg-[var(--brand-dark)] transition-colors"
            >
              pdfinoapp@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
