import { SITE } from "@/lib/content";

const BADGE_URL = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
const HEIGHTS = { sm: "h-10", lg: "h-14" };

export default function AppStoreBadge({ size = "lg" }: { size?: keyof typeof HEIGHTS }) {
  return (
    <a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer" className="neu-press inline-block rounded-[12px]">
      {/* Apple's official badge, served by Apple. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BADGE_URL} alt="Download on the App Store" className={`${HEIGHTS[size]} w-auto`} />
    </a>
  );
}
