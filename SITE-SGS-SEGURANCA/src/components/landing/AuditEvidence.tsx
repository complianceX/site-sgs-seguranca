import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Camera, Pen, FileCheck2, CheckCircle2 } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const steps = [
  {
    icon: Camera,
    label: "Foto do EPI registrada",
    detail: "epi_capacete_20240315.jpg",
    delay: 0,
  },
  {
    icon: Pen,
    label: "Assinatura digital coletada",
    detail: "João Silva — Técnico de Segurança",
    delay: 600,
  },
  {
    icon: FileCheck2,
    label: "Documento vinculado",
    detail: "APR-2024-0312 • Obra Centro Sul",
    delay: 1200,
  },
  {
    icon: CheckCircle2,
    label: "Evidência selada",
    detail: "Pronta para auditoria ✓",
    delay: 1800,
  },
];

export function AuditEvidence() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const [started, setStarted] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    steps.forEach((step, i) => {
      timers.push(setTimeout(() => setActiveStep(i), step.delay + 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <section ref={sectionRef} className="bg-white border-y border-sgs-border/50 py-24 md:py-32 overflow-hidden dark:bg-[color:var(--card)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
            Evidência digital
          </p>
          <TextReveal
            text="Da foto à evidência selada em segundos."
            as="h2"
            className="text-3xl font-black tracking-tight text-sgs-night md:text-4xl dark:text-white"
            stagger={40}
          />
          <p className="mt-6 text-lg leading-relaxed text-sgs-slate dark:text-sgs-slate-light">
            Veja como o SGS transforma um registro de campo em uma evidência rastreável pronta para auditoria — de forma automática.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          {/* Steps Timeline */}
          <div className="relative space-y-0">
            {/* Vertical line */}
            <div className="absolute left-5 top-6 bottom-6 w-[2px] bg-sgs-border/60 dark:bg-white/10" aria-hidden="true">
              <div
                className="w-full bg-gradient-to-b from-sgs-blue to-sgs-green transition-all duration-1000 ease-out"
                style={{
                  height: activeStep >= 0 ? `${Math.min(((activeStep + 1) / steps.length) * 100, 100)}%` : "0%",
                }}
              />
            </div>

            {steps.map((step, i) => {
              const isActive = i <= activeStep;
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className={`relative flex items-start gap-4 py-4 transition-all duration-500 ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-30 translate-x-2"
                  }`}
                >
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 transition-all duration-500 ${
                      isActive
                        ? "border-sgs-blue bg-sgs-blue text-white shadow-lg shadow-sgs-blue/20 scale-110"
                        : "border-sgs-border bg-white text-sgs-slate dark:bg-white/5 dark:border-white/10"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="pt-1">
                    <p className={`text-sm font-bold transition-colors duration-300 ${
                      isActive ? "text-sgs-night dark:text-white" : "text-sgs-slate"
                    }`}>
                      {step.label}
                    </p>
                    <p className={`mt-1 text-xs font-mono transition-all duration-500 ${
                      isActive ? "text-sgs-blue dark:text-blue-300 opacity-100" : "text-sgs-slate-light opacity-0"
                    }`}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mockup Document Card */}
          <div className="relative">
            <div
              className={`rounded-2xl border border-sgs-border bg-sgs-bg p-6 md:p-8 transition-all duration-700 dark:bg-[color:var(--surface-alt)] dark:border-white/10 ${
                started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Document Header */}
              <div className="flex items-center justify-between border-b border-sgs-border/60 pb-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sgs-blue text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-sgs-night dark:text-white">APR-2024-0312</p>
                    <p className="text-[11px] text-sgs-slate">Obra Centro Sul • 15/03/2024</p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-all duration-500 ${
                    activeStep >= 3
                      ? "bg-sgs-green/10 text-sgs-green-dark dark:bg-green-500/10 dark:text-green-400"
                      : "bg-amber-50 text-amber-600 dark:bg-amber-500/10"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      activeStep >= 3 ? "bg-sgs-green sgs-pulse-dot" : "bg-amber-400"
                    }`}
                  />
                  {activeStep >= 3 ? "Selada" : "Em andamento"}
                </span>
              </div>

              {/* Foto placeholder */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div
                  className={`relative overflow-hidden rounded-xl border border-sgs-border bg-white transition-all duration-600 dark:bg-white/5 dark:border-white/10 ${
                    activeStep >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="flex h-28 items-center justify-center bg-gradient-to-br from-sgs-blue/5 to-sgs-green/5 dark:from-sgs-blue/10 dark:to-sgs-green/10">
                    <Camera className="h-8 w-8 text-sgs-blue/40" />
                  </div>
                  <p className="px-3 py-2 text-[11px] font-mono text-sgs-slate">epi_capacete.jpg</p>
                </div>
                <div
                  className={`relative overflow-hidden rounded-xl border border-sgs-border bg-white transition-all duration-600 dark:bg-white/5 dark:border-white/10 ${
                    activeStep >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="flex h-28 items-center justify-center bg-gradient-to-br from-sgs-blue/5 to-sgs-green/5 dark:from-sgs-blue/10 dark:to-sgs-green/10">
                    <svg className="h-16 w-32 text-sgs-night/20 dark:text-white/20" viewBox="0 0 200 60">
                      <path
                        d="M10 45 C30 20, 50 50, 80 25 C100 10, 120 40, 150 20 C170 10, 185 35, 195 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className={`transition-all duration-1000 ${
                          activeStep >= 1 ? "[stroke-dasharray:300] [stroke-dashoffset:0]" : "[stroke-dasharray:300] [stroke-dashoffset:300]"
                        }`}
                      />
                    </svg>
                  </div>
                  <p className="px-3 py-2 text-[11px] font-mono text-sgs-slate">Assinatura digital</p>
                </div>
              </div>

              {/* Metadata */}
              <div
                className={`mt-4 grid grid-cols-3 gap-2 transition-all duration-500 ${
                  activeStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                {[
                  ["Responsável", "João Silva"],
                  ["Cargo", "Técnico SST"],
                  ["Hash", "a3f8...c2d1"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-white border border-sgs-border/50 px-3 py-2 dark:bg-white/5 dark:border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sgs-slate-light">{label}</p>
                    <p className="mt-0.5 text-xs font-bold text-sgs-night dark:text-white">{value}</p>
                  </div>
                ))}
              </div>

              {/* Selo final */}
              <div
                className={`mt-5 flex items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all duration-600 ${
                  activeStep >= 3
                    ? "border-sgs-green/30 bg-sgs-green/5 opacity-100 scale-100 dark:border-green-500/20 dark:bg-green-500/5"
                    : "border-transparent bg-transparent opacity-0 scale-95"
                }`}
              >
                <CheckCircle2 className="h-5 w-5 text-sgs-green shrink-0" />
                <div>
                  <p className="text-sm font-bold text-sgs-green-dark dark:text-green-400">
                    Evidência íntegra e rastreável
                  </p>
                  <p className="text-xs text-sgs-slate">
                    Documento, foto e assinatura vinculados com timestamp e hash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
