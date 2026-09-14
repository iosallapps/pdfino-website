import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Highlighted from "@/components/ui/Highlighted";
import PhoneShot from "@/components/ui/PhoneShot";
import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="page-glow" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-16 lg:pt-20">
        <div>
          <p className="neu-chip eyebrow inline-flex px-4 py-2">{HERO.eyebrow}</p>
          <h1 className="mt-7 text-[clamp(2.6rem,6vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.025em] text-ink">
            <Highlighted text={HERO.title} />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{HERO.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AppStoreBadge size="lg" />
            <a href="#tools" className="neu-chip neu-press px-5 py-3.5 text-sm font-semibold text-ink">
              See all 39 tools
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3" aria-label="At a glance">
            {HERO.facts.map((fact) => (
              <li key={fact} className="neu-inset inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex w-full max-w-[560px] items-end justify-center">
          <div className="hidden w-[38%] translate-x-[16%] translate-y-10 sm:block">
            <PhoneShot name="scan" alt="The Scan tab in Pdfino" sizes="(min-width: 1024px) 210px, 30vw" />
          </div>
          <div className="relative z-10 w-[68%] max-w-[300px] sm:w-[48%]">
            <PhoneShot name="home" alt="Pdfino's Tools home with recent files and the most popular tools" priority sizes="(min-width: 1024px) 270px, 60vw" />
          </div>
          <div className="hidden w-[38%] -translate-x-[16%] translate-y-10 sm:block">
            <PhoneShot name="compress" alt="A finished compression in Pdfino" sizes="(min-width: 1024px) 210px, 30vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
