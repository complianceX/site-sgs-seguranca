import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";

const ParticlesBackground = lazy(() => import("@/components/animations/ParticlesBackground").then(m => ({ default: m.ParticlesBackground })));

import { Hero } from "@/components/landing/Hero";
import { Summary } from "@/components/landing/Summary";
import { Workflow } from "@/components/landing/Workflow";
import { AuditEvidence } from "@/components/landing/AuditEvidence";
import { TrustBar } from "@/components/landing/TrustBar";
import { Modules } from "@/components/landing/Modules";
import { Testimonials } from "@/components/landing/Testimonials";
import { StatsSection } from "@/components/landing/StatsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Governance } from "@/components/landing/Governance";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { MobileCTA } from "@/components/landing/MobileCTA";

export const Route = createFileRoute("/")({
  component: SGSLandingPage,
  head: () => ({
    meta: [
      { title: "SGS — Sistema de Gestão de Segurança do Trabalho | Plataforma SST" },
      {
        name: "description",
        content:
          "Centralize APR, DDS, PT, ASO, treinamentos e indicadores de SST em uma plataforma rastreável. Gestão digital de segurança do trabalho para sua empresa.",
      },
    ],
  }),
});

function SGSLandingPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <main className="pb-24 md:pb-0">
        <Hero />
        <Summary />
        <Workflow />
        <AuditEvidence />
        <TrustBar />
        <Modules />
        <Testimonials />
        <StatsSection />
        <FAQSection />
        <Governance />
        <FinalCTA />
      </main>
      <MobileCTA />
    </>
  );
}

