// Site copy. Every product claim here comes from the App Store listing that was checked
// against the app's code (ASO/Pdfino/1-upload/metadata/listings/en.md). No prices: the
// App Store shows them per region. No dashes between clauses.

export type Lang = "en" | "ro";

export const SITE = {
  url: "https://pdfino.com",
  title: "Pdfino: the iPhone and iPad app to compress, sign, scan and merge PDFs",
  description:
    "Pdfino, the iPhone and iPad app to compress, sign, scan and merge PDFs. It also splits, fills, protects and converts them, on your device, with no account to create.",
  appStoreId: "6748689545",
  appStoreUrl: "https://apps.apple.com/app/id6748689545",
  logoUrl: "https://pdfino.com/icon-512.png",
  officialNote: "Pdfino is an iOS and iPadOS app available on the App Store. pdfino.com is its only official website.",
  supportEmail: "iosallapps@gmail.com",
};

export type ScreenName = "home" | "scan" | "compress" | "split" | "protect";

export type Showcase = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  screen: ScreenName;
  alt: string;
};

export type Copy = {
  htmlLang: string;
  homePath: string;
  seo: { title: string; description: string; ogLocale: string; ogAlt: string; keywords: string[] };
  ui: {
    skip: string;
    nav: { features: string; tools: string; privacy: string; faq: string };
    getApp: string;
    menu: string;
    homeLabel: string;
    badgeAlt: string;
    seeTools: (count: number) => string;
    glance: string;
    readPrivacy: string;
    footerBlurb: string;
    legal: string;
    support: string;
    officialLead: string;
    more: string;
    switchLabel: string;
    switchName: string;
    notFound: { label: string; title: string; body: string; back: string };
  };
  hero: { eyebrow: string; title: string; lead: string; facts: string[]; altScan: string; altHome: string; altCompress: string };
  tools: { eyebrow: string; title: (count: number) => string; lead: string };
  showcases: Showcase[];
  privacy: { eyebrow: string; title: string; lead: string; points: { title: string; body: string }[] };
  faqHead: { eyebrow: string; title: string };
  faqs: { question: string; answer: string }[];
  cta: { title: string; lead: string };
  toolSections: Record<string, { title: string; tools: Record<string, string> }>;
};

