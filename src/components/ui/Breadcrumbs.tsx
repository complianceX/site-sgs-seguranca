"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex mb-8 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400", className)}
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="h-3 w-3" />
            <span className="sr-only">Início</span>
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-slate-300" />
              {isLast ? (
                <span className="text-primary truncate max-w-[200px] md:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
