"use client";

import { motion } from "framer-motion";
import { variants, transitions } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * MotionCard Component
 * Card premium com "Borda Viva" (Active Border) e profundidade baseada em inércia.
 */
export function MotionCard({ 
  children, 
  className, 
  delay = 0 
}: MotionCardProps) {
  return (
    <motion.div
      variants={variants.cardPremium}
      initial="rest"
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          delay,
          duration: transitions.duration.slow,
          ease: transitions.expo
        }
      }}
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-colors duration-500 overflow-hidden shadow-sgs",
        className
      )}
    >
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-noise pointer-events-none"></div>

      {/* Premium Shimmer/Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Background Accent (Efeito de Profundidade Sutil) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}
