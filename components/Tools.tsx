import SectionHeading from "@/components/ui/SectionHeading";
import { TOOL_COUNT, TOOL_SECTIONS } from "@/lib/constants";

export default function Tools() {
  return (
    <section id="tools" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="All tools"
          title={`${TOOL_COUNT} PDF tools, **one app.**`}
          lead="Grouped the way you find them in the app. Search covers every tool, and History remembers every job."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOOL_SECTIONS.map((section) => (
            <div key={section.title} className="neu-card p-6">
              <h3 className="text-lg font-semibold text-ink">{section.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {section.tools.map((tool) => (
                  <li key={tool} className="neu-inset px-3.5 py-1.5 text-sm text-ink">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
