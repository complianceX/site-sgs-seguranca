"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ResourceCard, ResourceModal, ResourceBenefits } from "@/components/features/resources";
import { resourceFiles } from "@/lib/resource-files";

export function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<typeof resourceFiles[0] | null>(null);

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-orange/5 text-sgs-orange rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Download className="w-4 h-4" />
              Central de Recursos
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Ferramentas <span className="text-primary">Gratuitas</span> para sua Equipe
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              Baixe templates, guias e checklists de apoio para estruturar sua rotina de SST.
              Revise e adapte cada material com o responsável técnico da sua empresa.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {resourceFiles.map((res, i) => (
            <ResourceCard key={res.id} resource={res} index={i} onSelect={setSelectedResource} />
          ))}
        </div>

        <ResourceModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />

        <ResourceBenefits />
      </div>
    </div>
  );
}
