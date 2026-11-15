/**
 * The app's tools, named and grouped as in the Tools tab (ConvertFeature.swift and
 * ConvertViewModel.toolSections). The app's "Most Popular" row repeats tools from other
 * sections, so the three it holds alone lead here instead. Names are English keys; the
 * Romanian names live in COPY.ro.toolSections.
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

/**
 * Browser bar color: the aurora's top color while the page is at the top, the page
 * background once it scrolls (same switch as vistoapps.com). THEME_TOP is the static
 * theme-color in every layout; components/Overscroll.tsx swaps it on scroll.
 */
export const THEME_TOP = "#4a1726";
export const THEME_SCROLLED = "#14070d";
