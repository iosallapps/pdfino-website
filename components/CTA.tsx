import { ArrowRight, Download } from "lucide-react";
import { APP_STORE_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-scale relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--brand)] via-[var(--brand-light)] to-[var(--accent)] p-12 md:p-20 text-center">
          {/* Background elements - static */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="animate-in delay-1 w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Download className="w-10 h-10 text-white" />
            </div>

            <h2 className="animate-in delay-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to simplify your
              <br />
              PDF workflow?
            </h2>
            <p className="animate-in delay-3 text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of users who trust Pdfino for their PDF needs.
              Download free today.
            </p>

            <div className="animate-in delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--brand)] font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-2xl shadow-black/20"
              >
                Download Pdfino Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="animate-in delay-5 mt-8 text-sm text-white/60">
              Free to download. No account required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
