import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Highlighted from "@/components/ui/Highlighted";
import PhoneShot from "@/components/ui/PhoneShot";
import { COPY, type Lang } from "@/lib/content";
import { TOOL_COUNT } from "@/lib/constants";

export default function Hero({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const HERO = c.hero;
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
            <AppStoreBadge size="lg" lang={lang} />
            <a href="#tools" className="btn-outline">
              {c.ui.seeTools(TOOL_COUNT)}
            </a>
          </div>
          <ul className="fact-list" aria-label={c.ui.glance}>
            {HERO.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="hero-phones">
          <div className="side left">
            <PhoneShot name="scan" alt={HERO.altScan} sizes="(min-width: 1024px) 210px, 30vw" />
          </div>
          <div className="main">
            <PhoneShot name="home" alt={HERO.altHome} priority sizes="(min-width: 1024px) 270px, 60vw" />
          </div>
          <div className="side right">
            <PhoneShot name="compress" alt={HERO.altCompress} sizes="(min-width: 1024px) 210px, 30vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
