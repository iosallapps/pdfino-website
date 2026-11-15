import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pdfino handles your data. Your documents are processed on your device and never uploaded.",
  alternates: {
    canonical: "/privacy.html",
    languages: { en: "/privacy.html", ro: "/ro/privacy.html", "x-default": "/privacy.html" },
  },
};

export default function Page() {
  return <LegalPage kind="privacy" lang="en" />;
}
