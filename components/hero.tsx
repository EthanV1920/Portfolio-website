type HeroProps = {
  name: string;
  roles: string[];
};

export function Hero({ name, roles }: HeroProps) {
  return (
    <div className="hero-panel relative overflow-hidden border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(14,20,29,0.94)_0%,rgba(10,14,20,0.9)_100%)] px-4 py-5 shadow-[var(--shadow-panel)] sm:px-7 sm:py-8 lg:h-full lg:px-9 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,184,255,0.14),_transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_54%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
      <div className="hero-copy relative z-10 flex h-full flex-col justify-between gap-8 sm:gap-10 lg:gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 border-b border-[var(--border-subtle)] pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--amber)] sm:text-xs">
                Broadcast / Systems / Compute
              </p>
            </div>
            <div className="inline-flex items-center gap-2 self-start border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:self-auto sm:text-xs">
            <span className="status-pulse h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent-glow)]" />
            Rendering
            </div>
          </div>

          <div className="max-w-4xl">
            <h1 className="hero-title max-w-5xl font-display font-medium text-balance text-[var(--text-primary)]">
              {name}
            </h1>
          </div>
        </div>

        <div className="grid gap-4 border-t border-[var(--border-subtle)] pt-4 sm:gap-5 sm:pt-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:pt-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {roles.map((role, index) => (
              <div
                key={role}
                className="flex min-h-24 flex-col justify-between gap-3 border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-3 sm:min-h-28 lg:min-h-0 lg:flex-row lg:items-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:text-xs">
                  0{index + 1}
                </span>
                <span className="text-sm font-medium tracking-[-0.02em] text-[var(--text-secondary)] sm:text-base lg:text-lg">
                  {role}
                </span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.26em] text-[var(--text-dim)] sm:text-xs lg:max-w-[14rem]">
            Systems thinking with clean execution across broadcast and compute.
          </p>
        </div>
      </div>
    </div>
  );
}
