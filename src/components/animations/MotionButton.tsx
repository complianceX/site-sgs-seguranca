"use client";

import { motion } from "framer-motion";
import { variants, transitions } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MotionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

/**
 * MotionButton Component
 * Botão premium com efeito de "Shimmer" (Brilho Interno) e resposta tátil digital.
 */
export function MotionButton({ 
  children, 
  onClick, 
  className,
  variant = "primary",
  size = "md",
  ariaLabel,
}: MotionButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-black transition-all rounded-full focus:outline-none overflow-hidden group tracking-[0.1em] uppercase";
  
  const variantsStyles = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30",
    secondary: "bg-sgs-navy text-white shadow-lg shadow-sgs-navy/20 hover:shadow-sgs-navy/30",
    outline: "bg-white/40 backdrop-blur-md border border-slate-200 text-sgs-navy hover:border-primary/30 hover:bg-white/60",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-50",
  };

  const sizeStyles = {
    sm: "px-6 py-3 text-[10px]",
    md: "px-10 py-4 text-xs",
    lg: "px-8 md:px-12 py-5 md:py-6 text-[13px] md:text-sm",
  };

  return (
    <motion.button
      variants={variants.buttonPremium}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(baseStyles, variantsStyles[variant], sizeStyles[size], className)}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-150%" }}
        whileHover={{ 
          x: "250%",
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      />

      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </motion.button>
  );
}
