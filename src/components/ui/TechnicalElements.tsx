"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle, Database, Activity, Lock } from "lucide-react";
import { transitions, variants } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion-hooks";
/**
 * TechnicalFormationWrapper
 * Encapsula a animação de formação técnica para uso em Server Components.
 */
export function TechnicalFormationWrapper({ 
  children, 
  custom = 0 
}: { 
  children: React.ReactNode; 
  custom?: number 
}) {
  return (
    <motion.div
      variants={variants.technicalFormation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      className="flex justify-center group"
    >
      {children}
    </motion.div>
  );
}

/**
 * TechnicalElements Component
...
 * Composição visual de fundo que simula um painel operacional inteligente.
 */
export function TechnicalElements() {
  const shouldReduceMotion = useReducedMotion();
  const dataPackets = [
    { top: "26%", right: "30%", delay: 0 },
    { top: "58%", right: "18%", delay: 1.8 },
    { top: "72%", right: "40%", delay: 3.2 },
  ];

  return (
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block select-none">
      {/* Grid de Auditoria Sutil */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Linhas de Fluxo de Dados (SVG) */}
      <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] text-primary">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M100,200 Q250,150 400,300 T700,250"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          variants={variants.technicalFormation}
          initial="hidden"
          animate="visible"
          custom={1}
        />
        
        <motion.path
          d="M50,450 Q300,500 500,400 T800,550"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          variants={variants.technicalFormation}
          initial="hidden"
          animate="visible"
          custom={2}
        />

        {/* Nós Pulsantes - Desativado em Reduced Motion */}
        {!shouldReduceMotion && (
          <>
            <motion.circle cx="400" cy="300" r="4" fill="currentColor" variants={variants.pulseStatus} animate="animate" />
            <motion.circle cx="300" cy="485" r="3" fill="currentColor" variants={variants.pulseStatus} animate="animate" />
          </>
        )}
      </svg>

      {/* Floating Operational Cards */}
      <motion.div 
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: transitions.expo }}
        className="absolute top-[15%] right-[8%] p-5 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[2rem] shadow-2xl flex items-center gap-4"
      >
        <div className="w-10 h-10 bg-sgs-green/10 rounded-xl flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-sgs-green" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-sgs-navy uppercase tracking-widest">Compliance Engine</span>
            {!shouldReduceMotion && <motion.div variants={variants.pulseStatus} animate="animate" className="w-1.5 h-1.5 bg-sgs-green rounded-full" />}
          </div>
          <span className="text-[9px] text-slate-500 font-bold">AUDIT READY · 256-BIT ENCRYPTION</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 60, y: shouldReduceMotion ? 0 : 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.4, duration: 1.2, ease: transitions.expo }}
        className="absolute top-[42%] right-[4%] p-5 bg-sgs-navy/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex items-center gap-4 text-white"
      >
        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest">Immutable Registry</span>
            {!shouldReduceMotion && <Activity className="w-3 h-3 text-primary animate-pulse" />}
          </div>
          <span className="text-[9px] text-white/40 font-bold uppercase tracking-tight">Block-level Integrity Verified</span>
        </div>
      </motion.div>

      {/* Scanning Effect - Desativado em Reduced Motion */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          animate={{ 
            x: ['-100vw', '100vw'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      )}

      {!shouldReduceMotion && dataPackets.map((packet) => (
        <motion.div
          key={`${packet.top}-${packet.right}`}
          className="absolute h-2 w-12 rounded-full bg-primary/20"
          style={{ top: packet.top, right: packet.right }}
          animate={{
            x: [0, -120, -240],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4.8,
            delay: packet.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
