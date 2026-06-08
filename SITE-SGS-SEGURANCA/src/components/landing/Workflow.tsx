import { TextReveal } from "@/components/animations/TextReveal";

export function Workflow() {
  const steps = [
    ["01", "Campo registra", "APR, DDS ou PT nasce na frente de serviço, direto do celular."],
    ["02", "Responsável valida", "Gestor acompanha pendências e aprovações em tempo real."],
    ["03", "Evidência fica presa", "Fotos e assinaturas seguem o documento. Nada se perde."],
    ["04", "Auditoria encontra", "Histórico completo e PDF final disponíveis em segundos."],
  ];

  return (
    <section className="bg-sgs-bg pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-3xl border border-sgs-border bg-white p-8 md:p-12 shadow-sm">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
                Fluxo operacional
              </p>
              <TextReveal
                text="Do registro em campo à evidência pronta."
                as="h2"
                className="text-3xl font-black tracking-tight text-sgs-night md:text-4xl"
                stagger={40}
              />
            </div>
          </div>

          <div className="relative grid gap-6 md:grid-cols-4 sgs-reveal sgs-stagger">
            {/* Linha de conexão animada */}
            <div className="absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-sgs-border/60 hidden md:block" aria-hidden="true">
              <div className="h-full bg-gradient-to-r from-sgs-blue via-sgs-green to-sgs-blue animate-sgs-line-scan w-[150px] rounded-full" />
            </div>

            {steps.map(([number, title, desc], index) => (
              <div
                key={title}
                className="group relative z-10 rounded-2xl border border-sgs-border/60 bg-sgs-bg/50 p-6 transition-all duration-300 hover:border-sgs-blue/20 hover:bg-white hover:shadow-xl hover:shadow-sgs-blue/5"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-black text-sgs-blue/20">{number}</span>
                  <span className="relative h-2 w-2 rounded-full bg-sgs-green">
                    <span className="absolute inset-0 rounded-full bg-sgs-green animate-sgs-ping" />
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-sgs-night">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sgs-slate">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
