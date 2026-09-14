import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/content";

/** Native disclosure elements: accessible and keyboard-operable with no client script. */
export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Good to **know.**" align="center" />
        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq) => (
            <details key={faq.question} className="neu-card group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-ink">
                {faq.question}
                <span
                  aria-hidden
                  className="neu-chip flex h-8 w-8 shrink-0 items-center justify-center text-accent-text transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-ink-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
