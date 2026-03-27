"use client";

import { useEffect, useState } from "react";

import type { LinkItem } from "@/lib/site-config";

type LinkDockProps = {
  links: LinkItem[];
};

export function LinkDock({ links }: LinkDockProps) {
  const [preferDirectResumePdf, setPreferDirectResumePdf] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updatePreference = () => {
      setPreferDirectResumePdf(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  const renderLink = (link: LinkItem, index: number) => {
    const href =
      link.label === "Resume" && preferDirectResumePdf ? "/resume.pdf" : link.href;
    const isInteractive = Boolean(link.enabled && href);
    const isExternal = Boolean(href?.startsWith("http"));
    const Component = isInteractive ? "a" : "div";

    return (
      <Component
        key={link.label}
        {...(isInteractive
          ? {
              href,
              ...(isExternal
                ? {
                    target: "_blank",
                    rel: "noreferrer",
                  }
                : {}),
            }
          : {})}
        className="group relative flex min-h-32 flex-col justify-between overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-3 transition-[background-color,border-color,opacity] duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)] sm:min-h-0 sm:flex-row sm:items-center sm:gap-4 sm:px-4 sm:py-4"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block" />
        <div className="flex items-center justify-between gap-3 sm:min-w-0 sm:flex-1 sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--text-dim)] sm:text-xs">
              Slot 0{index + 1}
            </p>
            <p className="mt-2 text-base font-medium tracking-[-0.02em] text-[var(--text-primary)] sm:text-lg">
              {link.label}
            </p>
            <p className="mt-2 max-w-[14rem] text-xs leading-5 text-[var(--text-dim)] sm:text-sm">
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
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-1">
        {links.map(renderLink)}
      </div>
    </aside>
  );
}
