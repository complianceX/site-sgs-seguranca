"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { TrackedLink } from "@/components/ui/TrackedLink";

type SoftwareCTASectionProps = {
  title: string;
  subtitle: string;
  scheduleHref: string;
  trackLabel: string;
};

export function SoftwareCTASection({ title, subtitle, scheduleHref, trackLabel }: SoftwareCTASectionProps) {
  return (
    <FadeIn direction="up">
      <section className="rounded-[3rem] bg-primary p-12 text-center text-white lg:p-20">
      <h2 className="mb-6 text-3xl font-black lg:text-5xl">{title}</h2>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <TrackedLink
          href={scheduleHref}
          trackLabel={trackLabel}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black text-primary shadow-xl"
        >
          Agendar demonstração <ArrowRight className="h-4 w-4" />
        </TrackedLink>
        <Link
          href="/modulos"
          className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-black text-white"
        >
          Ver todos os módulos
        </Link>
      </div>
    </section>
    </FadeIn>
  );
}
