import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/termos")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Termos de Uso — SGS Segurança" },
      {
        name: "description",
        content:
          "Termos de Uso do SGS Segurança para acesso ao site, uso da plataforma, responsabilidades, segurança e condições operacionais.",
      },
    ],
  }),
});

const termsSections = [
  {
    title: "1. Aceite dos termos",
    body: [
      "Ao acessar o site, solicitar contato, contratar ou utilizar a plataforma SGS Segurança, o usuário declara ter lido e aceito estes Termos de Uso, além da Política de Privacidade aplicável.",
      "Se você utiliza o SGS em nome de uma empresa, declara possuir autorização para representar essa empresa ou para operar a conta conforme as permissões concedidas.",
    ],
  },
  {
    title: "2. Objeto da plataforma",
    body: [
      "O SGS Segurança oferece recursos digitais para apoiar a gestão de SST, incluindo registros operacionais, documentos, evidências, aprovações, assinaturas, indicadores, acompanhamento de pendências e rotinas de conformidade.",
      "A plataforma é uma ferramenta de gestão e rastreabilidade. A responsabilidade técnica por procedimentos de SST, análise de riscos, cumprimento de normas e decisões operacionais permanece com a empresa contratante e seus profissionais habilitados.",
    ],
  },
  {
    title: "3. Cadastro e credenciais",
    body: [
      "Usuários devem fornecer informações corretas, manter credenciais em sigilo e comunicar qualquer suspeita de acesso indevido.",
      "A empresa contratante é responsável por administrar usuários, perfis, permissões, obras, unidades e dados inseridos em seu ambiente, observando o princípio do menor privilégio.",
    ],
  },
  {
    title: "4. Uso permitido",
    body: [
      "O SGS deve ser usado apenas para finalidades lícitas, compatíveis com gestão de SST e com as permissões concedidas ao usuário.",
      "É proibido tentar acessar dados de outro tenant, burlar autenticação, explorar falhas, interferir na disponibilidade do serviço, inserir conteúdo ilícito ou usar a plataforma para finalidade incompatível com estes termos.",
    ],
  },
  {
    title: "5. Dados e documentos",
    body: [
      "A empresa contratante é responsável pela legitimidade, qualidade e atualização dos dados inseridos por seus usuários, incluindo documentos, evidências, registros de trabalhadores e informações de campo.",
      "O SGS pode registrar trilhas de auditoria, metadados, datas, usuários e eventos necessários para rastreabilidade, segurança, suporte, cumprimento contratual e defesa de direitos.",
    ],
  },
  {
    title: "6. Privacidade e LGPD",
    body: [
      "O tratamento de dados pessoais segue a Política de Privacidade e as regras contratuais aplicáveis. O usuário deve evitar inserir dados pessoais desnecessários ou fora do escopo da operação contratada.",
      "Dados sensíveis de trabalhadores devem ser tratados com cuidado reforçado, acesso restrito e finalidade compatível com gestão de SST, obrigações legais, segurança operacional ou execução contratual.",
    ],
  },
  {
    title: "7. Disponibilidade e suporte",
    body: [
      "O SGS busca manter a plataforma disponível e segura, mas podem ocorrer interrupções por manutenção, incidentes, atualizações, indisponibilidade de provedores externos ou fatores fora do controle razoável.",
      "Canais, prazos e níveis de suporte podem variar conforme contrato, plano contratado ou acordo comercial vigente.",
    ],
  },
  {
    title: "8. Integrações e serviços externos",
    body: [
      "Funcionalidades que dependem de provedores externos, como hospedagem, armazenamento, envio de mensagens, monitoramento, calendário ou inteligência artificial, podem estar sujeitas a limites técnicos, políticas e disponibilidade desses provedores.",
      "Quando houver uso de IA, a plataforma deve aplicar controles de minimização, consentimento quando necessário e sanitização de dados antes do envio a provedores externos.",
    ],
  },
  {
    title: "9. Propriedade intelectual",
    body: [
      "A marca SGS Segurança, interface, código, fluxos, layout, textos, componentes e demais elementos da plataforma pertencem aos seus titulares e não podem ser copiados, reproduzidos ou explorados sem autorização.",
      "Os dados operacionais inseridos pela empresa contratante permanecem vinculados ao respectivo tenant e ao contrato aplicável.",
    ],
  },
  {
    title: "10. Suspensão e encerramento",
    body: [
      "O acesso pode ser suspenso ou limitado em caso de violação destes termos, risco de segurança, uso abusivo, inadimplência contratual, ordem legal ou necessidade de proteção da plataforma e de seus usuários.",
      "Após encerramento contratual, a retenção, exportação ou exclusão de dados seguirá o contrato, a Política de Privacidade e obrigações legais aplicáveis.",
    ],
  },
  {
    title: "11. Alterações dos termos",
    body: [
      "Estes termos podem ser atualizados para refletir mudanças na plataforma, em requisitos legais, em integrações ou em condições comerciais. A versão vigente ficará disponível nesta página.",
    ],
  },
];

function TermsPage() {
  return (
    <LegalPage
      badge="Condições de uso"
      title="Termos de Uso"
      description="Condições aplicáveis ao acesso ao site e ao uso da plataforma SGS Segurança para gestão digital de SST, documentos, evidências e rotinas operacionais."
      lastUpdated="13 de maio de 2026"
      sections={termsSections}
      relatedLink={{ to: "/privacidade", label: "Ver Política de Privacidade" }}
    />
  );
}
