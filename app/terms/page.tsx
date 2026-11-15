import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using Pdfino, the PDF app for iPhone and iPad.",
  alternates: {
    canonical: "/terms.html",
    languages: { en: "/terms.html", ro: "/ro/terms.html", "x-default": "/terms.html" },
  },
};

export default function Page() {
  return <LegalPage kind="terms" lang="en" />;
}
