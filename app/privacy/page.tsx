import type { Metadata } from "next";
import { Shield, Eye, Server, Lock, Bell, Trash2, Mail, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Pdfino",
  description: "Learn how Pdfino protects your privacy. All file processing happens locally on your device.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-light)] mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[var(--foreground-muted)]">Last Updated: January 24, 2026</p>
        </div>

        {/* Key Promise */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Privacy First</h2>
              <p className="text-green-800/80 dark:text-green-200/80">
                All file processing happens 100% locally on your device. Your files are never uploaded to our servers. We cannot see your documents.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3 text-[var(--foreground)]">What You Provide</h3>
                <ul className="space-y-2 text-[var(--foreground-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 flex-shrink-0"></span>
                    <span><strong className="text-[var(--foreground)]">Email</strong> - Only if you contact support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 flex-shrink-0"></span>
                    <span><strong className="text-[var(--foreground)]">Payment</strong> - Processed by Apple (we never see your card)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-3 text-[var(--foreground)]">Automatic Collection</h3>
                <ul className="space-y-2 text-[var(--foreground-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 flex-shrink-0"></span>
                    <span><strong className="text-[var(--foreground)]">Device Info</strong> - Model, iOS version</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 flex-shrink-0"></span>
                    <span><strong className="text-[var(--foreground)]">Usage Stats</strong> - Features used, crash reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] mt-2 flex-shrink-0"></span>
                    <span><strong className="text-[var(--foreground)]">Ads (Free Users)</strong> - Ad interaction data via AdMob</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <h3 className="font-medium mb-2 text-green-700 dark:text-green-300">What We NEVER Collect</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-green-800/80 dark:text-green-200/80">
                  <span>Your files</span>
                  <span>File contents</span>
                  <span>File names</span>
                  <span>Location data</span>
                  <span>Contacts</span>
                  <span>Photos</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">How We Use Data</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "App Functionality", desc: "Keep the app working properly" },
                { title: "Improvements", desc: "Fix bugs and add features" },
                { title: "Support", desc: "Help you when you contact us" },
                { title: "Subscriptions", desc: "Manage premium access via Apple" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--foreground-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Third-Party Services</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 px-4 font-medium">Service</th>
                    <th className="text-left py-3 px-4 font-medium">Purpose</th>
                    <th className="text-left py-3 px-4 font-medium">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--foreground-muted)]">
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-3 px-4">Apple App Store</td>
                    <td className="py-3 px-4">Payments & Subscriptions</td>
                    <td className="py-3 px-4"><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">View</a></td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-3 px-4">RevenueCat</td>
                    <td className="py-3 px-4">Subscription Management</td>
                    <td className="py-3 px-4"><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">View</a></td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-3 px-4">Firebase</td>
                    <td className="py-3 px-4">Analytics & Crash Reports</td>
                    <td className="py-3 px-4"><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">View</a></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Google AdMob</td>
                    <td className="py-3 px-4">Ads (Free Users Only)</td>
                    <td className="py-3 px-4"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">View</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-300">App Tracking Transparency</h3>
              <p className="text-sm text-blue-800/80 dark:text-blue-200/80">
                On iOS 14.5+, you will be asked for permission before any tracking for personalized ads. You can change this anytime in Settings &gt; Privacy &gt; Tracking.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Bell className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Your Rights</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Access your data",
                "Correct inaccurate info",
                "Delete your data",
                "Export your data",
                "Opt-out of analytics",
                "Control ad personalization",
              ].map((right) => (
                <div key={right} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                  <svg className="w-5 h-5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Data Retention</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="text-[var(--foreground-muted)]">Account Data</span>
                <p className="font-medium">While active</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="text-[var(--foreground-muted)]">Usage Data</span>
                <p className="font-medium">Up to 2 years</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="text-[var(--foreground-muted)]">Support Messages</span>
                <p className="font-medium">1 year</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="text-[var(--foreground-muted)]">Crash Reports</span>
                <p className="font-medium">90 days</p>
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
              Contact us for any privacy-related questions or data requests.
            </p>
            <a
              href="mailto:pdfinoapp@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand)] text-white font-medium hover:bg-[var(--brand-dark)] transition-colors"
            >
              pdfinoapp@gmail.com
            </a>
            <p className="text-sm text-[var(--foreground-muted)] mt-4">
              We respond within 30 days.
            </p>
          </section>

          {/* Legal Basis (GDPR) */}
          <section className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <h2 className="text-xl font-semibold">Legal Basis for Processing (GDPR)</h2>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="font-medium text-[var(--foreground)]">Contract Performance</span>
                <p className="text-[var(--foreground-muted)]">Processing needed to provide the app and subscription services you requested.</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="font-medium text-[var(--foreground)]">Legitimate Interest</span>
                <p className="text-[var(--foreground-muted)]">Analytics and crash reports to improve app quality and fix issues.</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="font-medium text-[var(--foreground)]">Consent</span>
                <p className="text-[var(--foreground-muted)]">Personalized ads (you can opt-out via App Tracking Transparency).</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--background)]">
                <span className="font-medium text-[var(--foreground)]">Legal Obligation</span>
                <p className="text-[var(--foreground-muted)]">When required by law (e.g., tax records for purchases).</p>
              </div>
            </div>
          </section>

          {/* Legal Notes */}
          <div className="text-sm text-[var(--foreground-muted)] space-y-4">
            <p>
              <strong className="text-[var(--foreground)]">Children:</strong> Pdfino is not intended for children under 13. We do not knowingly collect data from children.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Changes:</strong> We may update this policy and will notify you of significant changes through the app or email.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">GDPR/CCPA:</strong> Users in the EU and California have additional rights under GDPR and CCPA respectively. EU users may lodge a complaint with their local data protection authority.
            </p>
          </div>

          {/* Developer Info */}
          <div className="mt-8 pt-8 border-t border-[var(--border)] text-xs text-[var(--foreground-muted)]">
            <p>Pdfino - PDF Toolkit for iPhone and iPad</p>
            <p>Developer: Cirjan Darius | Contact: pdfinoapp@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
