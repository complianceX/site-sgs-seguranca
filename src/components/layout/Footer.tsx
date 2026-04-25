import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white text-slate-600 py-20 border-t border-slate-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-8 group">
              <Image 
                src="/images/logo-sgs.png" 
                alt="SGS Logo" 
                width={160} 
                height={54} 
                className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-10 text-slate-500 font-medium max-w-sm">
              A autoridade em gestão de SST. Transformamos conformidade técnica em inteligência operacional e segurança jurídica para sua empresa.
            </p>
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Newsletter Técnica</p>
              <form className="flex gap-2 max-w-sm">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-sgs-navy focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-full transition-all"
                />
                <button className="bg-sgs-navy text-white px-4 rounded-xl hover:bg-primary transition-all shadow-lg shadow-sgs-navy/10 group">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sgs-navy font-black text-xs uppercase tracking-widest mb-8">Produto</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/modulos" className="text-slate-500 hover:text-primary transition-colors">Módulos</Link></li>
              <li><Link href="/governanca" className="text-slate-500 hover:text-primary transition-colors">Governança</Link></li>
              <li><Link href="/sophie" className="text-slate-500 hover:text-primary transition-colors">IA Sophie</Link></li>
              <li><Link href="/integracoes" className="text-slate-500 hover:text-primary transition-colors">Integrações</Link></li>
              <li><Link href="/seguranca" className="text-slate-500 hover:text-primary transition-colors">Segurança</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sgs-navy font-black text-xs uppercase tracking-widest mb-8">Empresa</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/blog" className="text-slate-500 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/recursos" className="text-slate-500 hover:text-primary transition-colors">Recursos</Link></li>
              <li><Link href="/contato" className="text-slate-500 hover:text-primary transition-colors">Contato</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-colors">Sobre nós</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <h4 className="text-sgs-navy font-black text-sm mb-4">Pronto para digitalizar seu SST?</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">Comece hoje mesmo a usar a plataforma que está definindo o novo padrão de segurança no trabalho.</p>
              <Link 
                href="https://app.sgsseguranca.com.br" 
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl text-sm font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Criar Conta Grátis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} SGS - Segurança do Trabalho. Tecnologia para Vida.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span className="hover:text-primary cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-primary cursor-pointer transition-colors">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
