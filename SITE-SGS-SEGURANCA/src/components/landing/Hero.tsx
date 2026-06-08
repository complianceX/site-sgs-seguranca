import { ShieldCheck, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { MeshGradient } from "@/components/animations/MeshGradient";
import { TextReveal } from "@/components/animations/TextReveal";
import { Typewriter } from "@/components/animations/Typewriter";
import { RippleButton } from "./RippleButton";
import { whatsappUrl } from "@/lib/landing-data";
import { TiltCard } from "@/components/animations/TiltCard";
import { Magnetic } from "@/components/animations/Magnetic";
import { DashboardVideoMockup } from "./DashboardVideoMockup";

export function Hero() {
  return (
    <section id="plataforma" className="relative min-h-screen overflow-hidden border-b border-sgs-border/60 bg-white sgs-grid-reveal">
      <ParticlesBackground />
      <MeshGradient />
      <div className="sgs-grid-bg absolute inset-0 opacity-20" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-12 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue animate-sgs-soft-in">
            <ShieldCheck className="h-3.5 w-3.5" />
            Gestão digital de SST
          </div>

          <TextReveal
            text="Gestão de SST que sua auditoria aprova."
            as="h1"
            type="chars-3d"
            className="max-w-2xl text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl"
            gradient
            stagger={25}
            delay={200}
          />

          <p className="mt-8 max-w-xl text-base leading-relaxed text-sgs-text-secondary md:text-[19px] animate-sgs-soft-in" style={{ animationDelay: '800ms' }}>
            <Typewriter
              texts={[
                "Controle APR, DDS, PT, ASO e treinamentos em um só lugar.",
                "Evidências digitais prontas para sua auditoria.",
                "Do campo ao relatório final com rastreabilidade total.",
              ]}
              speed={40}
              deleteSpeed={25}
              pauseDuration={3000}
            />
          </p>

          <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-sgs-border/50 animate-sgs-soft-in sgs-shine" style={{ animationDelay: '900ms' }} aria-hidden="true">
            <div className="h-full w-16 rounded-full bg-gradient-to-r from-sgs-blue via-sgs-green to-sgs-blue animate-sgs-line-scan" style={{ width: '60%' }} />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-sgs-soft-in" style={{ animationDelay: '1000ms' }}>
            <Magnetic strength={20}>
              <RippleButton
                onClick={() => document.getElementById("demo-trigger")?.click()}
                className="sgs-liquid-btn h-13 rounded-xl px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="mr-2 h-4 w-4 inline" />
                Agendar demonstração
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </RippleButton>
            </Magnetic>
            <Magnetic strength={20}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="sgs-liquid-btn-green inline-flex h-13 items-center justify-center gap-2 rounded-xl px-8 text-sm font-bold text-white shadow-lg shadow-sgs-whatsapp/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </Magnetic>
            <a href="#modulos">
              <Button
                variant="outline"
                className="h-12 rounded-md border-sgs-border-alt bg-white px-6 text-sm font-bold text-sgs-blue hover:bg-sgs-bg-hover"
              >
                Ver módulos
              </Button>
            </a>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-3">
            {[
              ["APR, DDS, PT", "Documentos nascem digitais, sem papel"],
              ["Evidência pronta", "Fotos e assinaturas presas ao documento"],
              ["Auditoria resolvida", "Histórico completo em um clique"],
            ].map(([title, desc], index) => (
              <div
                key={title}
                className="group border border-sgs-border bg-white/78 p-3 animate-sgs-scale-in transition-all duration-300 hover:-translate-y-1 hover:border-sgs-blue/20 hover:shadow-lg hover:shadow-sgs-blue/5"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-sgs-blue">{title}</p>
                <p className="mt-1 text-xs font-bold text-sgs-slate">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <TiltCard 
          maxTilt={5} 
          scale={1.01} 
          className="group animate-sgs-dashboard border border-sgs-border bg-[#f7fafd] p-2 md:p-3 sgs-hover-glow cursor-grab active:cursor-grabbing focus-within:ring-2 focus-within:ring-sgs-blue/50 outline-none" 
          style={{ animationDelay: '400ms' }}
          role="region"
          aria-label="Visualização interativa do Painel de Controle SST"
        >
          <DashboardVideoMockup />
        </TiltCard>
      </div>
    </section>
  );
}
