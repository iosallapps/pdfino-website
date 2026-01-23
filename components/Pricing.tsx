import { Check, Sparkles } from "lucide-react";
import { APP_STORE_URL, PRICING } from "@/lib/constants";

const delays = ["delay-1", "delay-2", "delay-3"];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-in text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Free to try. Premium when you need it.
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-xl mx-auto">
            Start for free, upgrade anytime. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PRICING.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-in ${delays[index]} relative p-8 rounded-3xl border-2 card-hover ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[var(--brand)] to-[var(--accent-dark)] text-white border-[var(--brand)] shadow-2xl shadow-[var(--brand)]/20 scale-105 z-10"
                  : "bg-[var(--background)] border-[var(--border)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-white text-[var(--brand)] rounded-full shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative text-center mb-8">
                <h3 className={`text-lg font-semibold mb-3 ${plan.highlighted ? "text-white/90" : "text-[var(--foreground-muted)]"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span
                      className={
                        plan.highlighted
                          ? "text-white/70"
                          : "text-[var(--foreground-muted)]"
                      }
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="relative space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted
                        ? "bg-white/20"
                        : "bg-[var(--brand)]/10"
                    }`}>
                      <Check
                        className={`w-3.5 h-3.5 ${
                          plan.highlighted
                            ? "text-white"
                            : "text-[var(--brand)]"
                        }`}
                      />
                    </div>
                    <span
                      className={
                        plan.highlighted
                          ? "text-white/90"
                          : "text-[var(--foreground-muted)]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block w-full py-4 px-6 rounded-xl text-center font-semibold transition-all hover:scale-105 ${
                  plan.highlighted
                    ? "bg-white text-[var(--brand)] hover:bg-white/90 shadow-lg"
                    : "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] shadow-lg shadow-[var(--brand)]/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="animate-in delay-4 text-center text-sm text-[var(--foreground-muted)] mt-8">
          All purchases are processed securely through the App Store
        </p>
      </div>
    </section>
  );
}
