import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { getPostBySlug, posts } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | SGS Segurança",
    };
  }

  return {
    title: post.seoTitle ?? `${post.title} | SGS Segurança`,
    description: post.seoDescription ?? post.excerpt,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="bg-white py-24 lg:py-40">
      <div className="container">
        <Link
          href="/blog"
          className="mb-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary transition-colors hover:text-sgs-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para insights
        </Link>

        <header className="mb-16 max-w-5xl">
          <div className="mb-8 flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2 text-slate-400">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2 text-slate-400">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-8 text-4xl font-black leading-[1.06] tracking-tight text-sgs-navy text-balance md:text-6xl">
            {post.title}
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-500">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mb-20 aspect-[16/8] overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-14 border-b border-slate-100 pb-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              Por {post.author}
            </p>
          </div>

          <div className="space-y-14">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-6 text-3xl font-black tracking-tight text-sgs-navy">
                  {section.heading}
                </h2>
                <div className="space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-lg font-medium leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Blocos Específicos AJN */}
          {post.author === "AJN Consultoria e Engenharia" && (
            <div className="mt-20 space-y-16">
              {/* Bloco Sobre a AJN */}
              {post.slug === "ajn-consultoria-engenharia-qssma-sst-engenharia" && (
                <div className="p-10 lg:p-14 bg-slate-50 rounded-[3rem] border border-slate-200">
                  <h3 className="text-3xl font-black text-sgs-navy mb-8 tracking-tight">Sobre a AJN Consultoria e Engenharia</h3>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                    A AJN Consultoria e Engenharia atua com soluções em Qualidade, Saúde, Segurança e Meio Ambiente, oferecendo serviços técnicos para empresas que precisam manter suas operações seguras, regulares e em conformidade.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div>
                      <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Serviços principais</h4>
                      <ul className="space-y-3 text-sm text-slate-600 font-bold">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Segurança do Trabalho
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Saúde Ocupacional
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Gestão Ambiental e Qualidade
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          eSocial SST
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          PGR / PCMSO e ASO
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Laudos Técnicos e Perícias
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Projetos de Combate a Incêndio
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Contato e Localização</h4>
                      <div className="space-y-4 text-sm text-slate-600 font-bold leading-relaxed">
                        <p><strong>WhatsApp:</strong> (31) 98473-4644</p>
                        <p><strong>E-mail:</strong> faleconosco@ajnengenharia.com.br</p>
                        <p><strong>Endereço:</strong> Rua Alberto Cintra, 35, sala 601, União, Belo Horizonte/MG</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="https://wa.me/5531984734644?text=Olá,%20vim%20pelo%20blog%20do%20SGS%20e%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20AJN."
                    target="_blank"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-[1.25rem] font-black hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
                  >
                    Solicitar atendimento com a AJN <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              )}

              {/* CTA Padrão para todos os posts AJN */}
              <div className="p-12 bg-sgs-navy rounded-[3rem] text-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-8 tracking-tighter">Precisa regularizar sua empresa?</h3>
                  <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
                    A AJN Consultoria e Engenharia pode ajudar com PGR, PCMSO, ASO, eSocial SST, laudos técnicos, treinamentos de NR, AVCB/CLCB, projetos elétricos e soluções completas em QSSMA.
                  </p>
                  <Link 
                    href="https://wa.me/5531984734644?text=Olá,%20vim%20pelo%20blog%20do%20SGS%20e%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20AJN."
                    target="_blank"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-black hover:scale-105 transition-all shadow-[0_20px_50px_rgba(244,114,22,0.3)]"
                  >
                    Solicitar atendimento pelo WhatsApp <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
