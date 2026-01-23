"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Pdfino really free?",
    answer: "Yes! Pdfino is free to download and use. Free users get 10 compressions per day and access to all tools. Premium unlocks unlimited usage and removes ads.",
  },
  {
    question: "Are my files uploaded to any server?",
    answer: "No. All processing happens 100% locally on your device. Your files never leave your iPhone or iPad. We can't see your documents, and neither can anyone else.",
  },
  {
    question: "Does it work offline?",
    answer: "Absolutely! Since all processing is done on your device, Pdfino works perfectly without an internet connection. Compress, edit, and convert PDFs anywhere.",
  },
  {
    question: "What's the difference between free and premium?",
    answer: "Free users get 10 compressions per day with all features available. Premium offers unlimited compressions, removes all ads, and includes priority support.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime through your iPhone Settings > Apple ID > Subscriptions. You'll keep premium access until the end of your billing period.",
  },
  {
    question: "Which file formats are supported?",
    answer: "Pdfino supports PDF, JPEG, PNG, HEIC, Word documents, and more. You can convert between formats and compress various file types.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-[var(--background-secondary)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            Everything you need to know about Pdfino
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--brand)]/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold pr-8">{faq.question}</h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[var(--foreground-muted)]" />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-200 ${
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-[var(--foreground-muted)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
