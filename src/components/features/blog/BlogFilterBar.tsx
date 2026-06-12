"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/blog";

type BlogFilterBarProps = {
  activeCategory: string;
  searchTerm: string;
  onCategoryChange: (cat: string) => void;
  onSearchChange: (term: string) => void;
};

export function BlogFilterBar({ activeCategory, searchTerm, onCategoryChange, onSearchChange }: BlogFilterBarProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 border-b border-slate-100 pb-8">
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
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
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar artigos..."
          aria-label="Buscar artigos"
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>
    </div>
  );
}
