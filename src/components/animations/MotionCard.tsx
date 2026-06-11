"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { variants, transitions } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-motion";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * MotionCard Component
 * Card premium com "Borda Viva", Glow Tracking que segue o cursor e profundidade dinâmica.
 */
export function MotionCard({ 
  children, 
  className, 
  delay = 0 
}: MotionCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!cardRef.current || shouldReduceMotion) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const glowOpacity = useSpring(useTransform(mouseX, [0, 100], [0, 1]), { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
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

      {/* Glow Tracking Effect */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(2, 132, 199, 0.08), transparent 40%)`
            ),
          }}
        />
      )}

      {/* Premium Shimmer/Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}
