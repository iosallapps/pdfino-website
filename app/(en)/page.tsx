import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { COPY } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("en", { en: "/", ro: "/ro/" }, COPY.en.seo.title, COPY.en.seo.description);

export default function Home() {
  return <HomePage lang="en" />;
}
