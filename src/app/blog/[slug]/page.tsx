import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";

import { getPostBySlug, posts } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | SGS",
      robots: { index: false, follow: false },
    };
  }

  const title = post.seoTitle ?? `${post.title} | SGS`;
  const description = post.seoDescription ?? post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "pt_BR",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = posts
    .filter((candidate) => candidate.slug !== post.slug && candidate.category === post.category)
    .slice(0, 2);

  return (
    <article className="bg-white py-24 lg:py-40">
      <div className="container">
        <Link
          href="/blog"
          className="mb-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary transition-colors hover:text-sgs-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para insights
        </Link>

        <header className="max-w-5xl">
          <div className="mb-8 flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
              <Tag className="h-3.5 w-3.5" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2 text-slate-400">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2 text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-sgs-navy text-balance md:text-6xl lg:text-7xl">
            {post.title}
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
            {post.excerpt}
          </p>
        </header>

        <div className="relative my-16 aspect-[16/9] overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-premium lg:my-24">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,720px)_1fr] lg:gap-24">
          <div className="space-y-14">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-6 text-3xl font-black tracking-tight text-sgs-navy">
                  {section.heading}
                </h2>
                <div className="space-y-5 text-lg font-medium leading-relaxed text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Próximo passo
              </p>
              <h2 className="mb-4 text-2xl font-black tracking-tight text-sgs-navy">
                Leve essa governança para sua operação
              </h2>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-500">
                Veja como o SGS organiza documentos, evidências e fluxos de SST com rastreabilidade.
              </p>
              <Link
                href="/contato"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-white shadow-xl shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Agendar demonstração
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-8 rounded-[2rem] border border-slate-100 bg-white p-8">
                <p className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Relacionados
                </p>
                <div className="space-y-5">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="block border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-sm font-black leading-snug text-sgs-navy transition-colors hover:text-primary">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-xs font-bold text-slate-400">{related.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
