type HeroProps = {
  name: string;
  roles: string[];
};

export function Hero({ name, roles }: HeroProps) {
  return (
    <div className="hero-panel relative overflow-hidden border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(14,20,29,0.94)_0%,rgba(10,14,20,0.9)_100%)] px-4 py-5 shadow-[var(--shadow-panel)] sm:px-7 sm:py-8 lg:h-full lg:px-9 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,184,255,0.14),_transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_54%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
      <div className="hero-copy relative z-10 flex h-full flex-col gap-8 sm:gap-10 lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-5">
          <div className="max-w-4xl">
            <h1 className="hero-title max-w-5xl font-display font-medium text-balance text-[var(--text-primary)]">
              {name}
            </h1>
          </div>

          <p className="pt-4 font-mono text-[10px] uppercase leading-5 tracking-[0.26em] text-[var(--text-dim)] sm:pt-6 sm:text-xs lg:max-w-[24rem]">
            Systems thinking with clean execution across broadcast and compute.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 lg:grid-cols-1 lg:pt-0">
          {roles.map((role, index) => (
            <div
              key={role}
              className="flex min-h-16 flex-col justify-between px-3 py-3 sm:min-h-14 lg:min-h-0 lg:flex-row lg:items-center"
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
      </div>
    </div>
  );
}
