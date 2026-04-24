"use client";

import Link from "next/link";
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  Cpu, 
  Lock, 
  Users, 
  BarChart3, 
  ArrowRight,
  ClipboardCheck,
  Zap,
  Star,
  ChevronDown,
  Camera,
  Play,
  LayoutDashboard,
  UserPlus,
  Settings,
  Rocket
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Gerente de SST",
    company: "Indústria Metalúrgica Sul",
    text: "O SGS mudou completamente nossa forma de gerir documentos. O que levava dias para organizar agora está a um clique de distância, com total segurança jurídica.",
    stars: 5
  },
  {
    name: "Ana Paula Silva",
    role: "Engenheira de Segurança",
    company: "Construtora Horizonte",
    text: "A IA Sophie é uma mão na roda. Os rascunhos de APR e PT economizam horas de trabalho manual da nossa equipe técnica.",
    stars: 5
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor de Operações",
    company: "Logística Express",
    text: "O controle de vencimentos de treinamentos e exames reduziu nosso risco operacional drasticamente. Não perdemos mais nenhum prazo.",
    stars: 5
  }
];

const faqs = [
  {
    question: "O SGS é compatível com a LGPD?",
    answer: "Sim, o SGS foi desenhado sob os princípios de Privacy by Design. Incluímos consentimento versionado, sanitização de dados sensíveis e isolamento multi-tenant real."
  },
  {
    question: "Como funciona a validação pública de documentos?",
    answer: "Cada documento oficial gerado possui um QR Code ou código único. Qualquer pessoa autorizada pode validar a autenticidade do PDF através do nosso portal Registry, sem precisar logar no sistema."
  },
  {
    question: "A IA Sophie substitui o técnico de segurança?",
    answer: "Não. A Sophie é uma ferramenta assistiva. Ela apoia a criação de rascunhos, sugere controles e analisa riscos, mas a decisão final e responsabilidade técnica permanecem sempre com o profissional de SST."
  },
  {
    question: "Posso gerenciar múltiplas unidades ou empresas?",
    answer: "Sim, o sistema é multi-tenant e multi-site. Você pode estruturar empresas, unidades operacionais e definir permissões granulares (RBAC) para cada usuário."
  }
];

const fieldPhotos = [
  { title: "DDS em Equipe", category: "DDS", desc: "TST realizando diálogo diário com equipe de campo." },
  { title: "Liberação de PT", category: "PT", desc: "Supervisor validando permissão de trabalho via tablet." },
  { title: "Análise de APR", category: "APR", desc: "Equipe revisando riscos antes de iniciar atividade crítica." },
  { title: "Auditoria de Campo", category: "Auditoria", desc: "Inspeção técnica utilizando checklist digital SGS." },
];

const clientLogos = [
  { name: "Empresa 1", label: "Logo Empresa 1" },
  { name: "Empresa 2", label: "Logo Empresa 2" },
  { name: "Empresa 3", label: "Logo Empresa 3" },
  { name: "Empresa 4", label: "Logo Empresa 4" },
  { name: "Empresa 5", label: "Logo Empresa 5" },
  { name: "Empresa 6", label: "Logo Empresa 6" },
];

