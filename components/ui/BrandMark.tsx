import Link from "next/link";

const SIZES = { sm: 36, lg: 48 };

/** The red app icon with the name, as the app's screen headers show it. */
export default function BrandMark({ size = "sm" }: { size?: keyof typeof SIZES }) {
  const side = SIZES[size];
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Pdfino home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/pdfino-icon-96.webp"
        width={side}
        height={side}
        alt=""
        className="rounded-[22.37%] shadow-[0_6px_14px_rgb(214_48_42/0.25)]"
      />
      <span className={`font-bold tracking-[-0.01em] text-ink ${size === "lg" ? "text-2xl" : "text-xl"}`}>Pdfino</span>
    </Link>
  );
}
