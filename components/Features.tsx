import { FileDown, PenTool, RefreshCw, Layers, Shield, Lock } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileDown,
  PenTool,
  RefreshCw,
  Layers,
  Shield,
  Lock,
};

const delays = ["delay-1", "delay-2", "delay-3", "delay-4", "delay-5", "delay-6"];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-[var(--background-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-light)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-in text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Everything you need for PDFs
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Powerful tools that work entirely on your device, keeping your documents private and secure
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={`animate-in ${delays[index] || "delay-1"} group relative p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] card-hover`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand-light)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold mb-2 group-hover:text-[var(--brand)] transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-[var(--foreground-muted)] leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--brand)]/10 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