export function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [workers, setWorkers] = useState(100);
  const [hoursPerDoc, setHoursPerDoc] = useState(2);

  const savings = Math.floor(workers * hoursPerDoc * 22 * 0.7);

  return (
    <div className="flex flex-col gap-24 lg:gap-40 pb-24 overflow-hidden bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Overlay - Refined for better contrast */}
        <div className="absolute inset-0 bg-white/60 z-10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10"></div>
        
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/dds-campo.mp4" type="video/mp4" />
        </video>

        <div className="container relative z-20">
          <div className="max-w-4xl">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full text-[10px] font-black mb-10 text-primary tracking-[0.2em] uppercase">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                SGS em Operação Real
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.05] tracking-tighter text-sgs-navy text-balance">
                A Inteligência da <span className="text-primary">Segurança</span> no Campo
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-2xl font-medium text-pretty">
                A plataforma que TSTs e Supervisores usam para garantir conformidade em tempo real. DDS, PT e APR direto do campo para a governança.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="https://app.sgsseguranca.com.br"
                  className="px-12 py-6 bg-primary text-white rounded-[1.5rem] font-black text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group"
                >
                  Começar Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/precos"
                  className="px-12 py-6 bg-white text-sgs-navy border border-slate-200 rounded-[1.5rem] font-black text-lg hover:bg-slate-50 transition-all shadow-sm"
                >
                  Ver Planos
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Refined */}
      <section className="container">
        <FadeIn direction="up">
          <div className="flex flex-col items-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-16 relative">
              <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
              Empresas que confiam na nossa governança
              <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-slate-200"></span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 w-full">
              {clientLogos.map((logo, i) => (
                <div key={i} className="flex justify-center group cursor-crosshair">
                  <div className="h-12 w-full max-w-[140px] bg-slate-50 rounded-2xl flex items-center justify-center font-black text-[11px] text-slate-400 border border-slate-100 uppercase tracking-tighter group-hover:border-primary/20 group-hover:bg-white group-hover:shadow-sgs transition-all duration-500">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Field Action Gallery - Refined */}
      <section className="container">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sgs-orange/10 text-sgs-orange rounded-full text-[10px] font-black mb-8 tracking-[0.2em] uppercase">
              <Camera className="w-3.5 h-3.5" />
              SGS EM CAMPO
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">Operação Real, <span className="text-sgs-orange">Resultados</span> Reais</h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">Veja como o SGS é utilizado no dia a dia por quem faz a segurança acontecer de verdade.</p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {fieldPhotos.map((photo, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="group relative aspect-[3/4] bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                  <Camera className="w-12 h-12 text-slate-200 opacity-20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sgs-navy via-sgs-navy/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">{photo.category}</p>
                  <h4 className="text-2xl font-black text-white mb-3 leading-tight">{photo.title}</h4>
                  <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      {/* Value Proposition - Refined */}
      <section className="container">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight text-balance">A autoridade em <span className="text-primary">Gestão de SST</span></h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">O SGS combina tecnologia de ponta com as melhores práticas de governança documental para sua empresa.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Lock, color: "primary", title: "Segurança & LGPD", text: "Isolamento real de dados e controles nativos de privacidade para total conformidade jurídica." },
            { icon: FileText, color: "sgs-orange", title: "Governança Documental", text: "Registry de documentos com trilha forense e validação pública para auditorias impecáveis." },
            { icon: Cpu, color: "sgs-green", title: "IA Sophie Assistiva", text: "Inteligência artificial que apoia a operação, reduzindo o trabalho manual e aumentando a precisão." }
          ].map((item, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
                <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700", 
                  item.color === "primary" ? "bg-primary/5" : 
                  item.color === "sgs-orange" ? "bg-sgs-orange/5" : "bg-sgs-green/5"
                )}>
                  <item.icon className={cn("w-10 h-10", 
                    item.color === "primary" ? "text-primary" : 
                    item.color === "sgs-orange" ? "text-sgs-orange" : "text-sgs-green"
                  )} />
                </div>
                <h3 className="text-2xl font-black mb-6 text-sgs-navy tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-sgs-green/5 text-sgs-green rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Rocket className="w-4 h-4" />
              Implementação Rápida
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight">Como o SGS entra na sua <span className="text-primary">Operação</span></h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">Nossa metodologia de onboarding garante que sua equipe esteja operando com 100% de eficiência em tempo recorde.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 z-0"></div>
          
          {[
            { 
              step: "01", 
              icon: LayoutDashboard, 
              title: "Setup & Unidades", 
              desc: "Estruturamos suas unidades, sites e hierarquia de acesso (RBAC) em minutos." 
            },
            { 
              step: "02", 
              icon: UserPlus, 
              title: "Importação de Dados", 
              desc: "Sincronizamos sua base de trabalhadores, treinamentos e exames atuais." 
            },
            { 
              step: "03", 
              icon: Settings, 
              title: "Customização IA", 
              desc: "A Sophie aprende o contexto técnico da sua empresa para rascunhos precisos." 
            },
            { 
              step: "04", 
              icon: Rocket, 
              title: "Go-Live no Campo", 
              desc: "Treinamento focado no TST e Supervisores para uso direto via tablet ou mobile." 
            }
          ].map((item, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1} className="relative z-10">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group text-center lg:text-left">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm border border-slate-100">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{item.step}</div>
                <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials - Refined */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-sgs-navy tracking-tight">Quem usa, confia</h2>
              <p className="text-slate-500 text-xl font-medium">Depoimentos de profissionais que transformaram sua gestão com o SGS.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 flex flex-col h-full group">
                  <div className="flex gap-1.5 mb-8 text-sgs-orange">
                    {[...Array(t.stars)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: `${s * 100}ms` }} />)}
                  </div>
                  <p className="text-slate-600 font-medium italic mb-10 text-lg leading-relaxed flex-grow">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-sgs-navy">{t.name}</p>
                      <p className="text-[11px] font-black text-primary uppercase tracking-widest">{t.role}</p>
                      <p className="text-[10px] font-bold text-slate-400">{t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section - Refined */}
      <section className="container">
        <FadeIn direction="up">
          <div className="bg-white rounded-[3rem] p-10 lg:p-20 relative overflow-hidden border border-slate-100 shadow-premium">
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
                  <BarChart3 className="w-4 h-4" />
                  Calculadora de ROI
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight leading-[1.1]">Quanto sua empresa economiza?</h2>
                <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                  A digitalização de processos de SST reduz drasticamente o tempo gasto com burocracia, assinaturas e organização.
                </p>
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-black text-sgs-navy uppercase tracking-widest">Nº de Trabalhadores</label>
                      <span className="text-3xl font-black text-primary leading-none">{workers}</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="1000" 
                      step="10"
                      value={workers}
                      onChange={(e) => setWorkers(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-black text-sgs-navy uppercase tracking-widest">Horas/Mês por Doc (Manual)</label>
                      <span className="text-3xl font-black text-primary leading-none">{hoursPerDoc}h</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      step="1"
                      value={hoursPerDoc}
                      onChange={(e) => setHoursPerDoc(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-sgs-navy rounded-[2.5rem] p-12 lg:p-16 text-center shadow-2xl shadow-sgs-navy/20 text-white relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Economia Estimada</p>
                <div className="text-7xl lg:text-9xl font-black mb-6 flex items-baseline justify-center gap-3 tracking-tighter">
                  {savings} <span className="text-2xl font-bold text-white/40 tracking-normal">h</span>
                </div>
                <p className="text-white/60 text-xl font-medium mb-10">
                  Poupadas todos os meses em burocracia documental.
                </p>
                <div className="h-[1px] bg-white/10 mb-10"></div>
                <p className="text-xs text-white/40 font-medium italic leading-relaxed">
                  *Cálculo baseado em ganho de eficiência de 70% na geração, assinatura e arquivamento de documentos digitais via SGS.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ Section - Refined */}
      <section className="container">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-sgs-navy tracking-tight">Perguntas Frequentes</h2>
              <p className="text-slate-500 text-xl font-medium mb-12 leading-relaxed">
                Tudo o que você precisa saber sobre o SGS e como podemos ajudar sua empresa.
              </p>
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-black text-sgs-navy mb-4">Ainda tem dúvidas?</h4>
                <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">Fale com um de nossos especialistas em governança agora mesmo.</p>
                <Link href="/contato" className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-sgs-navy rounded-2xl font-black text-sm hover:bg-slate-50 hover:border-primary/20 transition-all shadow-sm group">
                  Abrir chat comercial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            {faqs.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className={cn(
                  "border rounded-[2rem] overflow-hidden transition-all duration-500",
                  activeFaq === i ? "border-primary/20 shadow-premium bg-white" : "border-slate-100 bg-white shadow-sgs hover:shadow-sgs-hover"
                )}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <span className={cn("text-lg font-black transition-colors duration-500", activeFaq === i ? "text-primary" : "text-sgs-navy")}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                      activeFaq === i ? "bg-primary text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-slate-500 text-lg font-medium leading-relaxed border-t border-slate-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Refined */}
      <section className="container mb-24">
        <FadeIn direction="up">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-tight tracking-tighter">Pronto para elevar o nível da sua segurança?</h2>
              <p className="text-xl lg:text-2xl text-white/80 mb-14 font-medium leading-relaxed">
                Junte-se a centenas de empresas que já garantem conformidade e eficiência com a plataforma líder em gestão de SST.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="https://app.sgsseguranca.com.br"
                  className="px-12 py-6 bg-white text-primary rounded-[1.5rem] font-black text-xl hover:bg-slate-50 transition-all shadow-2xl shadow-black/10 flex items-center gap-3 group"
                >
                  Começar Agora <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contato"
                  className="px-12 py-6 bg-primary-foreground/10 text-white border border-white/20 rounded-[1.5rem] font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Agendar Demonstração
                </Link>
              </div>
            </div>
            {/* Abstract Premium Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
