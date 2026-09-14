import PhoneShot from "@/components/ui/PhoneShot";
import SectionHeading from "@/components/ui/SectionHeading";
import { SHOWCASES } from "@/lib/content";

export default function Showcases() {
  return (
    <section id="features" className="scroll-mt-20 pb-16 pt-12 lg:pb-24 lg:pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-5 sm:px-8 lg:gap-32">
        {SHOWCASES.map((item, index) => (
          <article
            key={item.id}
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div>
              <SectionHeading eyebrow={item.eyebrow} title={item.title} lead={item.body} />
              <ul className="mt-8 grid gap-3">
                {item.points.map((point) => (
                  <li key={point} className="neu-card flex items-center gap-4 px-5 py-4 text-base font-medium text-ink">
                    <span aria-hidden className="neu-inset flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto w-[64%] max-w-[300px]">
              <PhoneShot name={item.screen} alt={item.alt} sizes="(min-width: 1024px) 300px, 64vw" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
