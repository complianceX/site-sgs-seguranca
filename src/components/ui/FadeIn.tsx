"use client";

import { motion } from "framer-motion";
import { transitions } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion-hooks";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  className?: string;
  stagger?: boolean;
}

/**
 * FadeIn Component
 * Responsável pela revelação elegante das seções durante o scroll.
 * Respeita a preferência de movimento reduzido do usuário.
 */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className,
  stagger = false
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: shouldReduceMotion ? 0 : 40 },
    down: { y: shouldReduceMotion ? 0 : -40 },
    left: { x: shouldReduceMotion ? 0 : 40 },
    right: { x: shouldReduceMotion ? 0 : -40 },
    none: { x: 0, y: 0 }
  };

  const container = {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: shouldReduceMotion ? 0.3 : transitions.duration.slow,
        ease: transitions.expo,
        staggerChildren: stagger ? 0.1 : 0,
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}
