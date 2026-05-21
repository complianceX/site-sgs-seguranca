import { caseStudies, trustFootnote, trustMetrics } from "@/data/social-proof";
import { servedSegments } from "@/data/home";

export function SocialProofSection() {
  return (
    <section className="container" aria-labelledby="social-proof-title">
      <div className="mb-16 text-center">
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
          Prova social e resultados
        </p>
        <h2 id="social-proof-title" className="text-4xl font-black tracking-tight text-sgs-navy lg:text-5xl text-balance">
          Operações que precisam de controle, não de mais planilhas
        </h2>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        {trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 text-center shadow-sgs"
          >
            <p className="text-4xl font-black text-primary">{metric.value}</p>
            <p className="mt-3 text-sm font-bold text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-16 grid gap-8 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.segment}
            className="flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sgs"
          >
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {item.segment}
            </p>
            <h3 className="mb-4 text-xl font-black text-sgs-navy">Desafio</h3>
            <p className="mb-6 text-sm font-medium leading-relaxed text-slate-500">{item.challenge}</p>
            <h3 className="mb-4 text-xl font-black text-sgs-navy">Com o SGS</h3>
            <p className="mb-6 flex-grow text-sm font-medium leading-relaxed text-slate-500">{item.result}</p>
            <p className="rounded-xl bg-primary/5 px-4 py-3 text-xs font-black uppercase tracking-widest text-primary">
              {item.metric}
            </p>
          </article>
        ))}
      </div>

      <div className="text-center">
        <p className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          Setores atendidos
        </p>
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {servedSegments.map((segment) => (
            <li
              key={segment.name}
              className="rounded-2xl border border-slate-100 bg-white px-4 py-5 text-center text-[11px] font-black uppercase tracking-tighter text-slate-500 shadow-sm"
              title={segment.label}
            >
              {segment.name}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-xs font-medium text-slate-400">{trustFootnote}</p>
      </div>
    </section>
  );
}
