import type { ScreenName } from "@/lib/content";

/** Framed device art is 1470x3000; the exports keep that ratio at 360 and 720 wide. */
const EXPORT = { small: 360, large: 720, height: 1469 };

type Props = {
  name: ScreenName;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** A real capture of the app in the real iPhone frame, resting on the page. */
export default function PhoneShot({ name, alt, priority = false, sizes = "(min-width: 1024px) 320px, 70vw", className = "" }: Props) {
  return (
    // Static export: next/image cannot optimise, and these are already sized WebP exports.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/screens/${name}-${EXPORT.large}.webp`}
      srcSet={`/screens/${name}-${EXPORT.small}.webp ${EXPORT.small}w, /screens/${name}-${EXPORT.large}.webp ${EXPORT.large}w`}
      sizes={sizes}
      width={EXPORT.large}
      height={EXPORT.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`phone-shadow h-auto w-full ${className}`}
    />
  );
}
