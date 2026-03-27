// import { AmbientFrame } from "@/components/ambient-frame";
// import { CursorGlowGate } from "@/components/cursor-glow-gate";
import { Hero } from "@/components/hero";
import { LinkDock } from "@/components/link-dock";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] lg:flex lg:items-center">
    {/* <AmbientFrame /> */}
      {/* <CursorGlowGate /> */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:gap-5 sm:px-6 sm:py-6 lg:gap-6 lg:px-8 lg:py-8">

        <section className="grid flex-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.8fr)] lg:gap-8">
          <Hero name={siteConfig.name} roles={siteConfig.roles} />
          <LinkDock links={siteConfig.links} />
        </section>
      </div>
    </main>
  );
}
