import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
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
        </div>
      </div>
    </article>
  );
}
