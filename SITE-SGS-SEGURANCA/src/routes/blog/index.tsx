import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, ShieldCheck } from "lucide-react";
import logoSgs from "@/assets/logo-sgs.webp";

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
    <div className="min-h-screen bg-[#fbfcfe] text-[#142033] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dbe4ee]/50 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSgs} alt="SGS Segurança" className="h-11 w-auto md:h-14" />
            <span className="hidden border-l border-[#dbe4ee] pl-3 text-sm font-semibold text-[#5b6878] sm:inline">
              Blog
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]">
              Início
            </Link>
            <Link to="/precos" className="text-sm font-semibold text-[#5b6878] transition-colors hover:text-[#1d5b8d]">
              Preços
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="border-b border-[#dbe4ee]/50 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1d5b8d]/10 bg-[#1d5b8d]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1d5b8d]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Blog SGS
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-[#0d2033] md:text-5xl">
                Gestão de SST na prática
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5b6878]">
                Artigos, guias e melhores práticas para transformar a gestão de
                segurança do trabalho da sua empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfcfe] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-[#dbe4ee] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1d5b8d]/20 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center gap-4 text-xs text-[#7a8796]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0d2033] transition-colors group-hover:text-[#1d5b8d]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5b6878]">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#1d5b8d]">
                    Ler artigo
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
