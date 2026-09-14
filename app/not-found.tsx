import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5">
      <div aria-hidden className="page-glow" />
      <div className="neu-card relative max-w-md px-8 py-12 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-ink">
          Page <span className="hl">not found.</span>
        </h1>
        <p className="mt-4 leading-relaxed text-ink-muted">
          The page you are looking for does not exist. It may have moved.
        </p>
        <Link href="/" className="neu-chip neu-press mt-8 inline-flex px-6 py-3 text-sm font-semibold text-accent-text">
          Back to Pdfino
        </Link>
      </div>
    </section>
  );
}
