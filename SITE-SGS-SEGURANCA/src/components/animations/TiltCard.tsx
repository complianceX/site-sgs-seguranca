import { useRef, type ReactNode } from "react";
import { useTilt } from "@/hooks/use-mouse-position";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  as?: "div" | "a" | "article";
  href?: string;
  [key: string]: unknown;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  perspective = 1000,
  scale = 1.01,
  speed = 300,
  as: Tag = "div",
  href,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null!);

  useTilt(ref, { maxTilt, perspective, scale, speed });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  if (Tag === "a") {
    return (
      <a
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
        href={href}
        className={className}
        onMouseMove={handleMouseMove}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      className={className}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      {children}
    </Tag>
  );
}

