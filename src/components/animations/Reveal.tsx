"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function Reveal({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up",
  className 
}: RevealProps) {
  const directions = {
    up: { y: 75, x: 0 },
    down: { y: -75, x: 0 },
    left: { x: 75, y: 0 },
    right: { x: -75, y: 0 },
  };

  return (
    <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...directions[direction] },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8, 
          delay, 
          ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for premium feel
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6, 
          delay, 
          ease: "easeIn" 
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--primary, #0052FF)",
          zIndex: 20,
        }}
      />
    </div>
  );
}
