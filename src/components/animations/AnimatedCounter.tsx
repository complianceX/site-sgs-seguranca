"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const motionValue = useMotionValue(shouldReduceMotion ? value : 0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 24 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest).toLocaleString("pt-BR")}${suffix}`);

  useEffect(() => {
    motionValue.set(isInView ? value : 0);
  }, [isInView, motionValue, value]);

  if (shouldReduceMotion) {
    return (
      <span ref={ref} className={className}>
        {value.toLocaleString("pt-BR")}
        {suffix}
      </span>
    );
  }

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
