"use client";

import Link from "next/link";
import { Shield, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MotionButton } from "@/components/ui/MotionButton";
import { transitions } from "@/lib/motion";
import { navItems } from "@/content/navigation";

/**
 * Header Component
 * Navegação premium com animações de entrada escalonadas e feedback tátil.
 */
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
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
            className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg shadow-primary/20 relative overflow-hidden"
          >
            <Shield className="w-6 h-6 text-white relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </motion.div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-tighter text-sgs-navy leading-none">SGS</span>
            <span className="text-[8px] font-black tracking-[0.2em] text-primary uppercase">Segurança</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <motion.div
            className="flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { ease: transitions.expo } }
                }}
              >
                <Link
                  href={item.href}
                  className="text-[13px] font-bold text-slate-500 hover:text-primary transition-all relative group tracking-tight"
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    className="inline-block"
                  >
                    {item.name}
                  </motion.span>
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, ease: transitions.expo }}
          >
            <Link href="/contato">
              <MotionButton size="sm" className="gap-2.5">
                Agendar demonstração <ArrowRight className="w-4 h-4" />
              </MotionButton>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-sgs-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isOpen}
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
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-xl font-bold text-sgs-navy hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contato"
                  className="w-full py-4 bg-primary text-white rounded-xl text-center text-lg font-bold shadow-lg shadow-primary/20 block"
                  onClick={() => setIsOpen(false)}
                >
                  Agendar demonstração
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
