import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

const PATHS = { en: "/privacy.html", ro: "/ro/privacy.html" };

export const metadata: Metadata = pageMetadata(
  "en",
  PATHS,
  "Privacy Policy - Pdfino",
  "Read the Pdfino Privacy Policy for iPhone and iPad: how your data is handled. Your documents are processed on your device and never uploaded.",
);

export default function Page() {
  return <LegalPage kind="privacy" lang="en" breadcrumb={{ name: "Privacy Policy", path: PATHS.en }} />;
}
