import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ExternalLink } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import logoSgs from "@/assets/logo-sgs.webp";
import { whatsappUrl, instagramUrl } from "@/lib/landing-data";
import { ThemeToggle } from "@/components/animations/ThemeToggle";
import { AnimatedHamburger } from "@/components/animations/AnimatedHamburger";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({
    opacity: 0,
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnterLink = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement?.getBoundingClientRect();
    if (parentRect) {
      setHoverStyle({
        opacity: 1,
        width: rect.width + 16,
        left: rect.left - parentRect.left - 8,
      });
    }
  }, []);

  const handleMouseLeaveNav = useCallback(() => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-sgs-border/50 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-sgs-night/80 ${
          scrolled ? "shadow-lg shadow-sgs-blue/5 dark:shadow-black/20" : ""
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 md:px-8 ${
            scrolled ? "h-16 md:h-16" : "h-18 md:h-20"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSgs}
              alt="SGS Segurança"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-9 md:h-10" : "h-11 md:h-14"}`}
            />
            <span className="hidden border-l border-sgs-border pl-3 text-sm font-semibold text-sgs-slate sm:inline dark:border-white/10 dark:text-sgs-slate-light">
              Segurança do Trabalho
            </span>
          </Link>

          <div
            className="relative hidden items-center gap-2 text-sm font-semibold text-sgs-slate lg:flex"
            onMouseLeave={handleMouseLeaveNav}
          >
            {/* Sliding Hover Highlight Background */}
            <div
              className="absolute h-8 rounded-lg bg-sgs-blue/5 dark:bg-white/5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
              style={hoverStyle}
            />

            <a
              href="#plataforma"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              Plataforma
            </a>
            <a
              href="#modulos"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              Módulos
            </a>
            <Link
              to="/funcionalidades"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              Funcionalidades
            </Link>
            <Link
              to="/precos"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              Preços
            </Link>
            <Link
              to="/contato"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              Contato
            </Link>
            <Link
              to="/faq"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              FAQ
            </Link>
            <Link
              to="/seguranca"
              onMouseEnter={handleMouseEnterLink}
              className="relative z-10 px-3 py-1.5 transition-colors hover:text-sgs-blue dark:text-sgs-slate-light dark:hover:text-white"
            >
              Segurança
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do SGS Segurança"
              className="hidden h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-colors hover:opacity-90 sm:inline-flex"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_click", "Header")}
              className="hidden h-10 items-center gap-2 rounded-md bg-sgs-whatsapp px-4 text-sm font-bold text-white transition-colors hover:bg-sgs-whatsapp-dark md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <DemoForm
              triggerLabel="Demo"
              triggerClassName="h-10 rounded-md bg-sgs-blue px-4 text-sm font-bold text-white hover:bg-sgs-blue-dark md:px-5"
            />
            <AnimatedHamburger
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </div>
        </nav>
      </header>
      <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col gap-4 p-4">
            <a href="#plataforma" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              Plataforma
            </a>
            <a href="#modulos" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              Módulos
            </a>
            <Link to="/funcionalidades" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              Funcionalidades
            </Link>
            <Link to="/precos" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              Preços
            </Link>
            <Link to="/faq" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              FAQ
            </Link>
            <Link to="/contato" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              Contato
            </Link>
            <Link to="/seguranca" onClick={() => setMobileOpen(false)} className="text-base font-medium text-sgs-blue hover:underline">
              Segurança
            </Link>
          </nav>
          <DrawerClose asChild>
            <button className="mx-auto mb-4 rounded-md bg-sgs-blue px-6 py-2 text-white" onClick={() => setMobileOpen(false)}>
              Fechar
            </button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
}
