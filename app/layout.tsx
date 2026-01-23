import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pdfino - The PDF Toolkit for iPhone",
  description: "Compress, edit, sign, merge, and convert PDFs. 100% offline. 100% private. The ultimate PDF toolkit for iPhone.",
  keywords: ["PDF", "compress", "edit", "sign", "merge", "convert", "iPhone", "iOS", "app"],
  authors: [{ name: "Pdfino" }],
  openGraph: {
    title: "Pdfino - The PDF Toolkit for iPhone",
    description: "Compress, edit, sign, merge, and convert PDFs. 100% offline. 100% private.",
    url: "https://pdfino.com",
    siteName: "Pdfino",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pdfino - The PDF Toolkit for iPhone",
    description: "Compress, edit, sign, merge, and convert PDFs. 100% offline. 100% private.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
