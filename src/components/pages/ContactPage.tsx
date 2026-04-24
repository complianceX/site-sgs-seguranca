"use client";

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Building,
  User,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot !== "") {
      console.warn("Spam detected");
      return;
    }

    setIsSubmitting(true);
    
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Info Side - Refined */}
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <MessageSquare className="w-4 h-4" />
              Canais de Atendimento
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Vamos conversar sobre sua <span className="text-primary">Gestão</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-medium text-pretty max-w-xl">
              Estamos prontos para ajudar sua empresa a elevar o nível da segurança operacional e conformidade técnica.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">E-mail</h4>
                  <p className="text-lg font-black text-sgs-navy">contato@sgsseguranca.com.br</p>
                  <p className="text-sm font-bold text-slate-400">suporte@sgsseguranca.com.br</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">WhatsApp Business</h4>
                  <p className="text-lg font-black text-sgs-navy">+55 (11) 99999-9999</p>
                  <p className="text-sm font-bold text-slate-400">Seg-Sex, 08:00 às 18:00</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-slate-100">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Localização</h4>
                  <p className="text-lg font-black text-sgs-navy">São Paulo, SP - Brasil</p>
                  <p className="text-sm font-bold text-slate-400">Operação 100% Digital</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-black text-sgs-navy mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  Suporte Técnico
                </h4>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                  Já é cliente e precisa de ajuda técnica? Acesse nossa central de ajuda ou abra um chamado diretamente pelo seu dashboard.
                </p>
                <button className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-3 group/btn">
                  Acessar Central <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-1000"></div>
            </div>
          </FadeIn>

          {/* Form Side - Refined */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-16 shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8 relative z-10"
                  >
                    {/* Honeypot field (hidden from users) */}
                    <div className="hidden" aria-hidden="true">
                      <input 
                        type="text" 
                        name="website" 
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-primary" /> Nome
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="Seu nome completo"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <Building className="w-3.5 h-3.5 text-primary" /> Empresa
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="Nome da sua empresa"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-primary" /> E-mail Corporativo
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="seu@email.com.br"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-primary" /> WhatsApp
                      </label>
                      <input 
                        required
                        type="tel" 
                        placeholder="(11) 99999-9999"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all text-sgs-navy"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Como podemos ajudar?</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Conte-nos um pouco sobre sua necessidade técnica ou comercial..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all resize-none text-sgs-navy"
                      ></textarea>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 text-lg group/btn"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <>Enviar Mensagem <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                    <p className="text-[10px] font-bold text-center text-slate-400 uppercase tracking-widest">
                      Segurança e Privacidade Garantidas
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 relative z-10"
                  >
                    <div className="w-20 h-20 bg-sgs-green/10 text-sgs-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground mb-8">
                      Obrigado pelo contato. Nossa equipe analisará sua solicitação e retornará em breve para o e-mail informado.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
