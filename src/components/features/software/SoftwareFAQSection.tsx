"use client";

import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";

type FAQItem = {
  q: string;
  a: string;
};

type SoftwareFAQSectionProps = {
  items: FAQItem[];
  title: string;
  subtitle?: string;
  variant: "card" | "accordion";
};

export function SoftwareFAQSection({ items, title, subtitle, variant }: SoftwareFAQSectionProps) {
  if (variant === "accordion") {
    return (
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-sgs-navy mb-6 tracking-tight">{title}</h2>
          {subtitle && <p className="text-lg text-slate-500 font-medium">{subtitle}</p>}
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((faq, i) => (
            <details key={i} className="group border border-slate-100 rounded-[2rem] p-8 bg-slate-50 open:bg-white transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-black text-sgs-navy tracking-tight pr-4">{faq.q}</h3>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <p className="mt-6 text-slate-500 font-medium leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-32">
      <FadeIn direction="up">
        <h2 className="text-3xl lg:text-5xl font-black text-sgs-navy mb-6 tracking-tight text-center">{title}</h2>
        {subtitle && <p className="text-lg text-slate-500 font-medium text-center max-w-2xl mx-auto mb-16">{subtitle}</p>}
      </FadeIn>
      <div className="max-w-3xl mx-auto space-y-6">
        {items.map((faq, i) => (
          <MotionCard key={i} delay={i * 0.05} className="!p-8">
            <h3 className="text-lg font-black text-sgs-navy mb-3 tracking-tight">{faq.q}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
