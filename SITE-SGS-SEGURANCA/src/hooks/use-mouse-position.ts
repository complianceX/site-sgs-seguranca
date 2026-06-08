import { useState, useEffect, useRef, type RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T | null>,
  options?: { maxTilt?: number; perspective?: number; scale?: number; speed?: number }
) {
  const { maxTilt = 8, perspective = 1000, scale = 1.02, speed = 400 } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isHovering = false;
    let timeout: ReturnType<typeof setTimeout>;

    const onEnter = () => {
      isHovering = true;
      clearTimeout(timeout);
    };

    const onMove = (e: MouseEvent) => {
      if (!isHovering) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * maxTilt;
      const tiltY = (x - 0.5) * -maxTilt;
      el.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    };

    const onLeave = () => {
      isHovering = false;
      timeout = setTimeout(() => {
        el.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }, 50);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, maxTilt, perspective, scale, speed]);
}

export function useMagnetic<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T | null>,
  strength = 20
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const dist = Math.sqrt(x * x + y * y);
      const maxDist = 150;
      if (dist > maxDist) return;
      const factor = (1 - dist / maxDist) * (strength / 20);
      el.style.transition = "transform 150ms ease-out";
      el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    };

    const onLeave = () => {
      el.style.transition = "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength]);
}
