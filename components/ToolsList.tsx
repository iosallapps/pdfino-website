import { TOOLS } from "@/lib/constants";

export default function ToolsList() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-sm font-medium mb-4">
              All Tools
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[var(--brand)]">20+</span> PDF Tools
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-12 max-w-xl mx-auto">
              Everything you need in one app. No subscriptions to multiple services.
            </p>
          </div>

          {/* Tools List */}
          <div className="animate-in delay-2 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm font-medium hover:border-[var(--brand)] hover:text-[var(--brand)] hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="animate-in delay-3 mt-8 text-sm text-[var(--foreground-muted)]">
            And more tools added with every update
          </p>
        </div>
      </div>
    </section>
  );
}
