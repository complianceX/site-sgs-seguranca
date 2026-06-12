export type ResourceFile = typeof resourceFiles[number];

export const resourceFiles = [
  {
    id: 5,
    title: "E-book: O Guia da Rastreabilidade em SST",
    type: "E-book (PDF)",
    desc: "Aprenda como transformar APR, DDS e PT em ativos de segurança jurídica e vencer auditorias com evidências digitais.",
    icon: "Shield",
    color: "primary" as const,
    featured: true,
    fileName: "guia-rastreabilidade-sst.pdf",
    mimeType: "application/pdf",
  },
  {
    id: 1,
    title: "Template APR Profissional",
    type: "Documento (DOCX)",
    desc: "Modelo completo de Análise Preliminar de Riscos estruturado conforme a NR-01, pronto para preencher.",
    icon: "FileText",
    color: "sgs-green" as const,
    featured: false,
    fileName: "template-apr-profissional.docx",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  {
    id: 2,
    title: "Checklist de Auditoria NR-10",
    type: "Planilha (XLSX)",
    desc: "Planilha automatizada para auditorias de segurança em eletricidade, com pontuação e priorização.",
    icon: "Layout",
    color: "sgs-orange" as const,
    featured: false,
    fileName: "checklist-auditoria-nr10.xlsx",
    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    id: 4,
    title: "Modelo de PT para Altura",
    type: "Documento (PDF)",
    desc: "Permissão de Trabalho específica para atividades críticas em altura, validada por engenheiros de segurança.",
    icon: "FileCheck",
    color: "primary" as const,
    featured: false,
    fileName: "modelo-pt-altura.pdf",
    mimeType: "application/pdf",
  },
];

export function getResourceById(id: number) {
  return resourceFiles.find((r) => r.id === id);
}

export function getResourceFileUrl(fileName: string) {
  return `/resources/${fileName}`;
}
