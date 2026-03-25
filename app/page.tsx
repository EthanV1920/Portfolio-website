import { AmbientFrame } from "@/components/ambient-frame";
import { CursorGlowGate } from "@/components/cursor-glow-gate";
import { Hero } from "@/components/hero";
import { LinkDock } from "@/components/link-dock";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)]">
      <AmbientFrame />
      <CursorGlowGate />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:gap-5 sm:px-6 sm:py-6 lg:gap-6 lg:px-8 lg:py-8">
        <div className="flex items-center justify-between border border-[var(--border-strong)] bg-[rgba(10,14,20,0.82)] px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)] sm:text-xs">
            EV / Portfolio / v1
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:hidden">
            Mobile Index
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:block sm:text-xs">
            Vosburg Portfolio
          </p>
        </div>

        <section className="grid flex-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.8fr)] lg:gap-8">
          <Hero name={siteConfig.name} roles={siteConfig.roles} />
          <LinkDock links={siteConfig.links} />
        </section>
      </div>
    </main>
  );
}
