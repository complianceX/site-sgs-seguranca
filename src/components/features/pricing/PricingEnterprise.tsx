"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { MotionButton } from "@/components/animations/MotionButton";
import { getSpecialistHref } from "@/lib/contact-links";

export function PricingEnterprise() {
  const specialistHref = getSpecialistHref();

  return (
    <FadeIn direction="up">
      <MotionCard className="mt-32 p-12 lg:p-20 border-none bg-slate-50 shadow-none rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
        <div className="relative z-10 max-w-3xl text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Mais de 500 colaboradores?</h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            Para grandes operações com múltiplos sites, demandas específicas de integração ou requisitos avançados de segurança, temos planos Enterprise com condições especiais.
          </p>
        </div>
        <div className="relative z-10 flex-shrink-0">
          <Link href={specialistHref}>
            <MotionButton variant="secondary" size="lg" className="group">
              Falar com especialista <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MotionButton>
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/10 transition-all duration-1000"></div>
      </MotionCard>
    </FadeIn>
  );
}
