import SectionHeading from "@/components/ui/SectionHeading";
import { TOOL_COUNT, TOOL_SECTIONS } from "@/lib/constants";

export default function Tools() {
  return (
    <section id="tools" className="tools">
      <div className="container">
        <SectionHeading
          eyebrow="All tools"
          title={`${TOOL_COUNT} PDF tools, **one app.**`}
          lead="Grouped the way you find them in the app. Search covers every tool, and History remembers every job."
          align="center"
        />
        <div className="tools-grid">
          {TOOL_SECTIONS.map((section) => (
            <div key={section.title} className="glass-card tool-card">
              <h3>{section.title}</h3>
              <ul className="chips">
                {section.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
