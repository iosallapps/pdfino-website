import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

const PATHS = { en: "/terms.html", ro: "/ro/terms.html" };

export const metadata: Metadata = pageMetadata(
  "ro",
  PATHS,
  "Termeni de utilizare - Pdfino",
  "Citește termenii de utilizare a Pdfino, aplicația PDF pentru iPhone și iPad: ce face aplicația, cum funcționează abonamentele și ce se așteaptă de la tine.",
);

export default function Page() {
  return <LegalPage kind="terms" lang="ro" breadcrumb={{ name: "Termeni de utilizare", path: PATHS.ro }} />;
}
