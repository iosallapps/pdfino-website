import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Highlighted from "@/components/ui/Highlighted";
import { CTA as COPY } from "@/lib/content";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/pdfino-icon-256.webp" width={88} height={88} alt="" loading="lazy" className="cta-icon" />
        <h2>
          <Highlighted text={COPY.title} />
        </h2>
        <p>{COPY.lead}</p>
        <div className="cta-buttons">
          <AppStoreBadge size="lg" />
        </div>
      </div>
    </section>
  );
}
