"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MotionButton } from "@/components/ui/MotionButton";
import { transitions } from "@/lib/motion";
import { navItems } from "@/content/navigation";
import { getSchedulingHref } from "@/lib/contact-links";

/**
 * Header Component
 * Navegação premium com animações de entrada escalonadas e feedback tátil.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const schedulingHref = getSchedulingHref();

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
        <Link href="/" className="flex items-center group">
          <Image 
            src="/images/logo-sgs.png" 
            alt="SGS Logo" 
            width={180} 
            height={60} 
            className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            priority
          />
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
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { ease: transitions.expo } }
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-[13px] font-bold transition-all relative group tracking-tight",
                    isActive ? "text-primary" : "text-slate-500 hover:text-primary"
                  )}
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    className="inline-block"
                  >
                    {item.name}
                  </motion.span>
                  {isActive ? (
                    <motion.span
                      layoutId="header-active-link"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary"
                      transition={{ duration: 0.35, ease: transitions.expo }}
                    />
                  ) : (
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, ease: transitions.expo }}
          >
            <Link href={schedulingHref}>
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
                  href={schedulingHref}
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
