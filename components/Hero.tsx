import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Highlighted from "@/components/ui/Highlighted";
import PhoneShot from "@/components/ui/PhoneShot";
import { HERO } from "@/lib/content";
import { TOOL_COUNT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <p className="hero-pill">{HERO.eyebrow}</p>
          <h1>
            <Highlighted text={HERO.title} />
          </h1>
          <p className="tagline">{HERO.lead}</p>
          <div className="cta-buttons">
            <AppStoreBadge size="lg" />
            <a href="#tools" className="btn-outline">
              See all {TOOL_COUNT} tools
            </a>
          </div>
          <ul className="fact-list" aria-label="At a glance">
            {HERO.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="hero-phones">
          <div className="side left">
            <PhoneShot name="scan" alt="The Scan tab in Pdfino" sizes="(min-width: 1024px) 210px, 30vw" />
          </div>
          <div className="main">
            <PhoneShot name="home" alt="Pdfino's Tools home with recent files and the most popular tools" priority sizes="(min-width: 1024px) 270px, 60vw" />
          </div>
          <div className="side right">
            <PhoneShot name="compress" alt="A finished compression in Pdfino" sizes="(min-width: 1024px) 210px, 30vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
