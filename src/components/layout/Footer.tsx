import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { footerSections } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-white text-slate-600 py-20 border-t border-slate-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-8 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all shadow-lg shadow-primary/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tighter text-sgs-navy leading-none">SGS</span>
                <span className="text-[8px] font-black tracking-[0.2em] text-primary uppercase">Segurança</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-10 text-slate-500 font-medium max-w-sm">
              Plataforma SaaS para transformar documentos, evidências de campo e prazos de SST em governança rastreável.
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
              {footerSections.product.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-500 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sgs-navy font-black text-xs uppercase tracking-widest mb-8">Empresa</h4>
            <ul className="space-y-4 text-sm font-bold">
              {footerSections.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <h4 className="text-sgs-navy font-black text-sm mb-4">Pronto para digitalizar seu SST?</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">Converse com nossa equipe e veja como o SGS pode se adaptar à realidade da sua operação.</p>
              <Link
                href="/contato"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl text-sm font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Agendar demonstração <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} SGS - Segurança do Trabalho. Tecnologia para Vida.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            {footerSections.social.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary cursor-pointer transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
