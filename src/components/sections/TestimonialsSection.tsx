"use client";

import { Star } from "lucide-react";
import { MotionText } from "@/components/ui/MotionText";
import { MotionCard } from "@/components/ui/MotionCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="container relative z-10">
        <FadeIn className="text-center mb-24">
          <MotionText as="h2" className="text-4xl lg:text-5xl font-black mb-6 text-sgs-navy tracking-tight">
            Quem usa, confia
          </MotionText>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <MotionCard key={i} delay={i * 0.1} className="flex flex-col h-full group">
              <div className="flex gap-1.5 mb-8 text-sgs-orange">
                {[...Array(t.stars)].map((_, s) => (
                  <Star 
                    key={s} 
                    className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-500" 
                    style={{ transitionDelay: `${s * 100}ms` }} 
                  />
                ))}
              </div>
              <p className="text-slate-600 font-medium italic mb-10 text-lg leading-relaxed flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-black text-sgs-navy">{t.name}</p>
                  <p className="text-[11px] font-black text-primary uppercase tracking-widest">{t.role}</p>
                  <p className="text-[10px] font-bold text-slate-400">{t.company}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
