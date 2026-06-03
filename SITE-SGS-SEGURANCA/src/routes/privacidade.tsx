import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacidade")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — SGS Segurança" },
      {
        name: "description",
        content:
          "Política de Privacidade do SGS Segurança, com informações sobre tratamento de dados pessoais, LGPD, segurança e direitos dos titulares.",
      },
    ],
  }),
});

const privacySections = [
  {
    title: "1. Quem somos",
    body: [
      "O SGS Segurança é uma plataforma digital para gestão de Saúde e Segurança do Trabalho, incluindo documentos operacionais, evidências, assinaturas, indicadores e rotinas de conformidade.",
      "Esta política explica como dados pessoais podem ser tratados no contexto do site institucional, do contato comercial e da operação da plataforma SGS Segurança.",
    ],
  },
  {
    title: "2. Dados que podemos tratar",
    body: [
      "Podemos tratar dados de identificação e contato, como nome, e-mail, telefone, empresa, cargo e informações enviadas voluntariamente por formulários ou canais de atendimento.",
      "Na plataforma operacional, conforme configuração contratada pela empresa cliente, podem existir dados profissionais e dados pessoais de trabalhadores necessários à gestão de SST, como vínculo com obra, função, registros de treinamentos, evidências documentais e informações associadas a documentos de segurança.",
    ],
  },
  {
    title: "3. Finalidades do tratamento",
    body: [
      "Os dados são utilizados para responder contatos, agendar demonstrações, prestar suporte, administrar contas, operar funcionalidades contratadas, gerar documentos, manter rastreabilidade e cumprir obrigações legais ou regulatórias relacionadas à segurança do trabalho.",
      "Também podemos usar dados técnicos de navegação e uso para segurança, prevenção de abuso, melhoria do serviço, diagnóstico de falhas e medição agregada de desempenho.",
    ],
  },
  {
    title: "4. Bases legais",
    body: [
      "O tratamento pode se apoiar em execução de contrato, cumprimento de obrigação legal ou regulatória, legítimo interesse, exercício regular de direitos e consentimento quando este for exigido.",
      "Quando houver uso de recursos de inteligência artificial, o SGS deve observar consentimento aplicável, minimização de dados e sanitização de informações pessoais antes de qualquer envio a provedores externos.",
    ],
  },
  {
    title: "5. Compartilhamento de dados",
    body: [
      "Dados podem ser compartilhados com provedores de infraestrutura, hospedagem, autenticação, monitoramento, comunicação, armazenamento e tecnologia estritamente necessários para disponibilizar e proteger o serviço.",
      "Quando a plataforma for usada por uma empresa cliente, essa empresa pode atuar como controladora dos dados inseridos por seus usuários e trabalhadores, cabendo ao SGS operar os dados conforme contrato, instruções aplicáveis e medidas de segurança acordadas.",
    ],
  },
  {
    title: "6. Segurança e multi-tenancy",
    body: [
      "O SGS adota segregação lógica por tenant, controle de acesso, trilhas de auditoria e práticas de segurança para reduzir riscos de acesso indevido, perda, alteração ou exposição não autorizada.",
      "Nenhuma medida técnica elimina todos os riscos, mas a arquitetura deve preservar o isolamento entre empresas clientes e limitar o acesso aos dados conforme perfil, permissão e necessidade operacional.",
    ],
  },
  {
    title: "7. Retenção e descarte",
    body: [
      "Os dados são mantidos pelo período necessário para cumprir as finalidades informadas, obrigações legais, requisitos contratuais, auditorias, defesa de direitos e continuidade operacional.",
      "Quando aplicável, dados podem ser anonimizados, bloqueados ou excluídos conforme política de retenção, solicitação válida do titular ou encerramento contratual, respeitadas obrigações legais e necessidade de preservação de evidências.",
    ],
  },
  {
    title: "8. Direitos dos titulares",
    body: [
      "Nos termos da LGPD, titulares podem solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade quando aplicável, informação sobre compartilhamento e revisão de decisões automatizadas quando houver.",
      "Solicitações devem ser enviadas para privacidade@sgsseguranca.com.br. Para dados tratados em nome de empresa cliente, a solicitação pode depender de validação ou encaminhamento ao controlador responsável.",
    ],
  },
  {
    title: "9. Cookies e tecnologias similares",
    body: [
      "O site pode usar tecnologias necessárias para funcionamento, segurança, preferências e medição de uso. Cookies não essenciais, quando adotados, devem respeitar transparência e mecanismos de consentimento aplicáveis.",
      "O usuário pode ajustar permissões no navegador, ciente de que algumas funcionalidades podem ser afetadas.",
    ],
  },
  {
    title: "10. Alterações desta política",
    body: [
      "Esta política pode ser atualizada para refletir mudanças legais, técnicas, contratuais ou operacionais. A versão vigente será publicada nesta página com a respectiva data de atualização.",
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <LegalPage
      badge="Privacidade e LGPD"
      title="Política de Privacidade"
      description="Como o SGS Segurança trata dados pessoais em contatos comerciais, uso da plataforma e rotinas digitais de SST, com foco em minimização, rastreabilidade e isolamento por empresa."
      lastUpdated="13 de maio de 2026"
      sections={privacySections}
      relatedLink={{ to: "/termos", label: "Ver Termos de Uso" }}
    />
  );
}
