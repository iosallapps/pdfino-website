import PhoneShot from "@/components/ui/PhoneShot";
import SectionHeading from "@/components/ui/SectionHeading";
import { COPY, type Lang } from "@/lib/content";

export default function Showcases({ lang }: { lang: Lang }) {
  return (
    <section id="features" className="showcases">
      <div className="container">
        {COPY[lang].showcases.map((item, index) => (
          <article key={item.id} className={`showcase${index % 2 === 1 ? " flip" : ""}`}>
            <div>
              <SectionHeading eyebrow={item.eyebrow} title={item.title} lead={item.body} />
              <ul className="point-list">
                {item.points.map((point) => (
                  <li key={point} className="glass-card">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="showcase-phone">
              <PhoneShot name={item.screen} alt={item.alt} sizes="(min-width: 1024px) 300px, 64vw" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
