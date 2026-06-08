import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Eye,
  Server,
  KeyRound,
  FileCheck,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { DemoForm } from "@/components/DemoForm";

export const Route = createFileRoute("/seguranca")({
  component: SecurityPage,
  head: () => ({
    meta: [
      {
        title: "Segurança e LGPD — SGS | Sistema de Gestão de SST",
      },
      {
        name: "description",
        content:
          "Saiba como o SGS protege seus dados: criptografia, multi-tenancy, LGPD, controle de acesso, auditoria e conformidade.",
      },
    ],
  }),
});

const securityItems = [
  {
    icon: Lock,
    title: "Criptografia em trânsito e em repouso",
    desc: "Todos os dados trafegam com TLS 1.3 e são armazenados com criptografia AES-256. Seus documentos e evidências estão protegidos em todas as camadas.",
  },
  {
    icon: Server,
    title: "Infraestrutura em nuvem confiável",
    desc: "Utilizamos provedores com certificações ISO 27001, SOC 2 e conformidade com a LGPD. Backups automáticos e redundância geográfica.",
  },
  {
    icon: KeyRound,
    title: "Controle de acesso granular",
    desc: "Permissões por perfil, função e nível hierárquico. Princípio do menor privilégio aplicado a todos os usuários da plataforma.",
  },
  {
    icon: Eye,
    title: "Trilhas de auditoria",
    desc: "Todas as ações são registradas com data, horário, IP e identificação do usuário. Histórico completo para auditoria e conformidade.",
  },
  {
    icon: ShieldCheck,
    title: "Isolamento por tenant (multi-tenancy)",
    desc: "Dados de cada empresa cliente são logicamente segregados. Nenhum usuário de um tenant pode acessar dados de outro.",
  },
  {
    icon: FileCheck,
    title: "Conformidade com a LGPD",
    desc: "Canal dedicado de privacidade, política de retenção e descarte, direitos dos titulares e bases legais definidas para cada operação.",
  },
];

function SecurityPage() {
  return (
      <main>
        <section className="border-b border-sgs-border/50 bg-gradient-to-br from-sgs-bg-hover to-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue">
                <ShieldCheck className="h-3.5 w-3.5" />
                Segurança e Privacidade
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-sgs-night md:text-5xl">
                Seus dados, nossa responsabilidade
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sgs-slate">
                O SGS foi construído com segurança desde a primeira linha de código.
                Protegemos os dados da sua empresa e dos seus colaboradores.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sgs-bg py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {securityItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-sgs-border bg-white p-8 transition-all hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sgs-blue/5 text-sgs-blue">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-sgs-night">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-sgs-slate">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-sgs-border/50 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-2xl border border-sgs-border bg-sgs-bg-hover p-8">
                <h2 className="text-xl font-bold text-sgs-night">
                  Canal de Privacidade
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sgs-slate">
                  Para solicitações relacionadas à LGPD, exercício de direitos dos
                  titulares ou questões de privacidade, utilize nosso canal dedicado.
                </p>
                <a
                  href="mailto:privacidade@sgsseguranca.com.br"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sgs-blue transition-colors hover:text-sgs-blue-dark"
                >
                  <Mail className="h-4 w-4" />
                  privacidade@sgsseguranca.com.br
                </a>
              </div>

              <div className="rounded-2xl border border-sgs-border bg-sgs-bg-hover p-8">
                <h2 className="text-xl font-bold text-sgs-night">
                  Documentos legais
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sgs-slate">
                  Consulte nossa Política de Privacidade e Termos de Uso para
                  informações detalhadas sobre tratamento de dados.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link
                    to="/privacidade"
                    className="rounded-xl bg-sgs-blue px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-sgs-blue-dark"
                  >
                    Privacidade
                  </Link>
                  <Link
                    to="/termos"
                    className="rounded-xl border border-sgs-blue px-5 py-2.5 text-sm font-bold text-sgs-blue transition-all hover:bg-sgs-bg-hover"
                  >
                    Termos
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Criptografia TLS 1.3", "Dados protegidos em trânsito"],
                ["AES-256 em repouso", "Armazenamento criptografado"],
                ["Multi-tenancy", "Isolamento lógico por cliente"],
                ["Auditoria completa", "Todas as ações registradas"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-xl border border-sgs-border bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sgs-green" />
                  <div>
                    <p className="text-sm font-bold text-sgs-night">{title}</p>
                    <p className="text-xs text-sgs-slate">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sgs-bg py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:px-8 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-sgs-night md:text-3xl">
                Quer saber mais sobre segurança?
              </h2>
              <p className="mt-3 text-base text-sgs-slate">
                Fale conosco para detalhes técnicos de infraestrutura e conformidade.
              </p>
            </div>
            <DemoForm
              triggerLabel="Falar com equipe"
              showArrow
              triggerClassName="h-13 rounded-xl bg-sgs-blue px-8 text-sm font-bold text-white shadow-lg shadow-sgs-blue/20 transition-all hover:bg-sgs-blue-dark hover:scale-[1.02] active:scale-[0.98]"
            />
          </div>
        </section>
      </main>
  );
}
