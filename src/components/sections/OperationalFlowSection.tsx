"use client";

import { motion } from "framer-motion";
import { Camera, FileCheck2, QrCode, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { transitions } from "@/lib/motion-variants";
import { useReducedMotion } from "@/hooks/use-motion";

const flowSteps = [
  {
    icon: Camera,
    label: "Campo",
    title: "Evidência capturada",
    text: "Fotos, vídeos, assinatura e contexto operacional ficam ligados ao registro correto.",
  },
  {
    icon: FileCheck2,
    label: "Documento",
    title: "Versão governada",
    text: "APR, DDS, PT e checklists seguem fluxo de revisão, aprovação e histórico rastreável.",
  },
  {
    icon: QrCode,
    label: "Registry",
    title: "Validação externa",
    text: "Documentos oficiais podem ser conferidos por código, com exposição mínima de dados.",
  },
  {
    icon: ShieldCheck,
    label: "Auditoria",
    title: "Resposta defensável",
    text: "Gestores enxergam status, pendências e evidências com menos retrabalho manual.",
  },
];

export function OperationalFlowSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-sgs-navy py-28 text-white lg:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-primary/40"
            animate={{ x: ["5vw", "95vw"], opacity: [0, 0.65, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{ y: [-20, -120, -20], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="container relative z-10">
        <FadeIn className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
            Do campo ao documento oficial
          </div>
          <MotionText
            as="h2"
            className="mb-8 text-4xl font-black leading-tight tracking-tight text-white text-balance lg:text-6xl"
          >
            Um fluxo visual para provar o que aconteceu
          </MotionText>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-white/55">
            Transforme registros de campo em documentos auditáveis, com evidências, assinaturas, prazos e histórico no mesmo fluxo.
          </p>
        </FadeIn>

        <div className="relative grid gap-6 lg:grid-cols-4">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] top-16 hidden h-16 w-[84%] text-primary/40 lg:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 40 C180 0 320 80 500 40 S820 0 1000 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: transitions.expo }}
            />
          </svg>

          {flowSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: transitions.expo }}
              whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/10 backdrop-blur-sm"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 1.4, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  {step.label}
                </p>
                <h3 className="mb-5 text-2xl font-black tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/50">
                  {step.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