// The Romanian copy follows the English copy sentence by sentence (no extra claims). Tool and
// section names are the app's own Romanian strings (Pdfino/Resources/Localizable.xcstrings).
export const COPY: Record<Lang, Copy> = {
  en: {
    htmlLang: "en",
    homePath: "/",
    seo: {
      title: "Pdfino: Compress PDF File Size, Sign and Scan PDFs",
      description:
        "Compress PDF file size, sign, scan, merge and split PDFs on your iPhone or iPad with Pdfino. 39 tools, nothing uploaded, no account. Free on iPhone.",
      ogLocale: "en_US",
      ogAlt: "The Pdfino app icon and Pdfino on iPhone",
      keywords: ["compress PDF", "reduce PDF file size", "sign PDF", "scan to PDF", "merge PDF", "split PDF", "PDF editor", "iPhone", "iPad"],
    },
    ui: {
      skip: "Skip to main content",
      nav: { features: "Features", tools: "Tools", privacy: "Privacy", faq: "FAQ" },
      getApp: "Get the app",
      menu: "Toggle menu",
      homeLabel: "Pdfino home",
      badgeAlt: "Download on the App Store",
      seeTools: (count) => `See all ${count} tools`,
      glance: "At a glance",
      readPrivacy: "Read the privacy policy",
      footerBlurb: "PDF tools for iPhone and iPad. Your documents stay on your device.",
      legal: "Legal",
      support: "Support",
      officialLead: "Official Pdfino.",
      more: "More apps by Visto Apps",
      switchLabel: "Română",
      switchName: "Romanian",
      notFound: {
        label: "Error 404",
        title: "Page **not found.**",
        body: "The page you are looking for does not exist. It may have moved.",
        back: "Back to Pdfino",
      },
    },
    hero: {
      eyebrow: "PDF tools for iPhone and iPad",
      title: "Shrink, scan and sign PDFs. **Right on your device.**",
      lead: "Pdfino helps you compress PDF file size when a PDF is too big to email, then does the other 38 jobs too: scan, merge, split, sign, fill, protect, redact and convert. No file is uploaded, and there is no account to create.",
      facts: ["39 PDF tools", "Nothing uploaded", "No account", "iPhone and iPad"],
      altScan: "The Scan tab in Pdfino, the PDF scanner for iPhone",
      altHome: "Pdfino's Tools home with recent files and the most popular PDF tools",
      altCompress: "A finished PDF compression in Pdfino",
    },
    tools: {
      eyebrow: "All tools",
      title: (count) => `${count} PDF tools, **one app.**`,
      lead: "Grouped the way you find them in the app. Search covers every tool, and History remembers every job.",
    },
    showcases: [
      {
        id: "compress",
        eyebrow: "Compress",
        title: "Shrink a PDF that is **too big to email.**",
        body: "Import your PDFs and reduce the file size, a whole batch at a time. The result shows the real size before and after.",
        points: ["Five quality levels", "Batch compression", "Ask Siri to compress a PDF"],
        screen: "compress",
        alt: "Pdfino compress PDF file size result: a 1.3 MB PDF reduced to 822 KB",
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
    ],
    privacy: {
      eyebrow: "Private by default",
      title: "Your documents **stay on your device.**",
      lead: "Pdfino does its work on your iPhone or iPad. There is no Pdfino server, and nothing to sign in to.",
      points: [
        { title: "Processed locally", body: "Scanning, OCR, compression and redaction all happen on your device." },
        { title: "No account", body: "Open the app and start. There is nothing to create and nothing to log in to." },
        {
          title: "Clear about the network",
          body: "Two tools load a web address you type in yourself, and Translate PDF uses the iOS translation sheet. Free users see ads. Usage statistics and crash reports follow your consent choices, and you can turn them off in Settings.",
        },
      ],
    },
    faqHead: { eyebrow: "Questions", title: "Good to **know.**" },
    faqs: [
      {
        question: "Is Pdfino free?",
        answer:
          "Yes. Every tool is free once a day, and Annotate, Fill Forms, Redact, Translate and Compare have no daily limit. Compression works from its own allowance of ten, and a short video adds three more or unlocks everything for 24 hours. A subscription removes the limits and the ads; the App Store shows its price for your region.",
      },
      {
        question: "Are my files uploaded anywhere?",
        answer:
          "No. Your documents are processed on your device and there is no Pdfino server to send them to. Two tools load a web address you type in yourself, and Translate PDF hands its text to the translation sheet of iOS. Ads and usage statistics are separate from your files and follow your consent choices.",
      },
      {
        question: "Is this the official Pdfino website?",
        answer: "Yes. Pdfino is an iOS and iPadOS app available on the App Store. pdfino.com is its only official website.",
      },
      { question: "Does Pdfino work on iPad?", answer: "Yes. Pdfino runs on iPhone and iPad." },
      {
        question: "Which files can it work with?",
        answer:
          "PDF files, plus images in JPEG, PNG and HEIC. Word documents, Markdown, HTML and live web pages convert into PDFs, and any PDF can be exported as PNG or JPEG.",
      },
      { question: "How do I cancel a subscription?", answer: "Open Settings on your iPhone or iPad, tap your name, then Subscriptions." },
      { question: "How do I get help?", answer: `Write to ${SITE.supportEmail} and we will get back to you.` },
    ],
    cta: { title: "Put 39 PDF tools **in your pocket.**", lead: "Free to download. No account to create." },
    toolSections: {},
  },
  ro: {
    htmlLang: "ro",
    homePath: "/ro/",
    seo: {
      title: "Pdfino: Comprimă PDF, Scaner și Semnătură Electronică",
      description:
        "Comprimă PDF-uri, semnează, scanează, îmbină și împarte documente pe iPhone sau iPad cu Pdfino. 39 de instrumente, nimic încărcat, fără cont. Gratuit pe iPhone.",
      ogLocale: "ro_RO",
      ogAlt: "Iconița aplicației Pdfino și Pdfino pe iPhone",
      keywords: ["comprimă PDF", "scanare PDF", "semnătură PDF", "îmbină PDF", "împarte PDF", "editor PDF", "convertor PDF", "iPhone", "iPad"],
    },
    ui: {
      skip: "Sari la conținutul principal",
      nav: { features: "Funcții", tools: "Instrumente", privacy: "Confidențialitate", faq: "Întrebări" },
      getApp: "Descarcă aplicația",
      menu: "Deschide meniul",
      homeLabel: "Pdfino, pagina principală",
      badgeAlt: "Descarcă din App Store",
      seeTools: (count) => `Vezi toate cele ${count} instrumente`,
      glance: "Pe scurt",
      readPrivacy: "Citește politica de confidențialitate",
      footerBlurb: "Instrumente PDF pentru iPhone și iPad. Documentele tale rămân pe dispozitiv.",
      legal: "Legal",
      support: "Suport",
      officialLead: "Pdfino oficial.",
      more: "Mai multe aplicații de la Visto Apps",
      switchLabel: "English",
      switchName: "engleză",
      notFound: {
        label: "Eroare 404",
        title: "Pagina **nu există.**",
        body: "Pagina căutată nu există. Poate a fost mutată.",
        back: "Înapoi la Pdfino",
      },
    },
    hero: {
      eyebrow: "Instrumente PDF pentru iPhone și iPad",
      title: "Comprimă, scanează și semnează PDF-uri. **Direct pe dispozitiv.**",
      lead: "Pdfino te ajută să comprimi un PDF prea mare pentru e-mail, apoi face și celelalte 38 de lucruri: scanează, îmbină, împarte, semnează, completează, protejează, cenzurează și convertește. Niciun fișier nu se încarcă și nu trebuie să creezi un cont.",
      facts: ["39 de instrumente PDF", "Nimic încărcat", "Fără cont", "iPhone și iPad"],
      altScan: "Fila Scanare din Pdfino, scanerul PDF pentru iPhone",
      altHome: "Ecranul principal Instrumente din Pdfino, cu fișiere recente și cele mai folosite instrumente PDF",
      altCompress: "O comprimare PDF terminată în Pdfino",
    },
    tools: {
      eyebrow: "Toate instrumentele",
      title: (count) => `${count} de instrumente PDF, **o singură aplicație.**`,
      lead: "Grupate așa cum le găsești în aplicație. Căutarea cuprinde fiecare instrument, iar Istoricul ține minte fiecare lucrare.",
    },
    showcases: [
      {
        id: "compress",
        eyebrow: "Comprimă",
        title: "Micșorează un PDF **prea mare pentru e-mail.**",
        body: "Importă PDF-urile și redu dimensiunea fișierului, mai multe odată. Rezultatul arată dimensiunea reală de dinainte și de după.",
        points: ["Cinci niveluri de calitate", "Comprimare în lot", "Cere-i lui Siri să comprime un PDF"],
        screen: "compress",
        alt: "Rezultat comprimare PDF în Pdfino: un PDF de 1,3 MB redus la 822 KB",
      },
      {
        id: "scan",
        eyebrow: "Scanează și convertește",
        title: "Din hârtie în PDF **în câteva secunde.**",
        body: "Scanează cu camera, cu detectarea marginilor, captură pe mai multe pagini și patru filtre. Transformă imaginile într-un PDF, exportă paginile înapoi ca PNG sau JPEG și convertește documente Word, Markdown, HTML și pagini web.",
        points: ["Detectarea marginilor și filtre", "Imagini în PDF și invers", "Word, Markdown, HTML și pagini web"],
        screen: "scan",
        alt: "Fila Scanare din Pdfino, cu Scanează document, Importă din Fișiere și Importă din Poze",
      },
      {
        id: "organize",
        eyebrow: "Îmbină, împarte și reordonează",
        title: "Doar paginile **de care ai nevoie.**",
        body: "Combină mai multe PDF-uri într-unul singur, extrage doar paginile de care ai nevoie, apoi reordonează, rotește, decupează, redimensionează, înlocuiește sau șterge pagini. Adaugă numere de pagină, anteturi, subsoluri și marcaje.",
        points: ["Îmbină și împarte", "Reordonează, rotește și decupează", "Numere de pagină, anteturi și marcaje"],
        screen: "split",
        alt: "Împarte PDF în Pdfino, cu o grilă de pagini reale ale unui document",
      },
      {
        id: "protect",
        eyebrow: "Semnează, completează și protejează",
        title: "Semnează-l, completează-l, **blochează-l.**",
        body: "Desenează-ți semnătura și păstrează până la cinci salvate. Completează câmpurile de formular, adaugă un filigran și protejează un PDF cu parolă. Cenzurarea reconstruiește pagina, deci textul de dedesubt iese din fișier în loc să stea ascuns în spatele unei casete.",
        points: ["Semnături și completarea formularelor", "Parole și permisiuni", "Cenzurare care elimină textul"],
        screen: "protect",
        alt: "Protejează PDF în Pdfino, cu parola setată și indicatorul de parolă puternică",
      },
    ],
    privacy: {
      eyebrow: "Privat implicit",
      title: "Documentele tale **rămân pe dispozitiv.**",
      lead: "Pdfino lucrează pe iPhone-ul sau iPad-ul tău. Nu există un server Pdfino și nu ai unde să te conectezi.",
      points: [
        { title: "Procesat local", body: "Scanarea, OCR-ul, comprimarea și cenzurarea se întâmplă toate pe dispozitivul tău." },
        { title: "Fără cont", body: "Deschide aplicația și începe. Nu ai ce să creezi și nu ai la ce să te conectezi." },
        {
          title: "Clar despre rețea",
          body: "Două instrumente încarcă o adresă web pe care o scrii tu, iar Tradu PDF folosește foaia de traducere din iOS. Utilizatorii gratuiți văd reclame. Statisticile de utilizare și rapoartele de erori urmează alegerile tale de consimțământ și le poți opri din Setări.",
        },
      ],
    },
    faqHead: { eyebrow: "Întrebări", title: "Bine de **știut.**" },
    faqs: [
      {
        question: "Este Pdfino gratuit?",
        answer:
          "Da. Fiecare instrument este gratuit o dată pe zi, iar Adnotează, Completează formulare, Cenzurează, Tradu și Compară nu au limită zilnică. Comprimarea folosește o alocare proprie de zece, iar un scurt videoclip adaugă încă trei sau deblochează totul pentru 24 de ore. Un abonament elimină limitele și reclamele; App Store afișează prețul pentru regiunea ta.",
      },
      {
        question: "Fișierele mele sunt încărcate undeva?",
        answer:
          "Nu. Documentele tale sunt procesate pe dispozitiv și nu există un server Pdfino către care să fie trimise. Două instrumente încarcă o adresă web pe care o scrii tu, iar Tradu PDF trimite textul către foaia de traducere din iOS. Reclamele și statisticile de utilizare sunt separate de fișierele tale și urmează alegerile tale de consimțământ.",
      },
      {
        question: "Acesta este site-ul oficial Pdfino?",
        answer: "Da. Pdfino este o aplicație iOS și iPadOS disponibilă în App Store. pdfino.com este singurul său site oficial.",
      },
      { question: "Funcționează Pdfino pe iPad?", answer: "Da. Pdfino rulează pe iPhone și iPad." },
      {
        question: "Cu ce fișiere poate lucra?",
        answer:
          "Fișiere PDF, plus imagini JPEG, PNG și HEIC. Documentele Word, Markdown, HTML și paginile web se convertesc în PDF, iar orice PDF poate fi exportat ca PNG sau JPEG.",
      },
      { question: "Cum anulez un abonament?", answer: "Deschide Setări pe iPhone sau iPad, atinge numele tău, apoi Abonamente." },
      { question: "Cum primesc ajutor?", answer: `Scrie-ne la ${SITE.supportEmail} și îți răspundem.` },
    ],
    cta: { title: "Ia 39 de instrumente PDF **în buzunar.**", lead: "Gratuit la descărcare. Fără cont de creat." },
    toolSections: {
      "Compress, merge and split": {
        title: "Comprimă, îmbină și împarte",
        tools: { "Compress PDF": "Comprimă PDF", "Merge PDFs": "Îmbină PDF-uri", "Split PDF": "Împarte PDF" },
      },
      Convert: {
        title: "Convertește",
        tools: {
          "Scan PDF": "Scanează PDF",
          "Scan QR Code": "Scanează cod QR",
          "PDF to Images": "PDF în imagini",
          "Images to PDF": "Imagini în PDF",
          "URL to PDF": "URL în PDF",
          "Word to PDF": "Word în PDF",
          "Markdown to PDF": "Markdown în PDF",
          "HTML to PDF": "HTML în PDF",
        },
      },
      "Page Tools": {
        title: "Instrumente pentru pagini",
        tools: {
          "Reorder Pages": "Reordonează paginile",
          "Rotate PDF": "Rotește PDF",
          "Extract Text": "Extrage text",
          "Crop PDF": "Decupează PDF",
          "Page Numbers": "Numere de pagină",
          "Extract Pages": "Extrage paginile",
          "Delete Pages": "Șterge pagini",
          "Duplicate Pages": "Duplică paginile",
          "Blank Pages": "Pagini goale",
          "Replace Pages": "Înlocuiește paginile",
          "Resize Pages": "Redimensionează paginile",
        },
      },
      "Edit & Annotate": {
        title: "Editează și adnotează",
        tools: {
          "Annotate PDF": "Adnotează PDF",
          "Fill Forms": "Completează formulare",
          "Flatten PDF": "Aplatizează PDF",
          Watermark: "Filigran",
          "Redact PDF": "Cenzurează PDF",
          "Headers & Footers": "Anteturi și subsoluri",
          "Add Bookmarks": "Adaugă marcaje",
          "Compare PDFs": "Compară PDF-uri",
        },
      },
      Security: {
        title: "Securitate",
        tools: {
          "Protect PDF": "Protejează PDF",
          "Unlock PDF": "Deblochează PDF",
          "E-Sign PDF": "Semnează electronic PDF",
          "Remove Metadata": "Elimină metadatele",
          "Set Permissions": "Setează permisiunile",
        },
      },
      "Text & Quality": {
        title: "Text și calitate",
        tools: { "Translate PDF": "Tradu PDF", "Optimize PDF": "Optimizează PDF", "Repair PDF": "Repară PDF", "OCR PDF": "OCR PDF" },
      },
    },
  },
};
