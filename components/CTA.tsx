import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Highlighted from "@/components/ui/Highlighted";
import { CTA as COPY } from "@/lib/content";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="neu-card relative overflow-hidden px-6 py-14 text-center sm:px-12">
          <div aria-hidden className="page-glow" />
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/pdfino-icon-192.webp"
              width={96}
              height={96}
              alt=""
              loading="lazy"
              className="mx-auto rounded-[22.37%] shadow-[0_12px_28px_rgb(176_12_20/0.3)]"
            />
            <h2 className="mx-auto mt-8 max-w-xl text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">
              <Highlighted text={COPY.title} />
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{COPY.lead}</p>
            <div className="mt-8 flex justify-center">
              <AppStoreBadge size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
