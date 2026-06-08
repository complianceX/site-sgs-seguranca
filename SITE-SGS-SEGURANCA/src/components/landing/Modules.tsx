import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { allModules } from "@/lib/landing-data";

export function Modules() {
  return (
    <section id="modulos" className="border-y border-sgs-border/50 bg-white py-24 md:py-32 dark:border-white/10 dark:bg-[color:var(--card)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-sgs-blue dark:text-blue-300">
            Módulos completos
          </p>
          <TextReveal
            text="Tudo o que sua SST precisa."
            as="h2"
            className="text-4xl font-black leading-tight tracking-tight text-sgs-night md:text-5xl dark:text-white"
            stagger={50}
          />
          <p className="mt-6 text-lg leading-relaxed text-sgs-slate dark:text-sgs-slate-light">
            Da APR ao relatório de auditoria, o SGS cobre cada etapa da gestão de segurança do trabalho em uma única plataforma. {allModules.length} módulos integrados.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sgs-reveal sgs-stagger">
          {allModules.map((mod) => (
            <TiltCard
              key={mod.title}
              maxTilt={4}
              scale={1.01}
              className="group relative flex flex-col rounded-2xl border border-sgs-border bg-white p-6 transition-all duration-300 hover:border-sgs-blue/20 hover:shadow-xl hover:shadow-sgs-blue/5 sgs-hover-glow sgs-card-gradient-border dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sgs-blue/5 text-sgs-blue transition-all duration-300 group-hover:bg-sgs-blue group-hover:text-white group-hover:shadow-lg group-hover:shadow-sgs-blue/20 sgs-shine dark:bg-white/10 dark:text-white">
                <mod.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-base font-extrabold text-sgs-night dark:text-white">{mod.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sgs-slate dark:text-sgs-slate-light">{mod.desc}</p>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/funcionalidades"
            className="inline-flex items-center gap-2 rounded-xl border border-sgs-blue px-6 py-3 text-sm font-bold text-sgs-blue transition-all hover:bg-sgs-bg-hover dark:border-blue-400 dark:text-blue-300 dark:hover:bg-white/5"
          >
            Ver todas as funcionalidades
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

