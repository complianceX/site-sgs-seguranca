"use client";

import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  Clock,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Todos", "Governança", "Tecnologia", "NRs & Legislação", "IA no SST"];

const posts = [
  {
    id: 1,
    title: "O Futuro do SST: Como a IA está transformando a criação de APRs",
    excerpt: "Descubra como algoritmos de inteligência artificial estão ajudando TSTs a reduzir o tempo de rascunho em até 80% mantendo a precisão técnica.",
    category: "IA no SST",
    author: "Ricardo Santos",
    date: "23 Abr, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Guia Definitivo: Validação Pública de Documentos e a LGPD",
    excerpt: "Entenda os limites legais e as melhores práticas para disponibilizar documentos oficiais de segurança para fiscais e contratantes.",
    category: "Governança",
    author: "Ana Paula Silva",
    date: "20 Abr, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Principais mudanças na NR-01: O que esperar para o próximo semestre",
    excerpt: "Análise técnica sobre as atualizações normativas e como o GRO/PGR deve ser estruturado nas novas plataformas digitais.",
    category: "NRs & Legislação",
    author: "Marcos Oliveira",
    date: "15 Abr, 2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Digitalização do Campo: Por que o papel é o maior risco da sua obra",
    excerpt: "Como a perda de registros físicos e a demora na coleta de assinaturas impactam diretamente no risco jurídico da sua empresa.",
    category: "Tecnologia",
    author: "Ricardo Santos",
    date: "10 Abr, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop"
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts = activeCategory === "Todos" 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

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
          <div className="relative w-full lg:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar artigos..."
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-3 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
            />
          </div>
        </div>

        {/* Featured Post (Main) */}
        {activeCategory === "Todos" && (
          <FadeIn direction="up" className="mb-24">
            <Link href="#" className="group block relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-slate-100 shadow-premium">
              <img 
                src={posts[0].image} 
                alt={posts[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sgs-navy via-sgs-navy/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-12 lg:p-16 text-white max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-primary text-[10px] font-black uppercase tracking-widest rounded-full">Destaque</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> {posts[0].date}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight tracking-tight group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-white/70 font-medium leading-relaxed mb-8 max-w-2xl line-clamp-2">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-black text-white/40">
                      {posts[0].author[0]}
                    </div>
                    <span className="text-sm font-bold">{posts[0].author}</span>
                  </div>
                  <span className="text-sm font-bold text-white/40 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {posts[0].readTime}
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <FadeIn key={post.id} direction="up" delay={i * 0.1}>
              <Link href="#" className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full text-sgs-navy border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-sgs-navy tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 text-xs">
                        {post.author[0]}
                      </div>
                      <span className="text-xs font-bold text-sgs-navy">{post.author}</span>
                    </div>
                    <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Newsletter Callout */}
        <FadeIn direction="up">
          <div className="mt-32 p-12 lg:p-24 bg-sgs-navy text-white rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-sgs-navy/20">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tight leading-tight">Receba Insights Técnicos no seu e-mail</h2>
              <p className="text-white/60 text-xl font-medium mb-12 leading-relaxed">
                Junte-se a +5.000 profissionais de SST que recebem as últimas atualizações de NRs, 
                tecnologia e governança toda semana.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/50 transition-all text-white placeholder:text-white/20"
                />
                <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group/btn">
                  Inscrever-se <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            {/* Premium shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-64 -mt-64 group-hover:bg-primary/10 transition-all duration-1000"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
