import Link from "next/link";

/** The app icon with the name. */
export default function BrandMark() {
  return (
    <Link href="/" className="logo" aria-label="Pdfino home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/pdfino-icon-256.webp" width={38} height={38} alt="" />
      Pdfino
    </Link>
  );
}
