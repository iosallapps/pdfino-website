import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

const PATHS = { en: "/privacy.html", ro: "/ro/privacy.html" };

export const metadata: Metadata = pageMetadata(
  "ro",
  PATHS,
  "Politica de confidențialitate - Pdfino",
  "Citește politica de confidențialitate Pdfino pentru iPhone și iPad: cum sunt folosite datele tale. Documentele tale se procesează pe dispozitiv și nu se încarcă niciodată.",
);

export default function Page() {
  return <LegalPage kind="privacy" lang="ro" breadcrumb={{ name: "Politica de confidențialitate", path: PATHS.ro }} />;
}
