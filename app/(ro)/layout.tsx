import type { Metadata, Viewport } from "next";
import { THEME_TOP } from "@/lib/constants";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata("ro");

export const viewport: Viewport = { themeColor: THEME_TOP, colorScheme: "dark" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="ro">{children}</SiteShell>;
}
