"use client";

import { usePathname } from "next/navigation";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

const pathLabels: Record<string, string> = {
  "/": "Início",
  "/modulos": "Módulos",
  "/governanca": "Governança Documental",
  "/integracoes": "Integrações",
  "/sophie": "IA Sophie",
  "/precos": "Planos e Preços",
  "/seguranca": "Segurança e LGPD",
  "/sobre": "Sobre o SGS",
  "/contato": "Contato",
  "/blog": "Insights",
  "/recursos": "Recursos Gratuitos",
  "/privacidade": "Política de Privacidade",
  "/termos": "Termos de Uso",
  "/comparativo": "SGS vs Planilhas",
  "/software-apr-digital": "APR Digital",
  "/software-dds-digital": "DDS Digital",
  "/software-permissao-trabalho": "Permissão de Trabalho",
  "/software-evidencias-campo": "Evidências de Campo",
  "/software-auditoria-sst": "Auditoria SST",
  "/software-inspecoes": "Inspeções de Segurança",
  "/software-checklists-digitais": "Checklists Digitais",
  "/software-gestao-sst": "Gestão de SST",
  "/parceiros": "Parceiros",
  "/clientes": "Clientes",
  "/casos-de-sucesso": "Casos de Sucesso",
  "/obrigado": "Solicitação Recebida",
};

export function BreadcrumbSchema() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Início", item: "/" }];

  let accumulated = "";
  for (const segment of segments) {
    accumulated += `/${segment}`;
    const label = pathLabels[accumulated] || segment;
    items.push({ name: label, item: accumulated });
  }

  return <StructuredData data={getBreadcrumbSchema(items)} />;
}
