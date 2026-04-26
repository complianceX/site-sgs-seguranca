"use client";

import { cn } from "@/lib/utils";
import { MotionText } from "@/components/ui/MotionText";
import { MotionCard } from "@/components/ui/MotionCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { valueProps } from "@/content/home";

export function ValuePropositionSection() {
  return (
    <section className="container">
      <FadeIn className="text-center max-w-3xl mx-auto mb-24">
        <MotionText as="h2" className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight text-balance">
          {valueProps.title}
        </MotionText>
        <p className="text-slate-500 text-xl font-medium leading-relaxed">
          {valueProps.description}
        </p>
      </FadeIn>
      
      <div className="grid md:grid-cols-3 gap-12">
        {valueProps.items.map((item, i) => (
          <MotionCard key={i} delay={i * 0.1}>
            <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700", 
              item.color === "primary" ? "bg-primary/5" : 
              item.color === "sgs-orange" ? "bg-sgs-orange/5" : "bg-sgs-green/5"
            )}>
              <item.icon className={cn("w-10 h-10", 
                item.color === "primary" ? "text-primary" : 
                item.color === "sgs-orange" ? "text-sgs-orange" : "text-sgs-green"
              )} />
            </div>
            <h3 className="text-2xl font-black mb-6 text-sgs-navy tracking-tight">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{item.text}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
