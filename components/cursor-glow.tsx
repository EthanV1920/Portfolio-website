"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (prefersReducedMotion.matches || !finePointer.matches) {
      glow.style.setProperty("--cursor-opacity", "0");
      return;
    }

    let frameId = 0;
    let active = false;
    let currentX = window.innerWidth * 0.5;
    let currentY = window.innerHeight * 0.35;
    let targetX = currentX;
    let targetY = currentY;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      glow.style.setProperty("--cursor-x", `${currentX}px`);
      glow.style.setProperty("--cursor-y", `${currentY}px`);

      const settled =
        Math.abs(targetX - currentX) < 0.2 &&
        Math.abs(targetY - currentY) < 0.2;

      if (active && !settled) {
        frameId = window.requestAnimationFrame(render);
        return;
      }

      active = false;
      frameId = 0;
    };

    const start = () => {
      if (frameId) {
        return;
      }

      active = true;
      frameId = window.requestAnimationFrame(render);
    };

    const stop = () => {
      active = false;

      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.setProperty("--cursor-opacity", "1");
      start();
    };

    const handlePointerLeave = () => {
      glow.style.setProperty("--cursor-opacity", "0");
      stop();
    };

    const handleResize = () => {
      currentX = window.innerWidth * 0.5;
      currentY = window.innerHeight * 0.35;
      targetX = currentX;
      targetY = currentY;
      glow.style.setProperty("--cursor-x", `${currentX}px`);
      glow.style.setProperty("--cursor-y", `${currentY}px`);
    };

    handleResize();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      stop();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
}
