"use client";

import { FadeIn } from "@/components/animations/FadeIn";

const rows = [
  ["Trabalhadores", "Até 25", "Até 100", "Até 500"],
  ["Unidades (sites)", "1", "Até 3", "Até 10"],
  ["Módulos APR, DDS, PT", "Sim", "Sim", "Sim"],
  ["IA Sophie", "—", "Assistiva", "Avançada"],
  ["Integrações API", "—", "—", "Sim"],
  ["Storage", "1GB", "5GB", "20GB"],
  ["Suporte", "E-mail", "Prioritário", "Dedicado"],
];

export function PricingTable() {
  return (
    <FadeIn direction="up">
      <div className="mt-24 overflow-x-auto rounded-[2rem] border border-slate-100">
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Comparativo de planos SGS</caption>
          <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <tr>
              <th className="px-6 py-4">Recurso</th>
              <th className="px-6 py-4">Básico</th>
              <th className="px-6 py-4">Operacional</th>
              <th className="px-6 py-4">Profissional</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row[0]}>
                <th className="px-6 py-4 font-black text-sgs-navy">{row[0]}</th>
                {row.slice(1).map((cell, i) => (
                  <td key={i} className="px-6 py-4 font-medium text-slate-500">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
