import { FadeIn } from "@/components/animations/FadeIn";

const items = [
  { title: "Classificação de Risco", desc: "O sistema prioriza pendências com base no impacto operacional e normativo." },
  { title: "Ação Direta", desc: "Links diretos para nova versão, validação ou correção imediata do documento." },
  { title: "Notificação Inteligente", desc: "Alertas via sistema e e-mail para os responsáveis técnicos da unidade." },
  { title: "Visão Multi-site", desc: "Controle todas as suas unidades ou obras em uma única tela de governança." },
];

export function PendenciesCentral() {
  return (
    <div className="grid lg:grid-cols-3 gap-16 mb-24 items-center">
      <FadeIn direction="right" className="lg:col-span-1">
        <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight leading-tight">Central de Pendências</h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium">
          Não perca prazos. Nossa central agrega gargalos documentais e classifica criticidades
          automaticamente para que você saiba exatamente onde agir primeiro.
        </p>
      </FadeIn>

      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
        {items.map((p, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.1}>
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <h4 className="text-xl font-black text-sgs-navy mb-4 tracking-tight">{p.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
