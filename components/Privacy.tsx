import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRIVACY } from "@/lib/content";

export default function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="neu-card relative overflow-hidden px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div aria-hidden className="page-glow" />
          <div className="relative">
            <SectionHeading eyebrow={PRIVACY.eyebrow} title={PRIVACY.title} lead={PRIVACY.lead} />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {PRIVACY.points.map((point) => (
                <div key={point.title} className="neu-inset p-6">
                  <h3 className="text-base font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{point.body}</p>
                </div>
              ))}
            </div>
            <Link href="/privacy" className="mt-10 inline-flex text-sm font-semibold text-accent-text hover:underline">
              Read the privacy policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
