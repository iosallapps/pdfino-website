import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/content";

/** Native disclosure elements: accessible and keyboard-operable with no client script. */
export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <SectionHeading eyebrow="Questions" title="Good to **know.**" align="center" />
        <div className="faq-list">
          {FAQS.map((faq) => (
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
