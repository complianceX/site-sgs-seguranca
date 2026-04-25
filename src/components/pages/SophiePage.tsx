"use client";

import { 
  Zap, 
  Brain, 
  MessageSquare, 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Sparkles,
  BarChart3,
  CheckCircle2,
  Send,
  Bot,
  Loader2,
  ArrowRight
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const initialMessages = [
  { role: "bot", content: "Olá! Eu sou a Sophie, sua assistente SST. Como posso te ajudar hoje?" },
];

const suggestedPrompts = [
  "Como criar uma APR?",
  "O que é DDS?",
  "Gerar rascunho de PT",
  "Analise o risco de altura"
];

export function SophiePage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let response = "Desculpe, como sou um simulador, só posso responder a alguns tópicos básicos. No sistema real, eu analisaria todo o seu contexto operacional!";
      
      if (text.toLowerCase().includes("apr")) {
        response = "Para criar uma APR, você deve identificar a atividade, os riscos associados e os controles necessários. Eu posso te ajudar gerando um rascunho baseado na descrição da tarefa!";
      } else if (text.toLowerCase().includes("dds")) {
        response = "O DDS (Diálogo Diário de Segurança) é uma conversa curta sobre segurança antes do início do trabalho. Eu posso sugerir temas semanais e até gerar o conteúdo completo para você.";
      } else if (text.toLowerCase().includes("altura")) {
        response = "Trabalho em altura requer atenção redobrada à NR-35. Recomendo verificar cintos de segurança, pontos de ancoragem e a saúde física do trabalhador antes de iniciar.";
      }

      setMessages(prev => [...prev, { role: "bot", content: response }]);
    }, 1500);
  };

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        {/* Hero - Refined */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              IA Assistiva para SST
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-sgs-navy mb-10 tracking-tighter leading-[1.05] text-balance">
              Conheça a <span className="text-primary">Sophie IA</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12 text-pretty">
              Sua assistente inteligente desenhada especificamente para a segurança do trabalho. 
              A Sophie apoia a operação, reduz o trabalho manual e gera insights valiosos em tempo real.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-5 bg-sgs-navy text-white rounded-2xl font-black text-lg hover:bg-primary transition-all shadow-xl shadow-sgs-navy/10 flex items-center gap-3 group">
                Ver Demonstração <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-premium overflow-hidden h-[600px] flex flex-col relative group">
              <div className="p-6 bg-sgs-navy text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Bot className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black tracking-tight leading-none mb-1">Sophie IA</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-sgs-green rounded-full animate-pulse"></div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Online agora</p>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white/30 rounded-full mx-0.5"></div>
                  <div className="w-1 h-1 bg-white/30 rounded-full mx-0.5"></div>
                  <div className="w-1 h-1 bg-white/30 rounded-full mx-0.5"></div>
                </div>
              </div>
              
              <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-slate-50/30">
                {messages.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={cn(
                      "max-w-[85%] p-6 rounded-[1.5rem] text-sm font-medium leading-relaxed shadow-sm",
                      m.role === "user" 
                        ? "bg-primary text-white rounded-tr-none shadow-primary/10" 
                        : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
                    )}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white p-6 rounded-[1.5rem] rounded-tl-none flex items-center gap-3 border border-slate-100 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sophie está pensando...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-6 border-t border-slate-100 bg-white">
                <div className="flex flex-wrap gap-2 mb-6">
                  {suggestedPrompts.map((p, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(p)}
                      className="text-[10px] font-black uppercase tracking-widest bg-slate-50 border border-slate-100 px-4 py-2 rounded-full hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all text-slate-400"
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                    placeholder="Pergunte algo à Sophie..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-[1.25rem] px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all pr-14 text-sgs-navy"
                  />
                  <button 
                    onClick={() => handleSend(input)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Capabilities - Refined */}
        <div className="mb-32">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-sgs-navy tracking-tight leading-tight">O que a Sophie faz por você?</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">Potencialize sua gestão com ferramentas inteligentes desenhadas para o dia a dia.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Brain, 
                title: "Rascunhos Assistidos", 
                desc: "Geração automática de rascunhos para APR, PT, DDS e Checklists baseados no contexto da atividade." 
              },
              { 
                icon: MessageSquare, 
                title: "Insights Operacionais", 
                desc: "Análises rápidas de pendências e sugestões de melhoria nos processos de segurança." 
              },
              { 
                icon: ShieldCheck, 
                title: "Análise de Imagem", 
                desc: "Apoio na identificação visual de riscos e conformidade em fotos enviadas ao sistema." 
              },
              { 
                icon: BarChart3, 
                title: "Relatórios IA", 
                desc: "Consolidação mensal assistida para criar visões executivas claras e objetivas." 
              }
            ].map((cap, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sgs hover:shadow-premium transition-all duration-700 h-full group">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                    <cap.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-sgs-navy tracking-tight">{cap.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Security & Ethics Section */}
        <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-8 text-center">IA Ética, Segura e Privada</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { icon: Lock, title: "Consentimento Explícito", text: "O uso da Sophie requer consentimento do usuário e do tenant. Você tem controle total." },
                { icon: EyeOff, title: "Sanitização de Dados", text: "Dados sensíveis (PII) são removidos antes de qualquer processamento por IA, garantindo a privacidade." },
                { icon: CheckCircle2, title: "Assistência, não Decisão", text: "A IA apoia a análise, mas a decisão final permanece sempre com o profissional de SST." },
                { icon: ShieldCheck, title: "Histórico Auditável", text: "Todo uso de IA é registrado e possui política de retenção configurável para governança." }
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1} className="flex gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
