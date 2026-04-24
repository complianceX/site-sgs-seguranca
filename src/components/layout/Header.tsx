"use client";

import Link from "next/link";
import { Shield, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Módulos", href: "/modulos" },
  { name: "Governança", href: "/governanca" },
  { name: "IA Sophie", href: "/sophie" },
  { name: "Preços", href: "/precos" },
  { name: "Blog", href: "/blog" },
  { name: "Recursos", href: "/recursos" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "glass-effect border-b border-slate-100 py-3 shadow-sgs" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-tighter text-sgs-navy leading-none">SGS</span>
            <span className="text-[8px] font-black tracking-[0.2em] text-primary uppercase">Segurança</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-bold text-slate-500 hover:text-primary transition-all relative group tracking-tight"
            >
              {item.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://app.sgsseguranca.com.br"
            className="px-6 py-3 bg-sgs-navy text-white rounded-2xl text-[13px] font-black hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 flex items-center gap-2.5"
          >
            Acessar Plataforma <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-sgs-navy dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xl font-bold text-sgs-navy dark:text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://app.sgsseguranca.com.br"
                className="w-full py-4 bg-primary text-white rounded-xl text-center text-lg font-bold shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                Acessar Plataforma
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
