"use client";

import type { LucideIcon } from "lucide-react";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

type PainItem = {
  title: string;
  desc?: string;
};

type SoftwarePainsSectionProps = {
  variant: "checklist" | "cards";
  items: PainItem[];
  title: string;
  sidebarText: string;
  sidebarIcon?: LucideIcon;
  painsIcon?: LucideIcon;
};

export function SoftwarePainsSection({
  variant,
  items,
  title,
  sidebarText,
  sidebarIcon: SidebarIcon,
  painsIcon: PainsIcon,
}: SoftwarePainsSectionProps) {
  if (variant === "cards") {
    const IconComponent = PainsIcon ?? ShieldAlert;
    return (
      <FadeIn direction="up">
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black text-sgs-navy mb-8 tracking-tight">{title}</h2>
            <div className="space-y-8">
              {items.map((p, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <IconComponent className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-sgs-navy mb-2">{p.title}</h3>
                    {p.desc && <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center p-12 text-center">
            {SidebarIcon && <SidebarIcon className="w-12 h-12 text-primary/30 mb-6 mx-auto" />}
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed">{sidebarText}</p>
          </div>
        </div>
      </section>
      </FadeIn>
    );
  }

  return (
    <section className="mb-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <FadeIn direction="up">
            <h2 className="text-4xl font-black text-sgs-navy mb-8 tracking-tight">{title}</h2>
          </FadeIn>
          <div className="space-y-4">
            {items.map((p) => (
              <div key={p.title} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-sgs-green shrink-0" />
                <span className="text-base font-bold text-sgs-navy">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-video bg-slate-50 rounded-[3rem] border border-slate-200 flex items-center justify-center p-12 text-center">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed">{sidebarText}</p>
        </div>
      </div>
    </section>
  );
}
