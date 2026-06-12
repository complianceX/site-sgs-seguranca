import { CheckCircle2, Zap } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const benefits = [
  { title: "Apoio Técnico", desc: "Materiais pensados para orientar rotinas de SST e acelerar a padronização interna." },
  { title: "Base Editável", desc: "Templates estruturados para adaptação e revisão pelo responsável técnico." },
  { title: "Pronto para Uso", desc: "Arquivos editáveis para você adaptar à realidade da sua empresa." },
];

export function ResourceBenefits() {
  return (
    <FadeIn direction="up">
      <div className="mt-32 p-12 lg:p-24 bg-sgs-navy text-white rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-sgs-navy/20">
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight leading-tight">Por que baixar nossos recursos?</h2>
            <div className="space-y-8">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-6 group/item">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover/item:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-square bg-white/5 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
              <Zap className="w-40 h-40 text-primary/30" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/10 transition-all duration-1000"></div>
      </div>
    </FadeIn>
  );
}
