import type { Metadata } from "next";
import { Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | SGS",
  description: "Como o site institucional do SGS trata dados de contato, cookies, analytics, newsletter e terceiros.",
};

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-sgs-navy">Política de Privacidade</h1>
        </div>

        <div className="prose prose-slate lg:prose-lg max-w-none">
          <p className="text-xl text-slate-600 mb-8">
            Esta política se aplica ao site institucional do SGS. O app operacional possui fluxos próprios de autenticação, permissões, auditoria e tratamento de dados contratados.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-12 mb-4">1. Dados coletados no site</h2>
          <p className="text-slate-600 mb-6">
            Podemos coletar dados informados voluntariamente em formulários de contato, newsletter e download de materiais, como nome, empresa, e-mail, telefone/WhatsApp e mensagem enviada.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">2. Finalidades</h2>
          <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
            <li>Responder solicitações comerciais e técnicas enviadas pelo visitante.</li>
            <li>Enviar materiais solicitados e comunicações técnicas, quando autorizadas.</li>
            <li>Medir desempenho do site com analytics, somente após consentimento quando aplicável.</li>
            <li>Melhorar clareza, navegação, conteúdo institucional e conversão do site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">3. Cookies e analytics</h2>
          <p className="text-slate-600 mb-6">
            Usamos cookies necessários para funcionamento do site e, mediante autorização, cookies de analytics/marketing. O visitante pode alterar sua preferência pelo botão Cookies no rodapé.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">4. Terceiros</h2>
          <p className="text-slate-600 mb-6">
            O site pode carregar provedores externos para analytics, proteção anti-abuso, imagens públicas e links para o app SGS. Esses terceiros podem tratar dados técnicos como IP, user-agent e referrer conforme suas próprias políticas.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">5. Segurança e retenção</h2>
          <p className="text-slate-600 mb-6">
            Aplicamos controles proporcionais para reduzir exposição indevida de dados. Dados de contato devem ser mantidos apenas pelo tempo necessário para atendimento comercial, obrigações legais ou relação contratual.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">6. Direitos do titular</h2>
          <p className="text-slate-600 mb-6">
            Você pode solicitar acesso, correção, descadastro ou exclusão de dados de contato pelo e-mail contato@sgsseguranca.com.br.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">7. Materiais e conteúdo de SST</h2>
          <p className="text-slate-600 mb-6">
            Materiais gratuitos e textos técnicos são informativos e devem ser revisados pelo responsável técnico da empresa antes de uso operacional.
          </p>

          <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-slate-500 text-sm">
            <p className="mb-3 font-bold text-sgs-navy">Última atualização: 25/04/2026</p>
            <p>
              Consulte também os <Link href="/termos" className="font-bold text-primary underline">Termos de Uso</Link> do site institucional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
