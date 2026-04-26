import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | SGS",
  description: "Termos de uso do site institucional SGS, materiais gratuitos, demonstrações e conteúdo técnico de SST.",
};

export default function TermosPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-sgs-navy">Termos de Uso</h1>
        </div>

        <div className="prose prose-slate lg:prose-lg max-w-none">
          <p className="text-xl text-slate-600 mb-8">
            Estes termos regulam o uso do site institucional do SGS. O acesso ao app operacional, quando contratado, segue contratos e políticas próprias.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-12 mb-4">1. Finalidade do site</h2>
          <p className="text-slate-600 mb-6">
            O site apresenta informações comerciais, institucionais e educativas sobre o SGS e suas capacidades para gestão de SST.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">2. Conteúdo técnico</h2>
          <p className="text-slate-600 mb-6">
            Artigos, templates, checklists e demonstrações são materiais de apoio. Eles não substituem análise, assinatura ou responsabilidade do profissional legalmente habilitado.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">3. Demonstrações e simulações</h2>
          <p className="text-slate-600 mb-6">
            Simuladores, exemplos de API, chat da Sophie e fluxos de validação pública exibidos no site são ilustrativos, salvo indicação expressa em ambiente contratado.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">4. Materiais gratuitos</h2>
          <p className="text-slate-600 mb-6">
            Materiais baixados pelo site devem ser adaptados à realidade da empresa, às normas aplicáveis e à avaliação do responsável técnico.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">5. Propriedade intelectual</h2>
          <p className="text-slate-600 mb-6">
            Marcas, textos, layouts, imagens, componentes e materiais do SGS não podem ser copiados, revendidos ou redistribuídos sem autorização.
          </p>

          <h2 className="text-2xl font-bold text-sgs-navy mt-8 mb-4">6. Privacidade</h2>
          <p className="text-slate-600 mb-6">
            O tratamento de dados do site está descrito na <Link href="/privacidade" className="font-bold text-primary underline">Política de Privacidade</Link>.
          </p>

          <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-slate-500 text-sm">
            <p className="font-bold text-sgs-navy">Última atualização: 25/04/2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
