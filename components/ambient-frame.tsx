export function AmbientFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="ambient-loop absolute inset-[-10%] opacity-70" />
      <div className="panel-grid absolute inset-0 hidden opacity-18 sm:block" />
      <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(139,184,255,0.18)_0%,_rgba(139,184,255,0)_72%)] blur-2xl sm:h-52 sm:w-52" />
      <div className="absolute inset-4 border-[1.5px] border-[var(--border-strong)] sm:inset-6 sm:border sm:border-[var(--border-subtle)] lg:inset-8" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(3,4,7,0.56)] to-transparent" />
    </div>
  );
}
