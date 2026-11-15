import Highlighted from "@/components/ui/Highlighted";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
};

export default function SectionHeading({ eyebrow, title, lead, align = "start" }: Props) {
  return (
    <div className={`section-head${align === "center" ? " center" : ""}`}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title">
        <Highlighted text={title} />
      </h2>
      {lead && <p className="section-intro">{lead}</p>}
    </div>
  );
}
