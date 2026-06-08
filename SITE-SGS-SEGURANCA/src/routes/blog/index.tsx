import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, ShieldCheck } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { TiltCard } from "@/components/animations/TiltCard";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog SGS — Gestão de SST, NRs e Segurança do Trabalho" },
      {
        name: "description",
        content:
          "Artigos sobre gestão de segurança do trabalho, normas regulamentadoras, APR, DDS, PT, ASO e boas práticas de SST.",
      },
    ],
  }),
});

const posts = [
  {
    title: "APR Digital: o guia completo para sua empresa",
    excerpt:
      "A Análise Preliminar de Riscos digital elimina papel, padroniza procedimentos e gera evidências prontas para auditoria. Veja como implementar.",
    date: "02 de junho de 2026",
    readTime: "5 min",
    slug: "apr-digital",
  },
  {
    title: "DDS Digital: como engajar equipes na segurança do trabalho",
    excerpt:
      "O Diálogo Diário de Segurança digital aumenta a participação, gera comprovantes e facilita o acompanhamento de presença.",
    date: "26 de maio de 2026",
    readTime: "5 min",
    slug: "dds-digital",
  },
  {
    title: "Controle de ASO Digital: eliminando o papel na gestão ocupacional",
    excerpt:
      "O Atestado de Saúde Ocupacional digital reduz retrabalho, evita perda de documentos e alerta sobre vencimentos.",
    date: "19 de maio de 2026",
    readTime: "6 min",
    slug: "controle-aso",
  },
  {
    title: "Gestão de Treinamentos SST: como digitalizar e controlar",
    excerpt:
      "Registro de treinamentos NRs com data, carga horária, instrutor e reciclagem automática. Centralize tudo em uma plataforma.",
    date: "12 de maio de 2026",
    readTime: "5 min",
    slug: "gestao-treinamentos-sst",
  },
  {
    title: "Mobilização de Terceiros: como evitar riscos trabalhistas e documentais",
    excerpt:
      "A mobilização de terceiros exige controle documental rigoroso. Saiba como digitalizar e automatizar esse processo.",
    date: "05 de maio de 2026",
    readTime: "4 min",
    slug: "mobilizacao-terceiros",
  },
  {
    title: "Ordem de Serviço de Segurança do Trabalho: guia completo",
    excerpt:
      "A OS de segurança do trabalho integrada ao colaborador e ao documento. Controle de versões, validade e conformidade.",
    date: "28 de abril de 2026",
    readTime: "6 min",
    slug: "ordem-servico-sst",
  },
];

function BlogPage() {
  return (
      <main>
        <section className="relative overflow-hidden border-b border-sgs-border/50 bg-white py-20 md:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sgs-blue/3 blur-3xl animate-sgs-blob" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-sgs-green/3 blur-3xl animate-sgs-float" style={{ animationDuration: '10s' }} />
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center sgs-reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sgs-blue/10 bg-sgs-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sgs-blue animate-sgs-soft-in">
                <ShieldCheck className="h-3.5 w-3.5" />
                Blog SGS
              </div>
              <TextReveal
                text="Gestão de SST na prática"
                as="h1"
className="text-4xl font-black tracking-tight text-sgs-night md:text-5xl"
              stagger={40}
            />
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sgs-slate">
                Artigos, guias e melhores práticas para transformar a gestão de
                segurança do trabalho da sua empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-sgs-bg py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 sgs-grid-bg opacity-20" />
          <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 sgs-reveal sgs-stagger">
              {posts.map((post) => (
                <TiltCard
                  key={post.slug}
                  as="a"
                  href={`/blog/${post.slug}`}
                  maxTilt={4}
                  scale={1.01}
                  className="group flex flex-col rounded-2xl border border-sgs-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sgs-blue/20 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center gap-4 text-xs text-sgs-slate-light">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-extrabold text-sgs-night transition-colors duration-300 group-hover:text-sgs-blue">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-sgs-slate">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-sgs-blue">
                    Ler artigo
                    <ArrowRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  </span>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
