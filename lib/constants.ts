import { SITE } from "@/lib/content";

export const APP_STORE_URL = SITE.appStoreUrl;

/**
 * The app's tools, named and grouped as in the Tools tab (ConvertFeature.swift and
 * ConvertViewModel.toolSections). The app's "Most Popular" row repeats tools from other
 * sections, so the three it holds alone lead here instead.
 */
export const TOOL_SECTIONS = [
  { title: "Compress, merge and split", tools: ["Compress PDF", "Merge PDFs", "Split PDF"] },
  {
    title: "Convert",
    tools: ["Scan PDF", "Scan QR Code", "PDF to Images", "Images to PDF", "URL to PDF", "Word to PDF", "Markdown to PDF", "HTML to PDF"],
  },
  {
    title: "Page Tools",
    tools: [
      "Reorder Pages",
      "Rotate PDF",
      "Extract Text",
      "Crop PDF",
      "Page Numbers",
      "Extract Pages",
      "Delete Pages",
      "Duplicate Pages",
      "Blank Pages",
      "Replace Pages",
      "Resize Pages",
    ],
  },
  {
    title: "Edit & Annotate",
    tools: ["Annotate PDF", "Fill Forms", "Flatten PDF", "Watermark", "Redact PDF", "Headers & Footers", "Add Bookmarks", "Compare PDFs"],
  },
  { title: "Security", tools: ["Protect PDF", "Unlock PDF", "E-Sign PDF", "Remove Metadata", "Set Permissions"] },
  { title: "Text & Quality", tools: ["Translate PDF", "Optimize PDF", "Repair PDF", "OCR PDF"] },
];

export const TOOL_COUNT = TOOL_SECTIONS.reduce((count, section) => count + section.tools.length, 0);
