import { MotionText } from "@/components/ui/MotionText";
import { MotionCard } from "@/components/ui/MotionCard";
import { FadeIn } from "@/components/ui/FadeIn";

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
        <FadeIn>
          <div className="flex flex-col items-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-16 relative">
              <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
              Setores onde o SGS gera valor
              <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 w-full">
              {servedSegments.map((segment, i) => (
                <TechnicalFormationWrapper key={i} custom={i}>
                  <div 
                    aria-label={segment.label} 
                    className="h-12 w-full max-w-[140px] bg-slate-50 rounded-2xl flex items-center justify-center font-black text-[11px] text-slate-400 border border-slate-100 uppercase tracking-tighter hover:border-primary/20 hover:bg-white hover:shadow-sgs transition-all duration-500 cursor-crosshair"
                  >
                    {segment.name}
                  </div>
                </TechnicalFormationWrapper>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <ValuePropositionSection />

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
