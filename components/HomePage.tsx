import Hero from "@/components/Hero";
import Showcases from "@/components/Showcases";
import Tools from "@/components/Tools";
import Privacy from "@/components/Privacy";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { homeStructuredData } from "@/lib/structuredData";
import type { Lang } from "@/lib/content";

/** The home page in one language. The hero phone is the LCP image, so it is preloaded. */
export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/screens/home-720.webp"
        imageSrcSet="/screens/home-360.webp 360w, /screens/home-720.webp 720w"
        imageSizes="(min-width: 1024px) 270px, 60vw"
        fetchPriority="high"
      />
      <JsonLd data={homeStructuredData(lang)} />
      <Hero lang={lang} />
      <Showcases lang={lang} />
      <Tools lang={lang} />
      <Privacy lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
    </>
  );
}
