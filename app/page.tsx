import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Showcases from "@/components/Showcases";
import Tools from "@/components/Tools";
import Privacy from "@/components/Privacy";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { STRUCTURED_DATA } from "@/lib/structuredData";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Showcases />
      <Tools />
      <Privacy />
      <FAQ />
      <CTA />
    </>
  );
}
