import { Brain, MessageSquare, ShieldCheck, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const capabilities = [
  {
    icon: Brain,
    title: "Rascunhos Assistidos",
    desc: "Geração automática de rascunhos para APR, PT, DDS e Checklists baseados no contexto da atividade.",
  },
  {
    icon: MessageSquare,
    title: "Insights Operacionais",
    desc: "Análises rápidas de pendências e sugestões de melhoria nos processos de segurança.",
  },
  {
    icon: ShieldCheck,
    title: "Análise de Imagem",
    desc: "Apoio na identificação visual de riscos e conformidade em fotos enviadas ao sistema.",
  },
  {
    icon: BarChart3,
    title: "Relatórios IA",
    desc: "Consolidação mensal assistida para criar visões executivas claras e objetivas.",
  },
];

export function SophieCapabilities() {
  return (
    <div className="mb-32">
      <FadeIn direction="up">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight leading-tight">
            O que a Sophie faz por você?
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Potencialize sua gestão com ferramentas inteligentes desenhadas para o dia a dia.
          </p>
        </div>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilities.map((cap, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.1}>
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                <cap.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{cap.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{cap.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
