import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termeni de utilizare",
  description: "Termenii de utilizare a Pdfino, aplicația PDF pentru iPhone și iPad.",
  alternates: {
    canonical: "/ro/terms.html",
    languages: { en: "/terms.html", ro: "/ro/terms.html", "x-default": "/terms.html" },
  },
};

export default function Page() {
  return <LegalPage kind="terms" lang="ro" />;
}
