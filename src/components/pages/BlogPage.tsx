"use client";

import {
  Search,
  Calendar,
  ArrowRight,
  Tag,
  Clock,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { categories, posts } from "@/data/blog";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch =
      !normalizedSearch ||
      `${post.title} ${post.excerpt} ${post.category} ${post.tags?.join(" ") ?? ""}`
        .toLowerCase()
        .includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  // Encontrar o post em destaque dinamicamente
  const featuredPost = posts.find(p => p.featured) || posts[0];
  
  // Posts para o grid: remove o destaque apenas se estivermos na visão geral sem busca
  const gridPosts = (activeCategory === "Todos" && !normalizedSearch)
    ? filteredPosts.filter(p => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              SGS Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Inteligência e <span className="text-primary">Conhecimento</span> para sua Gestão
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium text-pretty max-w-3xl">
              Artigos técnicos, tendências do mercado de SST e guias práticos escritos pelos nossos especialistas em governança e tecnologia.
            </p>
          </FadeIn>
        </div>

        {/* Categories & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 border-b border-slate-100 pb-8">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border",
                  activeCategory === cat
                    ? "bg-sgs-navy text-white border-sgs-navy shadow-lg shadow-sgs-navy/20"
                    : "bg-white text-slate-400 border-slate-100 hover:border-primary/20 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar artigos..."
              aria-label="Buscar artigos"
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Featured Post */}
        {activeCategory === "Todos" && !normalizedSearch && featuredPost && (
          <FadeIn className="mb-24">
            <div className="group relative grid lg:grid-cols-2 gap-12 bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
              <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-widest mb-6">
                  <Tag className="w-3 h-3" />
                  {featuredPost.category}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-sgs-navy mb-8 tracking-tighter leading-tight group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between pt-10 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-black text-slate-400">
                      {featuredPost.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-black text-sgs-navy">{featuredPost.author}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest group/link">
                    Ler artigo <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gridPosts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1}>
              <div className="group flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-sgs-navy shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-sgs-navy mb-6 tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400">
                        {post.author[0]}
                      </div>
                      <span className="text-[11px] font-black text-sgs-navy uppercase tracking-widest">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-slate-400 font-medium">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
