"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionButton } from "@/components/ui/MotionButton";
import { faqs } from "@/content/home";

export function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="container">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <FadeIn direction="left">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Perguntas Frequentes</h2>
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h4 className="text-xl font-black text-sgs-navy mb-4">Ainda tem dúvidas?</h4>
              <Link href="/contato">
                <MotionButton variant="outline" className="gap-3 group w-full">
                  Abrir chat comercial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MotionButton>
              </Link>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-7 space-y-6">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div 
                className={cn(
                  "border rounded-[2rem] overflow-hidden transition-all duration-500",
                  activeFaq === i ? "border-primary/20 shadow-premium bg-white" : "border-slate-100 bg-white shadow-sgs hover:shadow-sgs-hover"
                )}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className={cn("text-lg font-black transition-colors duration-500", activeFaq === i ? "text-primary" : "text-sgs-navy")}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                    activeFaq === i ? "bg-primary text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-500 text-lg font-medium leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
