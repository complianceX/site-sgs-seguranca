"use client";

import { motion } from "framer-motion";
import { variants, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MotionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
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
  size = "md"
}: MotionButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-black transition-all rounded-xl focus:outline-none overflow-hidden group";
  
  const variantsStyles = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20",
    secondary: "bg-sgs-navy text-white shadow-lg shadow-sgs-navy/20",
    outline: "bg-transparent border border-slate-200 text-sgs-navy hover:border-primary/30",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-50",
  };

  const sizeStyles = {
    sm: "px-6 py-3 text-xs",
    md: "px-10 py-4 text-sm",
    lg: "px-12 py-6 text-lg",
  };

  return (
    <motion.button
      variants={variants.buttonPremium}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
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

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
