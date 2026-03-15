export function AmbientFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="panel-grid absolute inset-0 opacity-35" />
      <div className="ambient-drift absolute -left-24 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(139,184,255,0.32)_0%,_rgba(139,184,255,0)_72%)] blur-3xl" />
      <div className="ambient-pulse absolute right-[-6rem] top-[18%] h-80 w-80 rounded-full border border-[var(--border-subtle)] bg-[radial-gradient(circle,_rgba(216,163,93,0.12)_0%,_rgba(216,163,93,0)_70%)] blur-2xl" />
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[var(--border-subtle)] sm:inset-x-8 sm:top-8 sm:bottom-8" />
      <div className="absolute left-[8%] top-[18%] h-28 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-45" />
      <div className="absolute bottom-[16%] right-[12%] h-px w-28 bg-gradient-to-r from-transparent via-[var(--amber)] to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(3,4,7,0.72)] to-transparent" />
    </div>
  );
}
