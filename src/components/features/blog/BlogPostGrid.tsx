"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { blurPlaceholder } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

type BlogPostGridProps = {
  posts: BlogPost[];
};

export function BlogPostGrid({ posts }: BlogPostGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post, i) => (
        <FadeIn key={post.id} delay={i * 0.1}>
          <div className="group flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-[16/10] relative overflow-hidden">
              <Image src={post.image} alt={post.title} fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                placeholder="blur" blurDataURL={blurPlaceholder} />
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-sgs-navy shadow-sm">{post.category}</span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</div>
                <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</div>
              </div>
              <h3 className="text-xl font-black text-sgs-navy mb-6 tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400">{post.author[0]}</div>
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
  );
}
