"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Message = {
  role: "user" | "bot";
  content: string;
};

const initialMessages: Message[] = [
  {
    role: "bot",
    content:
      "Olá! Eu sou a Sophie, sua assistente SST. Como posso te ajudar hoje?",
  },
];

const responseMap: Record<string, string> = {
  apr: "Para criar uma APR eficiente, siga esta estrutura:\n\n1. Identifique a atividade e o local\n2. Liste cada etapa do serviço\n3. Associe os riscos potenciais (físicos, químicos, biológicos, ergonômicos, mecânicos)\n4. Defina medidas de controle para cada risco\n5. Atribua responsáveis e prazo\n6. Registre as evidências (fotos, assinaturas)\n\nNo SGS, você pode gerar a APR a partir de um template e vincular fotos, assinaturas e observações diretamente no documento. Quer que eu gere um rascunho para uma atividade específica?",
  dds: "O DDS (Diálogo Diário de Segurança) é uma conversa de 10 a 15 minutos sobre segurança antes do início da jornada.\n\nTemas sugeridos para esta semana:\n• Segunda: Uso correto de EPIs\n• Terça: Prevenção de quedas (NR-35)\n• Quarta: Segurança com eletricidade (NR-10)\n• Quinta: Ordem e limpeza no ambiente\n• Sexta: Análise de riscos da semana\n\nNo SGS, você pode registrar o DDS, vincular a lista de participantes e anexar a foto do momento. Também gero o conteúdo completo para você.",
};

