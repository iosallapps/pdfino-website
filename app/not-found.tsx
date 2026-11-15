import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div>
        <span className="section-label">Error 404</span>
        <h1>
          Page <em>not found.</em>
        </h1>
        <p>The page you are looking for does not exist. It may have moved.</p>
        <Link href="/" className="btn-glow">
          Back to Pdfino
        </Link>
      </div>
    </section>
  );
}
