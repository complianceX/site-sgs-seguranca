"use client";

import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";

type BenefitItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type SoftwareBenefitsSectionProps = {
  items: BenefitItem[];
  title: string;
  subtitle: string;
};

export function SoftwareBenefitsSection({ items, title, subtitle }: SoftwareBenefitsSectionProps) {
  return (
    <section className="mb-32">
      <FadeIn direction="up">
        <h2 className="text-3xl lg:text-5xl font-black text-sgs-navy mb-6 tracking-tight text-center">{title}</h2>
        <p className="text-lg text-slate-500 font-medium text-center max-w-2xl mx-auto mb-16">{subtitle}</p>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((b, i) => (
          <MotionCard key={i} delay={i * 0.05}>
            <b.icon className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{b.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{b.desc}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
