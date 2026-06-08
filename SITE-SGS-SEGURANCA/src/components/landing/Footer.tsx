import { Link } from "@tanstack/react-router";
import { MessageCircle, ExternalLink } from "lucide-react";
import logoSgs from "@/assets/logo-sgs.webp";
import { contactEmail, whatsappUrl, instagramUrl } from "@/lib/landing-data";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-sgs-blue py-16 text-white/90 sgs-reveal">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link
            to="/"
            className="group relative inline-flex items-center"
          >
            <span className="absolute inset-0 -z-0 bg-white/90 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
            <span className="absolute inset-1 -z-0 bg-white/55 blur-md" />
            <img
              src={logoSgs}
              alt="SGS Segurança"
              className="relative h-13 w-auto transition-transform duration-300 group-hover:scale-[1.03] md:h-16"
            />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Plataforma digital para documentos, evidências e governança de SST. APR, DDS, PT, ASO, treinamentos e indicadores em um só lugar.
          </p>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            © 2026 SGS Segurança
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:gap-16">
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Plataforma</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#plataforma" className="transition-colors hover:text-white">Visão geral</a></li>
              <li><a href="#modulos" className="transition-colors hover:text-white">Módulos</a></li>
              <li><Link to="/funcionalidades" className="transition-colors hover:text-white">Funcionalidades</Link></li>
              <li><Link to="/precos" className="transition-colors hover:text-white">Preços</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Empresa</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/contato" className="transition-colors hover:text-white">Contato</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-white">FAQ</Link></li>
              <li><Link to="/seguranca" className="transition-colors hover:text-white">Segurança</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm md:items-end">
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_click", "Footer")}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-sgs-whatsapp px-5 font-bold text-white shadow-lg shadow-sgs-whatsapp/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 font-bold text-white shadow-lg shadow-[#dd2a7b]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="h-4 w-4" />
              Instagram
            </a>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a href={`mailto:${contactEmail}`} className="text-white/70 transition-colors hover:text-white">
              {contactEmail}
            </a>
            <div className="flex gap-6 pt-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
              <Link to="/privacidade" className="transition-colors hover:text-white">
                Privacidade
              </Link>
              <Link to="/termos" className="transition-colors hover:text-white">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
