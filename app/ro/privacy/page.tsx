import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum folosește Pdfino datele tale. Documentele tale se procesează pe dispozitiv și nu se încarcă niciodată.",
  alternates: {
    canonical: "/ro/privacy.html",
    languages: { en: "/privacy.html", ro: "/ro/privacy.html", "x-default": "/privacy.html" },
  },
};

export default function Page() {
  return <LegalPage kind="privacy" lang="ro" />;
}
