import Link from "next/link";
import { COPY, type Lang } from "@/lib/content";

/** The app icon with the name. */
export default function BrandMark({ lang = "en" }: { lang?: Lang }) {
  const c = COPY[lang];
  return (
    <Link href={c.homePath} className="logo" aria-label={c.ui.homeLabel}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/pdfino-icon-256.webp" width={38} height={38} alt="" />
      Pdfino
    </Link>
  );
}
