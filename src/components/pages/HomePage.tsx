import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { ProductProofSection } from "@/components/sections/ProductProofSection";
import { ConversionBenefitsSection } from "@/components/sections/ConversionBenefitsSection";
import { OperationalFlowSection } from "@/components/sections/OperationalFlowSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FieldGallerySection } from "@/components/sections/FieldGallerySection";
import { MotionCard } from "@/components/ui/MotionCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { implementationSteps } from "@/data/home";

export function HomePage() {
  const ImplementationTagIcon = implementationSteps.steps[3].icon;

  return (
    <div className="flex flex-col gap-24 overflow-hidden bg-white pb-24 lg:gap-40">
      <HeroSection />
      <ProductProofSection />
      <SocialProofSection />
      <ValuePropositionSection />
      <FieldGallerySection />
      <ConversionBenefitsSection />
      <OperationalFlowSection />

      <section className="container">
        <FadeIn className="mx-auto mb-24 max-w-3xl text-center">
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-sgs-green/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-sgs-green">
            <ImplementationTagIcon className="h-4 w-4" aria-hidden="true" />
            {implementationSteps.tag}
          </div>
          <MotionText as="h2" className="mb-8 text-4xl font-black tracking-tight text-sgs-navy lg:text-6xl">
            {implementationSteps.title}
          </MotionText>
        </FadeIn>

        <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {implementationSteps.steps.map((item, i) => (
            <MotionCard key={item.step} delay={i * 0.1} className="text-center lg:text-left">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-700 hover:rotate-3 hover:scale-110 lg:mx-0">
                <item.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary">{item.step}</div>
              <h3 className="mb-4 text-xl font-black tracking-tight text-sgs-navy">{item.title}</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-500">{item.desc}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <ROICalculator />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
