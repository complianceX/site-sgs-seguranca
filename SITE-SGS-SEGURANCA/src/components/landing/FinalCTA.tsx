import { TextReveal } from "@/components/animations/TextReveal";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { MeshGradient } from "@/components/animations/MeshGradient";
import { DemoForm } from "@/components/DemoForm";

export function FinalCTA() {
  return (
    <section className="relative border-y border-sgs-border/50 bg-white py-20 md:py-28 overflow-hidden">
      <ParticlesBackground />
      <MeshGradient />
      <div className="sgs-grid-bg absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 sm:px-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <TextReveal
            text="Veja o SGS no seu cenário."
            as="h2"
            type="chars-3d"
            className="text-4xl font-extrabold tracking-tight text-sgs-night md:text-5xl"
            gradient
            stagger={30}
          />
          <p className="mt-6 text-lg leading-relaxed text-sgs-slate">
            A demonstração parte da sua rotina real: quais documentos você emite, quantos colaboradores precisa gerenciar e onde precisa de mais controle.
          </p>
        </div>
        <div className="shrink-0">
          <DemoForm
            triggerLabel="Falar com o SGS"
            showArrow
            triggerClassName="sgs-liquid-btn h-14 rounded-xl px-8 text-base font-bold text-white shadow-xl shadow-sgs-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          />
        </div>
      </div>
    </section>
  );
}
