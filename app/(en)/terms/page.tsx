import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

const PATHS = { en: "/terms.html", ro: "/ro/terms.html" };

export const metadata: Metadata = pageMetadata(
  "en",
  PATHS,
  "Terms of Use - Pdfino",
  "Read the terms for using Pdfino, the PDF app for iPhone and iPad: what the app does, how subscriptions work and what we expect from you.",
);

export default function Page() {
  return <LegalPage kind="terms" lang="en" breadcrumb={{ name: "Terms of Use", path: PATHS.en }} />;
}
