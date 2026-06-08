import { Star, Quote } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { testimonials } from "@/lib/landing-data";

export function Testimonials() {
  return (
    <section className="bg-sgs-bg py-24 md:py-32 overflow-hidden dark:bg-sgs-night">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
            Prova Social
          </p>
          <TextReveal
            text="Quem usa, confia."
            as="h2"
            className="text-3xl font-black tracking-tight text-sgs-night md:text-4xl dark:text-white"
            stagger={40}
          />
          <p className="mt-4 text-lg text-sgs-slate dark:text-sgs-slate-light">
            Veja o que dizem os profissionais que transformaram sua gestão de SST com o SGS.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 sgs-stagger">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-sgs-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <Quote className="absolute right-8 top-8 h-12 w-12 text-sgs-blue/5 dark:text-white/5" />
              
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mb-8 flex-grow text-base italic leading-relaxed text-sgs-night dark:text-sgs-slate-light">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-sgs-border pt-6 dark:border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sgs-blue/10 text-sm font-bold text-sgs-blue dark:bg-sgs-blue/20">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-sgs-night dark:text-white">{t.name}</p>
                  <p className="text-[11px] font-medium text-sgs-slate">{t.role}</p>
                  <p className="text-[10px] font-bold text-sgs-blue uppercase tracking-wider">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
