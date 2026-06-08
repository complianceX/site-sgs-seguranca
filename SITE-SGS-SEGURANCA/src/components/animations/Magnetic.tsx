import { useRef, type ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-mouse-position";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export function Magnetic({ children, strength = 30 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null!);

  useMagnetic(ref, strength);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
}
