import Highlighted from "@/components/ui/Highlighted";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  as?: "h1" | "h2";
};

export default function SectionHeading({ eyebrow, title, lead, align = "start", as: Heading = "h2" }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="mt-3 text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">
        <Highlighted text={title} />
      </Heading>
      {lead && <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lead}</p>}
    </div>
  );
}
