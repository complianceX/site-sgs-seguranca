import { MotionText } from "@/components/ui/MotionText";
import { MotionCard } from "@/components/ui/MotionCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { Parallax } from "@/components/ui/Parallax";
import { Camera, ArrowRight } from "lucide-react";

import { servedSegments, implementationSteps } from "@/content/home";

// Seções Estáticas ou já isoladas
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { ProductProofSection } from "@/components/sections/ProductProofSection";
import { ConversionBenefitsSection } from "@/components/sections/ConversionBenefitsSection";
import { OperationalFlowSection } from "@/components/sections/OperationalFlowSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

// Novo Componente Cliente Isolado
import { ROICalculator } from "@/components/sections/ROICalculator";

// Componente Wrapper para animação no Server Component
import { TechnicalFormationWrapper } from "@/components/ui/TechnicalElements";

const fieldPhotos = [
  { category: "Operação", title: "DDS em Campo", desc: "Registro fotográfico vinculado ao DDS do dia." },
  { category: "Conformidade", title: "Inspeção de EPI", desc: "Evidência visual de integridade dos equipamentos." },
  { category: "Segurança", title: "APR Digital", desc: "Análise de risco preenchida e assinada via tablet." },
  { category: "Auditoria", title: "Trilha de Fotos", desc: "Histórico visual para resposta rápida a fiscalizações." },
];

/**
 * HomePage - Server Component
 * Vantagens:
 * 1. SEO superior (Conteúdo renderizado no servidor)
 * 2. Menor Bundle JS (Lógica de estado movida para sub-componentes)
 * 3. Hidratação mais rápida
 */
export function HomePage() {
  const ImplementationTagIcon = implementationSteps.steps[3].icon;

  return (
    <div className="flex flex-col gap-24 lg:gap-40 pb-24 overflow-hidden bg-white">
      <HeroSection />

      <ProductProofSection />

      {/* Client Logos Section */}
      <section className="container">
        <div className="flex flex-col items-center">
          <FadeIn direction="up">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-16 relative">
              <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
              Setores onde o SGS gera valor
              <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 w-full">
            {servedSegments.map((segment, i) => (
              <StaggerItem key={i} className="flex justify-center group cursor-crosshair">
                <div className="h-12 w-full max-w-[140px] bg-slate-50 rounded-2xl flex items-center justify-center font-black text-[11px] text-slate-400 border border-slate-100 uppercase tracking-tighter group-hover:border-primary/20 group-hover:bg-white group-hover:shadow-sgs transition-all duration-500">
                  {segment.name}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ValuePropositionSection />

      {/* Field Action Gallery - Merged from remote */}
      <section className="container">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sgs-orange/10 text-sgs-orange rounded-full text-[10px] font-black mb-8 tracking-[0.2em] uppercase">
              <Camera className="w-3.5 h-3.5" />
              SGS EM CAMPO
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">Operação Real, <span className="text-sgs-orange">Resultados</span> Reais</h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">Veja como o SGS é utilizado no dia a dia por quem faz a segurança acontecer de verdade.</p>
          </div>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {fieldPhotos.map((photo, i) => (
            <StaggerItem key={i}>
              <Parallax offset={i % 2 === 0 ? 20 : -20}>
                <div className="group relative aspect-[3/4] bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                    <Camera className="w-12 h-12 text-slate-200 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sgs-navy via-sgs-navy/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700"></div>
                  <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">{photo.category}</p>
                    <h4 className="text-2xl font-black text-white mb-3 leading-tight">{photo.title}</h4>
                    <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 leading-relaxed">
                      {photo.desc}
                    </p>
                  </div>
                </div>
              </Parallax>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <ConversionBenefitsSection />

      <OperationalFlowSection />

      {/* How it Works Section */}
      <section className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
            <ImplementationTagIcon className="w-4 h-4" />
            {implementationSteps.tag}
          </div>
          <MotionText as="h2" className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">
            {implementationSteps.title}
          </MotionText>
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative">
          {implementationSteps.steps.map((item, i) => (
            <MotionCard key={i} delay={i * 0.1} className="text-center lg:text-left">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0 hover:scale-110 hover:rotate-3 transition-all duration-700 shadow-sm border border-slate-100">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{item.step}</div>
              <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* ROI Calculator - Isolate Client Interaction */}
      <ROICalculator />

      <FAQSection />

      <FinalCTASection />
    </div>
  );
}
