import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  threshold?: number;
  once?: boolean;
  type?: "words" | "chars" | "chars-3d";
  gradient?: boolean;
  color?: string;
}

export function TextReveal({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
  stagger = 40,
  threshold = 0.15,
  once = true,
  type = "words",
  gradient = false,
  color,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, threshold]);

  const items = type.startsWith("chars") ? text.split("") : text.split(" ");
  const is3d = type === "chars-3d";

  return (
    <Tag
      ref={ref as never}
      className={`${gradient ? "sgs-gradient-text" : ""} inline ${className}`}
      aria-label={text}
      style={color ? { color } : undefined}
    >
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) rotateX(0)"
              : is3d
              ? "translateY(40px) rotateX(40deg)"
              : "translateY(24px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            perspective: "600px",
            transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger + delay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger + delay}ms, filter 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger + delay}ms`,
          }}
        >
          {item}
          {type === "words" ? "\u00A0" : type.startsWith("chars") && item === " " ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

