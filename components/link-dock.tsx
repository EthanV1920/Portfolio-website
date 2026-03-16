import type { LinkItem } from "@/lib/site-config";

type LinkDockProps = {
  links: LinkItem[];
};

export function LinkDock({ links }: LinkDockProps) {
  const renderMobileTile = (link: LinkItem, index: number) => {
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
        className="group relative flex min-h-32 flex-col justify-between overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-3 transition duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--text-dim)]">
            Slot 0{index + 1}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-muted)]">
            {isInteractive ? "Live" : "Pending"}
          </p>
        </div>
        <div>
          <p className="text-base font-medium tracking-[-0.02em] text-[var(--text-primary)]">
            {link.label}
          </p>
          <p className="mt-2 text-xs leading-5 text-[var(--text-dim)]">
            {link.note}
          </p>
        </div>
      </Component>
    );
  };

  const renderDesktopRow = (link: LinkItem, index: number) => {
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
  };

  return (
    <aside className="dock-panel border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(12,17,24,0.96)_0%,rgba(8,11,16,0.92)_100%)] p-4 shadow-[var(--shadow-panel)] sm:p-5 lg:h-full">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)] sm:text-xs">
            Link Dock
          </p>
          <p className="mt-2 max-w-[16rem] text-sm leading-6 text-[var(--text-secondary)]">
            Whats going on now...
          </p>
        </div>
        <div className="hidden h-11 w-11 border border-[var(--border-subtle)] bg-[linear-gradient(135deg,rgba(139,184,255,0.18),rgba(255,255,255,0.02))] sm:block" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
        {links.map(renderMobileTile)}
      </div>

      <div className="mt-4 hidden gap-3 sm:grid">
        {links.map(renderDesktopRow)}
      </div>
    </aside>
  );
}
