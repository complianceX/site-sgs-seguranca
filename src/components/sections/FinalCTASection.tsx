"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MotionText } from "@/components/ui/MotionText";
import { MotionButton } from "@/components/ui/MotionButton";
import { finalCTA } from "@/content/home";

export function FinalCTASection() {
  return (
    <section className="container mb-24">
      <FadeIn>
        <div 
          className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <MotionText as="h2" className="text-4xl lg:text-7xl font-black mb-10 leading-tight tracking-tighter">
              {finalCTA.title}
            </MotionText>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href={finalCTA.ctaPrimary.href}>
                <MotionButton variant="outline" size="lg" className="bg-white text-primary border-none shadow-2xl group">
                  {finalCTA.ctaPrimary.text} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </MotionButton>
              </Link>
              <Link href={finalCTA.ctaSecondary.href}>
                <MotionButton variant="ghost" size="lg" className="text-white border border-white/20 bg-white/10 backdrop-blur-sm">
                  {finalCTA.ctaSecondary.text}
                </MotionButton>
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        </div>
      </FadeIn>
    </section>
  );
}
