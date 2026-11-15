import SectionHeading from "@/components/ui/SectionHeading";
import { COPY, type Lang } from "@/lib/content";

/** Native disclosure elements: accessible and keyboard-operable with no client script. */
export default function FAQ({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <section id="faq" className="faq">
      <div className="container">
        <SectionHeading eyebrow={c.faqHead.eyebrow} title={c.faqHead.title} align="center" />
        <div className="faq-list">
          {c.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
