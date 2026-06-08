import { SplitFlapCounter } from "@/components/animations/SplitFlapCounter";
import { MeshGradient } from "@/components/animations/MeshGradient";

export function StatsSection() {
  return (
    <section className="relative border-y border-sgs-border/50 bg-white py-20 md:py-24 overflow-hidden">
      <MeshGradient />
      <div className="sgs-grid-bg absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 sgs-reveal sgs-stagger">
          {[
            { label: "Colaboradores gerenciados", value: 5000, suffix: "+" },
            { label: "Documentos digitais emitidos", value: 50000, suffix: "+" },
            { label: "Empresas atendidas", value: 120, suffix: "+" },
            { label: "Disponibilidade", value: 99.9, suffix: "%", decimals: 1 },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-4xl font-black text-sgs-blue md:text-5xl lg:text-6xl">
                <SplitFlapCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  digitCount={String(stat.value).length}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </p>
              <p className="mt-3 text-sm font-bold text-sgs-slate transition-colors duration-300 group-hover:text-sgs-blue">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
