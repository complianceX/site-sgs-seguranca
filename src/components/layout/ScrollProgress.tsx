"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/motion-hooks";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
