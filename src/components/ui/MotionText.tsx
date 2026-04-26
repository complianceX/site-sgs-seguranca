"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion-hooks";
import { ReactNode } from "react";

interface MotionTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * MotionText Component
 * Implementa o efeito de "Mask Reveal" com fallback para acessibilidade.
 */
export function MotionText({ 
  children, 
  className, 
  delay = 0, 
  as: Component = "h1" 
}: MotionTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.05, 
        delayChildren: delay 
      },
    },
  };

  const simpleReveal = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: "inline-flex", flexWrap: "wrap" }}
      >
        {words.map((word, index) => (
          <span 
            key={index} 
            style={{ 
              overflow: shouldReduceMotion ? "visible" : "hidden", 
              display: "inline-block", 
              marginRight: "0.25em",
              paddingBottom: "0.1em"
            }}
          >
            <motion.span
              variants={shouldReduceMotion ? simpleReveal : variants.maskReveal}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
