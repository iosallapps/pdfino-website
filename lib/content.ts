// Site copy. Every product claim here comes from the App Store listing that was checked
// against the app's code (ASO/Pdfino/1-upload/metadata/listings/en.md). No prices: the
// App Store shows them per region. No dashes between clauses.

export const SITE = {
  url: "https://pdfino.com",
  title: "Pdfino: the iPhone and iPad app to compress, sign, scan and merge PDFs",
  description:
    "Pdfino, the iPhone and iPad app to compress, sign, scan and merge PDFs. It also splits, fills, protects and converts them, on your device, with no account to create.",
  appStoreId: "6748689545",
  appStoreUrl: "https://apps.apple.com/app/id6748689545",
  logoUrl: "https://pdfino.com/icon-512.png",
  officialNote: "Pdfino is an iOS and iPadOS app available on the App Store. pdfino.com is its only official website.",
  supportEmail: "pdfinoapp@gmail.com",
};

export const HERO = {
  eyebrow: "PDF tools for iPhone and iPad",
  title: "Shrink, scan and sign PDFs. **Right on your device.**",
  lead:
    "Pdfino shrinks a PDF that is too big to email, then does the other 38 jobs too: scan, merge, split, sign, fill, protect, redact and convert. No file is uploaded, and there is no account to create.",
  facts: ["39 PDF tools", "Nothing uploaded", "No account", "iPhone and iPad"],
};

export type ScreenName = "home" | "scan" | "compress" | "merge" | "split" | "annotate" | "protect";

export type Showcase = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  screen: ScreenName;
  alt: string;
};

export const SHOWCASES: Showcase[] = [
  {
    id: "compress",
    eyebrow: "Compress",
    title: "Shrink a PDF that is **too big to email.**",
    body: "Import your PDFs and reduce the file size, a whole batch at a time. The result shows the real size before and after.",
    points: ["Five quality levels", "Batch compression", "Ask Siri to compress a PDF"],
    screen: "compress",
    alt: "Pdfino compression result: a 1.3 MB PDF reduced to 822 KB",
  },
  {
    id: "scan",
    eyebrow: "Scan and convert",
    title: "Paper to PDF **in seconds.**",
    body: "Scan with the camera, with edge detection, multi page capture and four filters. Turn images into a PDF, export pages back out as PNG or JPEG, and convert Word documents, Markdown, HTML and live web pages.",
    points: ["Edge detection and filters", "Images to PDF and back", "Word, Markdown, HTML and web pages"],
    screen: "scan",
    alt: "The Scan tab in Pdfino, with Scan Document, Import from Files and Import from Photos",
  },
  {
    id: "organize",
    eyebrow: "Merge, split and rearrange",
    title: "Only the pages **you need.**",
    body: "Combine several PDFs into one, pull out only the pages you need, then reorder, rotate, crop, resize, replace or delete pages. Add page numbers, headers, footers and bookmarks.",
    points: ["Merge and split", "Reorder, rotate and crop", "Page numbers, headers and bookmarks"],
    screen: "split",
    alt: "Split PDF in Pdfino, showing a grid of real document pages",
  },
  {
    id: "protect",
    eyebrow: "Sign, fill and protect",
    title: "Sign it, fill it, **lock it.**",
    body: "Draw your signature and keep up to five saved. Fill in form fields, add a watermark, and password protect a PDF. Redaction rebuilds the page, so the text underneath leaves the file instead of hiding behind a box.",
    points: ["Signatures and form filling", "Passwords and permissions", "Redaction that removes the text"],
    screen: "protect",
    alt: "Protect PDF in Pdfino with a password set and a strong password meter",
  },
];

export const PRIVACY = {
  eyebrow: "Private by default",
  title: "Your documents **stay on your device.**",
  lead: "Pdfino does its work on your iPhone or iPad. There is no Pdfino server, and nothing to sign in to.",
  points: [
    {
      title: "Processed locally",
      body: "Scanning, OCR, compression and redaction all happen on your device.",
    },
    {
      title: "No account",
      body: "Open the app and start. There is nothing to create and nothing to log in to.",
    },
    {
      title: "Clear about the network",
      body: "Two tools fetch a web address you type in yourself. The app shows ads and uses analytics only if you allow it.",
    },
  ],
};

export const FAQS = [
  {
    question: "Is Pdfino free?",
    answer:
      "Yes. Every tool is free once a day, and Annotate, Fill Forms, Redact, Translate and Compare have no daily limit. Compression works from its own allowance of ten, and a short video adds three more or unlocks everything for 24 hours. A subscription removes the limits and the ads; the App Store shows its price for your region.",
  },
  {
    question: "Are my files uploaded anywhere?",
    answer:
      "No. Your documents are processed on your device and there is no Pdfino server to send them to. Two tools fetch a web address you type in yourself, and that is the only time a document you are working on involves the network.",
  },
  {
    question: "Is this the official Pdfino website?",
    answer: "Yes. Pdfino is an iOS and iPadOS app available on the App Store. pdfino.com is its only official website.",
  },
  {
    question: "Does Pdfino work on iPad?",
    answer: "Yes. Pdfino runs on iPhone and iPad.",
  },
  {
    question: "Which files can it work with?",
    answer:
      "PDF files, plus images in JPEG, PNG and HEIC. Word documents, Markdown, HTML and live web pages convert into PDFs, and any PDF can be exported as PNG or JPEG.",
  },
  {
    question: "How do I cancel a subscription?",
    answer: "Open Settings on your iPhone or iPad, tap your name, then Subscriptions.",
  },
  {
    question: "How do I get help?",
    answer: `Write to ${SITE.supportEmail} and we will get back to you.`,
  },
];

export const CTA = {
  title: "Put 39 PDF tools **in your pocket.**",
  lead: "Free to download. No account to create.",
};
