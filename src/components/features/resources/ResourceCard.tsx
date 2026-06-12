"use client";

import { ArrowRight, FileText, Shield, Layout, FileCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import type { ResourceFile } from "@/lib/resource-files";

const resourceIconMap: Record<string, typeof FileText> = {
  Shield, FileText, Layout, FileCheck,
};

function ResourceIcon({ name }: { name: string }) {
  const Icon = resourceIconMap[name] || FileText;
  return <Icon className="w-8 h-8" />;
}

type ResourceCardProps = {
  resource: ResourceFile;
  index: number;
  onSelect: (resource: ResourceFile) => void;
};

export function ResourceCard({ resource, index, onSelect }: ResourceCardProps) {
  return (
    <FadeIn direction="up" delay={index * 0.1}>
      <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 lg:p-12 shadow-sgs hover:shadow-premium transition-all duration-700 h-full flex flex-col group">
        <div className="flex items-center justify-between mb-10">
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm",
            resource.color === "primary" ? "bg-primary/5" :
            resource.color === "sgs-orange" ? "bg-sgs-orange/5" : "bg-sgs-green/5"
          )}>
            <ResourceIcon name={resource.icon} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-4 py-1.5 rounded-full">
            {resource.type}
          </span>
        </div>
        <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight">{resource.title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-lg">
          {resource.desc}
        </p>
        <button
          onClick={() => onSelect(resource)}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-50 text-sgs-navy rounded-2xl font-black text-sm hover:bg-primary hover:text-white transition-all shadow-sm group/btn"
        >
          Download Grátis <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </FadeIn>
  );
}
