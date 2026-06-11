"use client";

import { Star, Quote } from "lucide-react";
import { MotionText } from "@/components/animations/MotionText";
import { MotionCard } from "@/components/animations/MotionCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/data/home";

const avatarColors = [
  "bg-gradient-to-br from-primary to-blue-600",
  "bg-gradient-to-br from-sgs-orange to-orange-600",
  "bg-gradient-to-br from-sgs-green to-emerald-600",
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="container relative z-10">
        <FadeIn className="text-center mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-orange/5 text-sgs-orange rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
            <Quote className="w-4 h-4" />
            Depoimentos Reais
          </div>
          <MotionText as="h2" className="text-4xl lg:text-5xl font-black mb-6 text-sgs-navy tracking-tight">
            Quem usa o SGS recomenda
          </MotionText>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-slate-500">
            Veja o que profissionais de SST e gestores relatam depois de organizar a rotina com o SGS.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <MotionCard key={i} delay={i * 0.1} className="flex flex-col h-full group">
              <div className="flex gap-1.5 mb-6 text-sgs-orange">
                {[...Array(t.stars)].map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-500"
                    style={{ transitionDelay: `${s * 100}ms` }}
                  />
                ))}
              </div>
              <p className="text-slate-600 font-medium mb-10 text-lg leading-relaxed flex-grow italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-white text-lg shadow-lg ${avatarColors[i]}`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-black text-sgs-navy">{t.name}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                  <p className="text-[11px] font-bold text-primary">{t.company}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
