"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { blurPlaceholder } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

type BlogFeaturedPostProps = {
  post: BlogPost;
};

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  return (
    <FadeIn className="mb-24">
      <div className="group relative grid lg:grid-cols-2 gap-12 bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
        <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
          <Image src={post.image} alt={post.title} fill priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            placeholder="blur" blurDataURL={blurPlaceholder} />
          <div className="absolute top-8 left-8">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary">Destaque</span>
          </div>
        </div>
        <div className="p-12 lg:p-20 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-widest mb-6">
            <Tag className="w-3 h-3" />
            {post.category}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-sgs-navy mb-8 tracking-tighter leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-10 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-black text-slate-400">{post.author[0]}</div>
              <div>
                <p className="text-xs font-black text-sgs-navy">{post.author}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</p>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest group/link">
              Ler artigo <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
