import type { Metadata, Viewport } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata("en");

export const viewport: Viewport = { themeColor: "#14070d", colorScheme: "dark" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
