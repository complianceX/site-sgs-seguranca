"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { transitions } from "@/lib/motion-variants";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * TextReveal Component
 * Cria uma animação de "revelação por máscara" palavra por palavra.
 * Muito utilizado em títulos de landing pages premium.
 */
export function TextReveal({ 
  children, 
  className, 
  delay = 0,
  once = true 
}: TextRevealProps) {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: delay 
      },
    }),
  };

  const child = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: transitions.expo,
      },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.2em]">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
