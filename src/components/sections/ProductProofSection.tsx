"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, Clock3, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { MotionButton } from "@/components/ui/MotionButton";
import { productProof } from "@/data/home";
import { transitions } from "@/lib/motion-variants";
import { useReducedMotion } from "@/hooks/use-motion";
import { getSchedulingHref } from "@/lib/contact-links";

export function ProductProofSection() {
  const shouldReduceMotion = useReducedMotion();
  const schedulingHref = getSchedulingHref();

  return (
    <section className="container">
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn direction="right" className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <Activity className="h-4 w-4" />
            {productProof.tag}
          </div>
          <MotionText
            as="h2"
            className="mb-8 text-4xl font-black leading-tight tracking-tight text-sgs-navy text-balance lg:text-6xl"
          >
            {productProof.title}
          </MotionText>
          <p className="mb-10 text-lg font-medium leading-relaxed text-slate-500">
            {productProof.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={schedulingHref}>
              <MotionButton className="gap-3 group">
                Agendar demonstração <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </MotionButton>
            </Link>
            <Link href="/modulos">
              <MotionButton variant="outline">
                Ver módulos do SGS
              </MotionButton>
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: transitions.expo }}
            className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-sgs-navy p-5 shadow-2xl shadow-sgs-navy/20"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white p-5">
              <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Painel operacional</p>
                  <h3 className="mt-2 text-xl font-black tracking-tight text-sgs-navy">Documentos críticos de SST</h3>
                </div>
                <div className="hidden rounded-2xl bg-sgs-green/10 px-4 py-2 text-xs font-black text-sgs-green sm:block">
                  86% em dia
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {productProof.modules.map((item, index) => (
                  <motion.article
                    key={item.label}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-sgs-navy">{item.label}</h4>
                    <p className="mt-2 text-sm font-bold text-slate-400">{item.detail}</p>
                  </motion.article>
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
                <div className="rounded-2xl border border-slate-100 p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <p className="text-xs font-black uppercase tracking-widest text-sgs-navy">Trilha de auditoria</p>
                  </div>
                  <div className="space-y-4">
                    {productProof.timeline.map((item, index) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sgs-green/10">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sgs-green" />
                        </div>
                        <p className="text-sm font-bold text-slate-500">{item}</p>
                        <span className="ml-auto text-[10px] font-black text-slate-300">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-sgs-navy p-5 text-white">
                  <div className="mb-8 flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45">Próximas ações</p>
                    <Clock3 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-black">14</p>
                      <p className="text-xs font-bold text-white/45">pendências críticas</p>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "68%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: transitions.expo }}
                      />
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-white/55">
                      Priorização por vencimento, documento e frente de serviço.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
