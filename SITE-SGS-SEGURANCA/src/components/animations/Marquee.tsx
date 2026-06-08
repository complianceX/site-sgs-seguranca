import { useEffect, useRef, type ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  items,
  speed = 30,
  direction = "left",
  className = "",
  itemClassName = "",
  pauseOnHover = true,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const wrapperRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    let animationId: number;
    let pos = 0;
    const dir = direction === "left" ? -1 : 1;

    const animate = () => {
      pos += dir * 0.5;
      const totalWidth = container.scrollWidth / 2;
      if (direction === "left" && Math.abs(pos) >= totalWidth) pos = 0;
      if (direction === "right" && pos >= 0) pos = -totalWidth;
      container.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    if (pauseOnHover) {
      wrapper.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
      wrapper.addEventListener("mouseleave", () => {
        animationId = requestAnimationFrame(animate);
      });
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, pauseOnHover]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex gap-8"
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className={`shrink-0 ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
