import SectionHeading from "@/components/ui/SectionHeading";
import { PRIVACY } from "@/lib/content";

export default function Privacy() {
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
          <a href="/privacy.html" className="text-link">
            Read the privacy policy
          </a>
        </div>
      </div>
    </section>
  );
}
