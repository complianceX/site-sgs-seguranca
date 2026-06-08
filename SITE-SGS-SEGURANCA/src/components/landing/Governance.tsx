import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { privacyEmail } from "@/lib/landing-data";

export function Governance() {
  const controls = [
    "Dados separados por empresa (multi-tenancy)",
    "Acesso por perfil e função",
    "Histórico completo de ações e evidências",
    "Canal dedicado de privacidade LGPD",
    "Criptografia em trânsito e em repouso",
    "Backup automático e redundância",
  ];

  return (
    <section id="governanca" className="bg-sgs-bg py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
            Segurança e LGPD
          </p>
          <TextReveal
            text="Seus dados protegidos por padrão."
            as="h2"
            className="text-4xl font-black leading-tight tracking-tight text-sgs-night md:text-5xl"
            stagger={40}
          />
          <p className="mt-6 text-lg leading-relaxed text-sgs-slate">
            O SGS foi construído com segurança desde a primeira linha de código. Seus dados e os dados dos seus colaboradores estão protegidos com criptografia, controle de acesso granular e conformidade com a LGPD.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/seguranca"
              className="inline-flex items-center gap-2 rounded-xl bg-sgs-blue px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${privacyEmail}`}
              className="inline-flex items-center gap-3 text-sm font-bold text-sgs-blue transition-colors hover:text-sgs-blue-dark"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sgs-blue/5">
                <Mail className="h-4 w-4" />
              </div>
              {privacyEmail}
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sgs-reveal sgs-stagger">
          {controls.map((control) => (
            <div
              key={control}
              className="group flex items-center gap-4 rounded-2xl border border-sgs-border bg-white p-6 transition-all duration-300 hover:border-sgs-green/20 hover:shadow-xl hover:shadow-sgs-green/5 hover:-translate-y-0.5 sgs-hover-glow sgs-card-gradient-border"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sgs-green/10 text-sgs-green transition-all duration-300 group-hover:scale-110 group-hover:bg-sgs-green/20">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="text-sm font-extrabold text-sgs-night">{control}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
