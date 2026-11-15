import { SITE } from "@/lib/content";

const BADGE_SRC = "/brand/app-store-badge.svg";
const WIDTH = 120;
const HEIGHT = 40;

export default function AppStoreBadge({ size = "lg" }: { size?: "sm" | "lg" }) {
  return (
    <a
      href={SITE.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`badge-link ${size === "lg" ? "badge-lg" : "badge-sm"}`}
    >
      {/* Apple's official badge, kept on this site so no page loads anything from Apple. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BADGE_SRC} width={WIDTH} height={HEIGHT} alt="Download on the App Store" />
    </a>
  );
}
