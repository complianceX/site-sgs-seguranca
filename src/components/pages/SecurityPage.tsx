"use client";

import { TechnicalElements } from "@/components/ui/TechnicalElements";
import { SecurityHero, SecurityGrid, SecurityLGPD, SecurityMonitoring } from "@/components/features/security";

export function SecurityPage() {
  return (
    <div className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="opacity-30"><TechnicalElements /></div>
      <div className="container relative z-10">
        <SecurityHero />
        <SecurityGrid />
        <SecurityLGPD />
        <SecurityMonitoring />
      </div>
    </div>
  );
}
