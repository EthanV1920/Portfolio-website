import type { LinkItem } from "@/lib/site-config";

type LinkDockProps = {
  links: LinkItem[];
};

export function LinkDock({ links }: LinkDockProps) {
  return (
    <aside className="dock-panel border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(12,17,24,0.92)_0%,rgba(8,11,16,0.84)_100%)] p-4 shadow-[var(--shadow-panel)] backdrop-blur-2xl sm:p-5 lg:h-full">
      <div className="flex items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)] sm:text-xs">
            Link Dock
          </p>
          <p className="mt-2 max-w-[16rem] text-sm leading-6 text-[var(--text-secondary)]">
            Placeholder channels. Structure is live now so real destinations can slot in later without redesign.
          </p>
        </div>
        <div className="h-11 w-11 border border-[var(--border-subtle)] bg-[linear-gradient(135deg,rgba(139,184,255,0.18),rgba(255,255,255,0.02))]" />
      </div>

      <div className="mt-4 grid gap-3">
        {links.map((link, index) => {
          const isInteractive = Boolean(link.enabled && link.href);
          const Component = isInteractive ? "a" : "div";

          return (
            <Component
              key={link.label}
              {...(isInteractive
                ? {
                    href: link.href,
                    target: "_blank",
                    rel: "noreferrer",
                  }
                : {})}
              className="group relative overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-soft)] transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="flex items-center justify-between gap-4 px-4 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--text-dim)] sm:text-xs">
                    Slot 0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-medium tracking-[-0.02em] text-[var(--text-primary)]">
                    {link.label}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-muted)] sm:text-xs">
                    {isInteractive ? "Live" : "Pending"}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-dim)]">
                    {link.note}
                  </p>
                </div>
              </div>
            </Component>
          );
        })}
      </div>
    </aside>
  );
}
