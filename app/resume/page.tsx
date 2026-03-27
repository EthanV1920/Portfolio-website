import type { Metadata } from "next";
import Link from "next/link";
import { resumePdfUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume | Ethan Vosburg",
  description: "Embedded PDF resume viewer for Ethan Vosburg.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] px-4 py-4 text-[var(--text-primary)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <header className="border border-[var(--border-strong)] bg-[rgba(10,14,20,0.82)] px-4 py-4 sm:px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)] sm:text-xs">
                Resume Viewer
              </p>
              <h1 className="mt-3 text-3xl font-display font-medium tracking-[-0.04em] sm:text-4xl">
                Ethan Vosburg Resume
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-[background-color,border-color] duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
              >
                Back to Portfolio
              </Link>
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-[background-color,border-color] duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
              >
                Open Raw PDF
              </a>
            </div>
          </div>
        </header>

        <section className="overflow-hidden border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(12,17,24,0.96)_0%,rgba(8,11,16,0.92)_100%)] shadow-[var(--shadow-panel)]">
          <div className="border-b border-[var(--border-subtle)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:px-5 sm:text-xs">
            Embedded PDF
          </div>
          <iframe
            title="Ethan Vosburg Resume PDF"
            src={`${resumePdfUrl}#view=FitH&navpanes=0`}
            className="h-[78vh] w-full bg-white"
          />
          <div className="border-t border-[var(--border-subtle)] px-4 py-3 text-sm leading-6 text-[var(--text-dim)] sm:px-5">
            If the embedded viewer does not load in your browser, use Open Raw PDF.
          </div>
        </section>
      </div>
    </main>
  );
}
