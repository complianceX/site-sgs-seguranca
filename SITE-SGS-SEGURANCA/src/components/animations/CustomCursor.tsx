import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null!);
  const trailRef = useRef<HTMLDivElement>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      const cp = cursorPos.current;
      const tp = trailPos.current;

      cp.x += (mx - cp.x) * 0.3;
      cp.y += (my - cp.y) * 0.3;
      tp.x += (mx - tp.x) * 0.08;
      tp.y += (my - tp.y) * 0.08;

      trail.style.transform = `translate(${tp.x - 20}px, ${tp.y - 20}px)`;

      requestAnimationFrame(animate);
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
      trail.style.opacity = "0";
    };
    const onEnter = () => {
      cursor.style.opacity = "1";
      trail.style.opacity = "1";
    };

    // Handle hover state for interactive elements using delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button], input[type=submit]")) {
        cursor.classList.add("sgs-cursor-hover");
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button], input[type=submit]")) {
        cursor.classList.remove("sgs-cursor-hover");
      }
    };

    document.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[10000] hidden lg:block"
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#1d5b8d",
          mixBlendMode: "difference",
          transition: "opacity 300ms ease, width 300ms ease, height 300ms ease",
        }}
      />
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(29,91,141,0.15) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
    </>
  );
}
