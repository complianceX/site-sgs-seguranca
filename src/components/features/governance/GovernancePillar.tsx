import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import type { LucideIcon } from "lucide-react";

type GovernancePillarProps = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  items: string[];
  direction: "right" | "left";
};

export function GovernancePillar({ icon: Icon, iconColor, title, description, items, direction }: GovernancePillarProps) {
  return (
    <FadeIn direction={direction} delay={0.1}>
      <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
        <div className={`w-20 h-20 ${iconColor} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}>
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-black mb-6 text-sgs-navy tracking-tight">{title}</h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">{description}</p>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
              <div className="w-5 h-5 bg-sgs-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-sgs-green" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
