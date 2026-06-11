"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const logos = [
  { name: "Indústria", icon: "⚙️" },
  { name: "Construção", icon: "🏗️" },
  { name: "Mineração", icon: "⛏️" },
  { name: "Logística", icon: "🚛" },
  { name: "Energia", icon: "⚡" },
  { name: "Facilities", icon: "🏭" },
  { name: "Petróleo", icon: "🛢️" },
  { name: "Siderurgia", icon: "🔩" },
];

export function CustomerLogosSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-b border-slate-100">
      <div className="container">
        <FadeIn className="text-center mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
            Empresas que confiam no SGS
          </p>
        </FadeIn>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 items-center justify-center flex-wrap">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 group-hover:border-primary/20">
                  {logo.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sgs-navy transition-colors">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <FadeIn className="text-center mt-14">
          <p className="text-sm font-medium text-slate-400 max-w-2xl mx-auto">
          De indústrias a construtoras, o SGS é utilizado por equipes de SST que precisam de controle, evidências e governança documental.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
