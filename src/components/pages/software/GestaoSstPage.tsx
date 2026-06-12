"use client";

import { SoftwareHeroSection, SoftwareBenefitsSection, SoftwarePainsSection, SoftwareUseCasesSection, SoftwareFAQSection, SoftwareCTASection } from "@/components/features/software";
import { getSchedulingHref } from "@/lib/contact-links";
import { gestaoSstData } from "@/components/features/software/data/gestao-sst";

export function GestaoSstPage() {
  const d = gestaoSstData;
  const scheduleHref = getSchedulingHref();

  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <SoftwareHeroSection breadcrumbs={d.breadcrumbs} badgeIcon={d.badgeIcon} badgeText={d.badgeText} title={d.heroTitle} subtitle={d.heroSubtitle} scheduleHref={scheduleHref} trackLabel={d.trackLabel} />
        <SoftwareBenefitsSection items={d.benefits} title={d.benefitsTitle} subtitle={d.benefitsSubtitle} />
        <SoftwarePainsSection variant={d.painsVariant} items={d.pains} title={d.painsTitle} sidebarText={d.sidebarText} sidebarIcon={d.sidebarIcon} painsIcon={d.painsIcon} />
        <SoftwareUseCasesSection items={d.useCases} title={d.useCasesTitle} subtitle={d.useCasesSubtitle} columns={d.useCasesColumns} />
        <SoftwareFAQSection items={d.faqs} title={d.faqTitle} variant={d.faqVariant ?? "card"} />
        <SoftwareCTASection title={d.ctaTitle} subtitle={d.ctaSubtitle} scheduleHref={scheduleHref} trackLabel={d.trackLabel} />
      </div>
    </div>
  );
}
