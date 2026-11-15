import SectionHeading from "@/components/ui/SectionHeading";
import { COPY, type Lang } from "@/lib/content";

export default function Privacy({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const PRIVACY = c.privacy;
  return (
    <section id="privacy" className="privacy-block">
      <div className="container">
        <div className="privacy-card">
          <SectionHeading eyebrow={PRIVACY.eyebrow} title={PRIVACY.title} lead={PRIVACY.lead} />
          <div className="privacy-points">
            {PRIVACY.points.map((point) => (
              <div key={point.title} className="privacy-point">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
          <a href={lang === "en" ? "/privacy.html" : "/ro/privacy.html"} className="text-link">
            {c.ui.readPrivacy}
          </a>
        </div>
      </div>
    </section>
  );
}
