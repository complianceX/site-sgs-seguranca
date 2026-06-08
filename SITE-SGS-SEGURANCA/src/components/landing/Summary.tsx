import { ShieldCheck } from "lucide-react";

export function Summary() {
  const items = [
    ["Registro digital", "APR, DDS e PT nascem digitais, com responsáveis e status claros. Sem papel, sem retrabalho."],
    ["Evidência comprovada", "Fotos, assinaturas e histórico ficam presos ao documento correto. Pronto para auditoria."],
    ["Gestão com dados", "Pendências e indicadores aparecem antes de virar problema. Decisão baseada em fato."],
  ];

  return (
    <section className="bg-sgs-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-3">
        {items.map(([title, desc], index) => (
          <div
            key={title}
            className={`group relative overflow-hidden rounded-2xl border border-sgs-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sgs-blue/20 hover:shadow-2xl hover:shadow-sgs-blue/5 sgs-reveal sgs-card-float`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sgs-blue to-sgs-green origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sgs-blue/5 text-sgs-blue">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <p className="text-xl font-extrabold text-sgs-night">{title}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-sgs-slate">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
