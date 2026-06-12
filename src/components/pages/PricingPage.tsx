"use client";

import { PricingHero, PricingPlans, PricingEnterprise, PricingTable, PricingFAQ } from "@/components/features/pricing";

export function PricingPage() {
  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <PricingHero />
        <PricingPlans />
        <PricingEnterprise />
        <PricingTable />
        <PricingFAQ />
      </div>
    </div>
  );
}
