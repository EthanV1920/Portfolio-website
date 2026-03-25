export function AmbientFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="ambient-loop absolute inset-[-22%] opacity-85" />
      <div className="panel-grid absolute inset-[-6%] opacity-32" />
      <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(139,184,255,0.22)_0%,_rgba(139,184,255,0)_72%)] blur-3xl" />
      <div className="absolute right-[-5rem] top-[18%] h-64 w-64 rounded-full border border-[var(--border-subtle)] bg-[radial-gradient(circle,_rgba(216,163,93,0.08)_0%,_rgba(216,163,93,0)_70%)] blur-2xl" />
      <div className="absolute inset-4 border-[1.5px] border-[var(--border-strong)] sm:inset-6 sm:border sm:border-[var(--border-subtle)] lg:inset-8" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(3,4,7,0.72)] to-transparent" />
    </div>
  );
}
