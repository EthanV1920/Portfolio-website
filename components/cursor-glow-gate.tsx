"use client";

import { useEffect, useState } from "react";

const desktopGlowQuery =
  "(min-width: 1024px) and (pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)";

type CursorGlowComponent = typeof import("@/components/cursor-glow").CursorGlow;

export function CursorGlowGate() {
  const [CursorGlow, setCursorGlow] = useState<CursorGlowComponent | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopGlowQuery);

    if (!mediaQuery.matches) {
      return;
    }

    let active = true;

    void import("@/components/cursor-glow").then((module) => {
      if (active) {
        setCursorGlow(() => module.CursorGlow);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return CursorGlow ? <CursorGlow /> : null;
}
