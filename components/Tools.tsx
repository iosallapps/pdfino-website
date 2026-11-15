import SectionHeading from "@/components/ui/SectionHeading";
import { COPY, type Lang } from "@/lib/content";
import { TOOL_COUNT, TOOL_SECTIONS } from "@/lib/constants";

export default function Tools({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <section id="tools" className="tools">
      <div className="container">
        <SectionHeading
          eyebrow={c.tools.eyebrow}
          title={c.tools.title(TOOL_COUNT)}
          lead={c.tools.lead}
          align="center"
        />
        <div className="tools-grid">
          {TOOL_SECTIONS.map((section) => (
            <div key={section.title} className="glass-card tool-card">
              <h3>{c.toolSections[section.title]?.title ?? section.title}</h3>
              <ul className="chips">
                {section.tools.map((tool) => (
                  <li key={tool}>{c.toolSections[section.title]?.tools[tool] ?? tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
