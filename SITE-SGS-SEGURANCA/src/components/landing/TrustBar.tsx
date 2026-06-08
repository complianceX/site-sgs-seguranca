import { Sparkles, Building2 } from "lucide-react";
import { Marquee } from "@/components/animations/Marquee";
import { trustLogos } from "@/lib/landing-data";

export function TrustBar() {
  const modules = [
    "APR Digital", "DDS Digital", "Permissão de Trabalho", "ASO Digital",
    "Treinamentos", "Ordem de Serviço", "Mobilização", "Assinaturas",
    "Dashboard SST", "Relatórios", "Gestão de Documentos", "Controle de Acesso",
  ];

  return (
    <section className="border-b border-sgs-border/50 bg-sgs-bg py-16 sgs-clip-reveal">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Logos das Empresas */}
        <div className="mb-16">
          <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-sgs-slate-light">
            Empresas que confiam no SGS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:grayscale-0">
            {trustLogos.map((logo) => (
              <div key={logo} className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-sgs-blue" />
                <span className="text-lg font-black tracking-tight text-sgs-night">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-sgs-border to-transparent opacity-50 mb-12" />

        {/* Módulos */}
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-widest text-sgs-slate-light">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-sgs-blue" />
            Módulos da plataforma
            <Sparkles className="h-3 w-3 text-sgs-blue" />
          </span>
        </p>
        <Marquee
          items={modules.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-3 rounded-full border border-sgs-border bg-white px-5 py-2.5 text-sm font-bold text-sgs-blue shadow-sm transition-all hover:border-sgs-blue/20 hover:shadow-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sgs-green sgs-pulse-dot" />
              {name}
            </span>
          ))}
          speed={40}
          className="[mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        />
      </div>
    </section>
  );
}
