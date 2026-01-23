import { Download, FileText, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the App",
    description: "Get Pdfino free from the App Store. No account required.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Select Your PDF",
    description: "Pick any PDF from your device, iCloud, or other apps.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Edit & Share",
    description: "Compress, edit, sign, or convert. Then share anywhere.",
  },
];

const delays = ["delay-2", "delay-3", "delay-4"];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--brand)]/5 to-[var(--background)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-in text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Simple as 1, 2, 3
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            Get started in seconds, no learning curve required
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className={`animate-in ${delays[index]} relative`}>
                <div className="flex flex-col items-center text-center">
                  {/* Step number badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center shadow-lg shadow-[var(--brand)]/20">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--background)] border-2 border-[var(--brand)] flex items-center justify-center text-sm font-bold text-[var(--brand)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[var(--foreground-muted)] max-w-xs">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--brand)] to-[var(--brand-light)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
