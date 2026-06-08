import { useRef, useEffect } from "react";

export function RippleButton({ children, className = "", type = "button", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = "ripple";
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <button ref={btnRef} type={type} className={`sgs-ripple-btn ${className}`} {...props}>
      {children}
    </button>
  );
}
