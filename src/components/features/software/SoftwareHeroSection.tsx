"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { MotionText } from "@/components/animations/MotionText";
import { MotionButton } from "@/components/animations/MotionButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
type SoftwareHeroSectionProps = {
  breadcrumbs?: { name: string; href: string }[];
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  subtitle: string;
  scheduleHref: string;
  trackLabel: string;
};

export function SoftwareHeroSection({
  breadcrumbs,
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  scheduleHref,
  trackLabel,
}: SoftwareHeroSectionProps) {
  if (breadcrumbs) {
    return (
      <header className="mx-auto mb-24 max-w-4xl">
        <Breadcrumbs items={breadcrumbs} />
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
          <BadgeIcon className="w-4 h-4" />
          {badgeText}
        </div>
        <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-8 tracking-tighter leading-[1.05] text-balance">
          {title}
        </MotionText>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty mb-10">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-6">
          <TrackedLink href={scheduleHref} trackLabel={trackLabel}>
            <MotionButton size="lg" className="gap-3">
              Solicitar Demonstração <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MotionButton>
          </TrackedLink>
          <Link href="/modulos">
            <MotionButton variant="outline" size="lg">Conhecer o SGS</MotionButton>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <FadeIn direction="none" stagger>
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
          <BadgeIcon className="w-4 h-4" />
          {badgeText}
        </div>
        <MotionText as="h1" className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
          {title}
        </MotionText>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl mx-auto mb-12">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/contato">
            <MotionButton size="lg" className="gap-3">
              Solicitar Demonstração <ArrowRight className="w-5 h-5" />
            </MotionButton>
          </Link>
          <Link href="/modulos">
            <MotionButton variant="outline" size="lg">Ver Módulos</MotionButton>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
