import { AmbientFrame } from "@/components/ambient-frame";
import { Hero } from "@/components/hero";
import { LinkDock } from "@/components/link-dock";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)]">
      <AmbientFrame />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="flex items-center justify-between border border-[var(--border-strong)] bg-[var(--surface-veil)] px-4 py-3 backdrop-blur-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)] sm:text-xs">
            EV / Portfolio / v1
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:text-xs">
            Dark Industrial Index
          </p>
        </div>

        <section className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.8fr)] lg:items-end lg:gap-8 lg:py-10">
          <Hero name={siteConfig.name} roles={siteConfig.roles} />
          <LinkDock links={siteConfig.links} />
        </section>
      </div>
    </main>
  );
}
