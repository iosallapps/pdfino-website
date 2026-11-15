import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { COPY } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("ro", { en: "/", ro: "/ro/" }, COPY.ro.seo.title, COPY.ro.seo.description);

export default function Home() {
  return <HomePage lang="ro" />;
}
