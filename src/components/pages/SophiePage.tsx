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
import { FadeIn } from "@/components/animations/FadeIn";
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
  "Analise o risco de altura",
  "Checklist de EPI",
  "NR-35 atualização",
  "Relatório mensal SST",
  "Inspeção de campo"
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
      const prompt = text.toLowerCase();

      let response = "";

      if (prompt.includes("apr") || prompt.includes("análise preliminar") || prompt.includes("analise preliminar")) {
        response = "Para criar uma APR eficiente, siga esta estrutura:\n\n1. Identifique a atividade e o local\n2. Liste cada etapa do serviço\n3. Associe os riscos potenciais (físicos, químicos, biológicos, ergonômicos, mecânicos)\n4. Defina medidas de controle para cada risco\n5. Atribua responsáveis e prazo\n6. Registre as evidências (fotos, assinaturas)\n\nNo SGS, você pode gerar a APR a partir de um template e vincular fotos, assinaturas e observações diretamente no documento. Quer que eu gere um rascunho para uma atividade específica?";
      } else if (prompt.includes("dds") || prompt.includes("diálogo") || prompt.includes("dialogo")) {
        response = "O DDS (Diálogo Diário de Segurança) é uma conversa de 10 a 15 minutos sobre segurança antes do início da jornada.\n\nTemas sugeridos para esta semana:\n• Segunda: Uso correto de EPIs\n• Terça: Prevenção de quedas (NR-35)\n• Quarta: Segurança com eletricidade (NR-10)\n• Quinta: Ordem e limpeza no ambiente\n• Sexta: Análise de riscos da semana\n\nNo SGS, você pode registrar o DDS, vincular a lista de participantes e anexar a foto do momento. Também gero o conteúdo completo para você.";
      } else if (prompt.includes("pt") || prompt.includes("permissão") || prompt.includes("permissao")) {
        response = "Para emitir uma Permissão de Trabalho (PT), você precisa:\n\n1. Descrever a atividade crítica\n2. Identificar a área e equipamentos envolvidos\n3. Listar riscos específicos da atividade\n4. Definir controles obrigatórios (bloqueio, sinalização, EPIs)\n5. Estabelecer validade da permissão\n6. Coletar assinaturas do executor e do responsável\n\nPosso gerar um rascunho de PT para: trabalho em altura, espaço confinado, eletricidade, solda ou escavação.";
      } else if (prompt.includes("altura") || prompt.includes("nr-35") || prompt.includes("nr35")) {
        response = "NR-35 - Trabalho em Altura\n\nPontos críticos de conformidade:\n\n1. Análise de Risco obrigatória antes da atividade\n2. Capacitação mínima de 8 horas para trabalhadores\n3. EPIs: cinto tipo paraquedista, talabarte duplo, absorvedor de energia\n4. Ancoragem deve suportar 1.500 kg por trabalhador\n5. Emergência: plano de resgate documentado\n6. ASO válido para trabalho em altura\n\nO SGS ajuda a controlar treinamentos, ASOs, PTs e evidências de conformidade. Quer gerar um checklist de verificação?";
      } else if (prompt.includes("epi") || prompt.includes("equipamento")) {
        response = "Gestão de EPIs\n\nPara um controle eficaz de EPIs:\n\n1. Catálogo: cadastre todos os tipos de EPI com CA válido\n2. Entrega: registre a data, usuário e lote\n3. Validade: acompanhe vencimento e necessidade de substituição\n4. Inspeção: checklist visual periódico dos equipamentos\n5. Treinamento: comprove que o trabalhador foi orientado sobre o uso\n\nNo SGS, cada entrega de EPI fica vinculada ao trabalhador com assinatura digital e foto do equipamento.";
      } else if (prompt.includes("checklist") || prompt.includes("inspeção") || prompt.includes("inspecao")) {
        response = "Checklists de Inspeção\n\nTipos de checklist que você pode criar no SGS:\n\n• Diário: inspeção rápida de ferramentas e EPIs\n• Semanal: condições do ambiente e sinalização\n• Mensal: máquinas, equipamentos e instalações\n• Por atividade: checklist específico para APR/PT\n\nCada item pode ter: aprovado/reprovado/N/A, foto de evidência e observação do inspetor. Resultados geram relatórios automáticos.";
      } else if (prompt.includes("relatório") || prompt.includes("relatorio") || prompt.includes("mensal")) {
        response = "Relatório Mensal SST\n\nEstrutura sugerida:\n\n1. Resumo executivo: indicadores do período\n2. Documentos: quantidade de APR, DDS, PT, inspeções realizadas\n3. Pendências: itens em aberto e vencidos\n4. Treinamentos: realizados e programados\n5. EPIs: entregas, vencimentos e substituições\n6. Incidentes: registros e ações corretivas\n7. Anexos: evidências e relatórios de auditoria\n\nNo SGS, este relatório é gerado automaticamente com dados do período selecionado.";
      } else if (prompt.includes("treinamento") || prompt.includes("curso") || prompt.includes("exame")) {
        response = "Gestão de Treinamentos e Exames\n\nAcompanhamento:\n\n1. Catálogo de cursos: cadastre treinamentos obrigatórios (NR-35, NR-10, NR-33, etc.)\n2. Matriz por função: vincule treinamentos necessários para cada cargo\n3. Controle de vencimentos: alertas automáticos de expiração\n4. ASO: vincule exames periódicos, admissionais e demissionais\n5. Evidências: armazene certificados e atestados digitalizados\n\nO SGS envia notificações antes do vencimento para evitar retrabalho.";
      } else if (prompt.includes("auditoria") || prompt.includes("fiscalização") || prompt.includes("fiscalizacao")) {
        response = "Preparação para Auditoria\n\nCom o SGS, você tem:\n\n1. Histórico completo de cada documento (quem criou, aprovou, alterou)\n2. Evidências organizadas por empresa, obra e data\n3. PDF consolidado pronto para apresentação\n4. Trilha forense de todas as ações no sistema\n5. Pendências mapeadas com status e responsável\n\nResposta a auditoria: de dias para horas. Tudo que o fiscal precisa está a dois cliques de distância.";
      } else if (prompt.includes("gro") || prompt.includes("pgr") || prompt.includes("gerenciamento de risco")) {
        response = "GRO/PGR - Gerenciamento de Riscos Ocupacionais\n\nEtapas para implementação:\n\n1. Levantamento de perigos por setor/atividade\n2. Avaliação de riscos (probabilidade x severidade)\n3. Classificação e priorização\n4. Plano de ação com responsáveis e prazos\n5. Monitoramento contínuo e revisão periódica\n6. Registro de todas as etapas para auditoria\n\nO SGS permite vincular cada risco identificado aos documentos de SST correspondentes.";
      } else if (prompt.includes("começar") || prompt.includes("comecar") || prompt.includes("iniciar") || prompt.includes("implantação") || prompt.includes("implantacao")) {
        response = "Como implantar o SGS na sua empresa\n\nPasso a passo:\n\n1. Diagnóstico: mapeamos seus processos, documentos e fluxos atuais\n2. Configuração: cadastramos empresas, unidades, usuários e permissões\n3. Módulos prioritários: começamos com as funcionalidades mais urgentes\n4. Treinamento: sua equipe aprende o fluxo completo\n5. Acompanhamento: suporte na transição das planilhas para o sistema\n6. Expansão: adicionamos novos módulos conforme a maturidade\n\nQuer agendar uma conversa para entender como seria na sua operação?";
      } else if (prompt.includes("obrigado") || prompt.includes("valeu") || prompt.includes("thanks")) {
        response = "Por nada! Fico feliz em ajudar. Se tiver mais dúvidas sobre SST ou sobre o SGS, é só perguntar. Estou aqui para apoiar sua rotina de segurança do trabalho.";
      } else if (prompt.includes("oi") || prompt.includes("olá") || prompt.includes("ola") || prompt.includes("bom dia") || prompt.includes("boa tarde") || prompt.includes("boa noite")) {
        response = "Olá! Como posso ajudar hoje?\n\nPosso te explicar sobre:\n• APR, DDS e PT\n• Gestão de EPIs\n• NR-35 e trabalho em altura\n• Checklists e inspeções\n• Relatórios SST\n• Implantação do SGS\n\nÉ só perguntar!";
      } else {
        response = "Entendi sua pergunta! No momento, sou uma demonstração da Sophie IA e posso falar sobre:\n\n• APR, DDS e PT\n• Permissão de Trabalho (NR-35)\n• Gestão de EPIs\n• Checklists e inspeções\n• Relatórios mensais SST\n• Treinamentos e exames\n• Preparação para auditorias\n• GRO/PGR\n\nPode perguntar sobre qualquer um desses tópicos! No sistema real, a Sophie analisa todo o contexto operacional da sua empresa com acesso aos dados autorizados.";
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
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Demonstração ilustrativa. A Sophie real opera dentro da plataforma SGS com contexto autorizado.
            </p>
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
