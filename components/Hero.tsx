import { Shield, Zap, Wifi } from "lucide-react";
import { APP_STORE_URL } from "@/lib/constants";

const trustBadges = [
  { icon: Shield, text: "100% Private" },
  { icon: Wifi, text: "Works Offline" },
  { icon: Zap, text: "Lightning Fast" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/10 via-transparent to-[var(--brand-light)]/10 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Background orbs - static */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand)]/10 border border-[var(--brand)]/20 mb-8">
            <span className="inline-flex rounded-full h-2 w-2 bg-[var(--brand)]"></span>
            <span className="text-sm font-medium text-[var(--brand)]">Now available on the App Store</span>
          </div>

          {/* Headline */}
          <h1 className="animate-in delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] via-[var(--brand-light)] to-[var(--accent)] bg-clip-text text-transparent">
              PDF Toolkit
            </span>
            <br className="hidden sm:block" />
            for iPhone
          </h1>

          {/* Subtitle */}
          <p className="animate-in delay-2 mt-6 text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Compress, edit, sign, merge, and convert PDFs.
            <br className="hidden sm:block" />
            <span className="text-[var(--foreground)]">100% offline. 100% private.</span>
          </p>

          {/* CTA Button */}
          <div className="animate-in delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="animate-in delay-4 mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                <badge.icon className="w-5 h-5 text-[var(--brand)]" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="animate-in delay-5 mt-20 relative">
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-b from-[var(--brand)] to-[var(--accent)] rounded-full blur-3xl opacity-25" />

            {/* Phone frame */}
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
              {/* Phone outer frame */}
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />

                {/* Screen */}
                <div className="relative bg-gradient-to-br from-[var(--brand)] via-[var(--brand-light)] to-[var(--accent)] rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                  {/* Screen content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    {/* App icon */}
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold">P</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Pdfino</h3>
                    <p className="text-sm text-white/80 text-center">Your complete PDF toolkit</p>

                    {/* Feature pills */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {["Compress", "Edit", "Sign", "Merge"].map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-8 bg-[var(--brand)]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
