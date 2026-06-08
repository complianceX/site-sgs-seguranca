import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqItems } from "@/lib/landing-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-sgs-bg py-24 md:py-32 border-t border-sgs-border/50 dark:bg-[color:var(--background)] dark:border-white/10">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-sgs-blue dark:text-blue-300">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl font-black tracking-tight text-sgs-night md:text-4xl dark:text-white">
            Dúvidas comuns sobre o SGS
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-sgs-border bg-white transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-sm font-extrabold text-sgs-night dark:text-white">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-sgs-slate transition-transform dark:text-sgs-slate-light ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`sgs-faq-content ${isOpen ? "sgs-faq-open" : ""}`}>
                  <div>
                    <div className="border-t border-sgs-border/50 px-6 py-5 dark:border-white/10">
                      <p className="text-sm leading-relaxed text-sgs-slate dark:text-sgs-slate-light">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-sgs-blue transition-colors hover:text-sgs-blue-dark dark:text-blue-300 dark:hover:text-white"
          >
            Ver todas as perguntas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