function getBotResponse(text: string): string {
  const prompt = text.toLowerCase();
  if (prompt.includes("apr") || prompt.includes("análise preliminar") || prompt.includes("analise preliminar")) return responseMap.apr;
  if (prompt.includes("dds") || prompt.includes("diálogo") || prompt.includes("dialogo")) return responseMap.dds;
  if (prompt.includes("pt") || prompt.includes("permissão") || prompt.includes("permissao")) {
    return "Para emitir uma Permissão de Trabalho (PT), você precisa:\n\n1. Descrever a atividade crítica\n2. Identificar a área e equipamentos envolvidos\n3. Listar riscos específicos da atividade\n4. Definir controles obrigatórios (bloqueio, sinalização, EPIs)\n5. Estabelecer validade da permissão\n6. Coletar assinaturas do executor e do responsável\n\nPosso gerar um rascunho de PT para: trabalho em altura, espaço confinado, eletricidade, solda ou escavação.";
  }
  if (prompt.includes("altura") || prompt.includes("nr-35") || prompt.includes("nr35")) {
    return "NR-35 - Trabalho em Altura\n\nPontos críticos de conformidade:\n\n1. Análise de Risco obrigatória antes da atividade\n2. Capacitação mínima de 8 horas para trabalhadores\n3. EPIs: cinto tipo paraquedista, talabarte duplo, absorvedor de energia\n4. Ancoragem deve suportar 1.500 kg por trabalhador\n5. Emergência: plano de resgate documentado\n6. ASO válido para trabalho em altura\n\nO SGS ajuda a controlar treinamentos, ASOs, PTs e evidências de conformidade. Quer gerar um checklist de verificação?";
  }
  if (prompt.includes("epi") || prompt.includes("equipamento")) {
    return "Gestão de EPIs\n\nPara um controle eficaz de EPIs:\n\n1. Catálogo: cadastre todos os tipos de EPI com CA válido\n2. Entrega: registre a data, usuário e lote\n3. Validade: acompanhe vencimento e necessidade de substituição\n4. Inspeção: checklist visual periódico dos equipamentos\n5. Treinamento: comprove que o trabalhador foi orientado sobre o uso\n\nNo SGS, cada entrega de EPI fica vinculada ao trabalhador com assinatura digital e foto do equipamento.";
  }
  if (prompt.includes("checklist") || prompt.includes("inspeção") || prompt.includes("inspecao")) {
    return "Checklists de Inspeção\n\nTipos de checklist que você pode criar no SGS:\n\n• Diário: inspeção rápida de ferramentas e EPIs\n• Semanal: condições do ambiente e sinalização\n• Mensal: máquinas, equipamentos e instalações\n• Por atividade: checklist específico para APR/PT\n\nCada item pode ter: aprovado/reprovado/N/A, foto de evidência e observação do inspetor. Resultados geram relatórios automáticos.";
  }
  if (prompt.includes("relatório") || prompt.includes("relatorio") || prompt.includes("mensal")) {
    return "Relatório Mensal SST\n\nEstrutura sugerida:\n\n1. Resumo executivo: indicadores do período\n2. Documentos: quantidade de APR, DDS, PT, inspeções realizadas\n3. Pendências: itens em aberto e vencidos\n4. Treinamentos: realizados e programados\n5. EPIs: entregas, vencimentos e substituições\n6. Incidentes: registros e ações corretivas\n7. Anexos: evidências e relatórios de auditoria\n\nNo SGS, este relatório é gerado automaticamente com dados do período selecionado.";
  }
  if (prompt.includes("treinamento") || prompt.includes("curso") || prompt.includes("exame")) {
    return "Gestão de Treinamentos e Exames\n\nAcompanhamento:\n\n1. Catálogo de cursos: cadastre treinamentos obrigatórios (NR-35, NR-10, NR-33, etc.)\n2. Matriz por função: vincule treinamentos necessários para cada cargo\n3. Controle de vencimentos: alertas automáticos de expiração\n4. ASO: vincule exames periódicos, admissionais e demissionais\n5. Evidências: armazene certificados e atestados digitalizados\n\nO SGS envia notificações antes do vencimento para evitar retrabalho.";
  }
  if (prompt.includes("auditoria") || prompt.includes("fiscalização") || prompt.includes("fiscalizacao")) {
    return "Preparação para Auditoria\n\nCom o SGS, você tem:\n\n1. Histórico completo de cada documento (quem criou, aprovou, alterou)\n2. Evidências organizadas por empresa, obra e data\n3. PDF consolidado pronto para apresentação\n4. Trilha forense de todas as ações no sistema\n5. Pendências mapeadas com status e responsável\n\nResposta a auditoria: de dias para horas. Tudo que o fiscal precisa está a dois cliques de distância.";
  }
  if (prompt.includes("pgr") || prompt.includes("gerenciamento de risco")) {
    return "GRO/PGR - Gerenciamento de Riscos Ocupacionais\n\nEtapas para implementação:\n\n1. Levantamento de perigos por setor/atividade\n2. Avaliação de riscos (probabilidade x severidade)\n3. Classificação e priorização\n4. Plano de ação com responsáveis e prazos\n5. Monitoramento contínuo e revisão periódica\n6. Registro de todas as etapas para auditoria\n\nO SGS permite vincular cada risco identificado aos documentos de SST correspondentes.";
  }
  if (prompt.includes("começar") || prompt.includes("comecar") || prompt.includes("iniciar") || prompt.includes("implantação") || prompt.includes("implantacao")) {
    return "Como implantar o SGS na sua empresa\n\nPasso a passo:\n\n1. Diagnóstico: mapeamos seus processos, documentos e fluxos atuais\n2. Configuração: cadastramos empresas, unidades, usuários e permissões\n3. Módulos prioritários: começamos com as funcionalidades mais urgentes\n4. Treinamento: sua equipe aprende o fluxo completo\n5. Acompanhamento: suporte na transição das planilhas para o sistema\n6. Expansão: adicionamos novos módulos conforme a maturidade\n\nQuer agendar uma conversa para entender como seria na sua operação?";
  }
  if (prompt.includes("obrigado") || prompt.includes("valeu") || prompt.includes("thanks")) {
    return "Por nada! Fico feliz em ajudar. Se tiver mais dúvidas sobre SST ou sobre o SGS, é só perguntar. Estou aqui para apoiar sua rotina de segurança do trabalho.";
  }
  if (prompt.includes("oi") || prompt.includes("olá") || prompt.includes("ola") || prompt.includes("bom dia") || prompt.includes("boa tarde") || prompt.includes("boa noite")) {
    return "Olá! Como posso ajudar hoje?\n\nPosso te explicar sobre:\n• APR, DDS e PT\n• Gestão de EPIs\n• NR-35 e trabalho em altura\n• Checklists e inspeções\n• Relatórios SST\n• Implantação do SGS\n\nÉ só perguntar!";
  }
  return "Entendi sua pergunta! No momento, sou uma demonstração da Sophie IA e posso falar sobre:\n\n• APR, DDS e PT\n• Permissão de Trabalho (NR-35)\n• Gestão de EPIs\n• Checklists e inspeções\n• Relatórios mensais SST\n• Treinamentos e exames\n• Preparação para auditorias\n• GRO/PGR\n\nPode perguntar sobre qualquer um desses tópicos! No sistema real, a Sophie analisa todo o contexto operacional da sua empresa com acesso aos dados autorizados.";
}

export const suggestedPrompts = [
  "Como criar uma APR?",
  "O que é DDS?",
  "Gerar rascunho de PT",
  "Analise o risco de altura",
  "Checklist de EPI",
  "NR-35 atualização",
  "Relatório mensal SST",
  "Inspeção de campo",
];

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleSend = useCallback((text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
    }, 1500);
  }, []);

  return {
    messages,
    input,
    setInput,
    isTyping,
    chatEndRef,
    handleSend,
  };
}
