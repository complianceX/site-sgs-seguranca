import type { LucideIcon } from "lucide-react";

export type BenefitItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type PainItem = {
  title: string;
  desc?: string;
};

export type UseCaseItem = {
  icon?: LucideIcon;
  title: string;
  desc: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type SoftwarePageData = {
  breadcrumbs?: { name: string; href: string }[];
  badgeIcon: LucideIcon;
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: BenefitItem[];
  painsTitle: string;
  painsVariant: "checklist" | "cards";
  pains: PainItem[];
  painsIcon?: LucideIcon;
  sidebarText: string;
  sidebarIcon?: LucideIcon;
  useCasesColumns: 2 | 3;
  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: UseCaseItem[];
  faqTitle: string;
  faqSubtitle?: string;
  faqs: FAQItem[];
  faqVariant?: "card" | "accordion";
  ctaTitle: string;
  ctaSubtitle: string;
  trackLabel: string;
};
