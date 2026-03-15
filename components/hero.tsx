type HeroProps = {
  name: string;
  roles: string[];
};

export function Hero({ name, roles }: HeroProps) {
  return (
    <div className="hero-panel relative overflow-hidden border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(14,20,29,0.88)_0%,rgba(10,14,20,0.76)_100%)] px-5 py-6 shadow-[var(--shadow-panel)] backdrop-blur-2xl sm:px-7 sm:py-8 lg:min-h-[68vh] lg:px-9 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,184,255,0.14),_transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_54%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
      <div className="absolute right-5 top-5 hidden h-24 w-24 rounded-full border border-[var(--border-subtle)] lg:block" />
      <div className="absolute bottom-5 right-5 h-20 w-20 border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)]" />

      <div className="hero-copy relative z-10 flex h-full flex-col justify-between gap-12">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)] sm:text-xs">
            Signal / Identity
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent-glow)]" />
            Open
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--amber)] sm:text-xs">
            Broadcast / Systems / Compute
          </p>
          <h1 className="hero-title max-w-5xl font-display font-medium text-balance text-[var(--text-primary)]">
            {name}
          </h1>
        </div>

        <div className="grid gap-5 border-t border-[var(--border-subtle)] pt-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:pt-6">
          <div className="grid gap-3">
            {roles.map((role, index) => (
              <div
                key={role}
                className="flex items-center gap-3 border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-dim)] sm:text-xs">
                  0{index + 1}
                </span>
                <span className="text-base font-medium tracking-[-0.02em] text-[var(--text-secondary)] sm:text-lg">
                  {role}
                </span>
              </div>
            ))}
          </div>

          <p className="max-w-[14rem] font-mono text-[10px] uppercase leading-5 tracking-[0.26em] text-[var(--text-dim)] sm:text-xs">
            Dark one-page portfolio with a hardware-inspired visual language.
          </p>
        </div>
      </div>
    </div>
  );
}
