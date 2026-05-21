const postIsoDates: Record<string, string> = {
  "futuro-do-sst-ia-aprs": "2026-04-23",
  "ajn-consultoria-engenharia-qssma-sst-engenharia": "2026-04-28",
  "pgr-programa-gerenciamento-riscos-ajn": "2026-04-27",
  "pcmso-aso-saude-ocupacional-ajn": "2026-04-26",
  "esocial-sst-eventos-s2220-s2240-ajn": "2026-04-25",
  "avcb-clcb-regularizacao-corpo-de-bombeiros-ajn": "2026-04-24",
  "treinamentos-nr-capacitacoes-obrigatorias-ajn": "2026-04-22",
  "laudos-insalubridade-periculosidade-ajn": "2026-04-21",
  "gestao-ambiental-residuos-sustentabilidade-ajn": "2026-04-19",
  "projetos-eletricos-seguranca-eficiencia-ajn": "2026-04-17",
  "pmoc-climatizacao-refrigeracao-ajn": "2026-04-16",
  "guia-validacao-publica-documentos-lgpd": "2026-04-20",
};

export function getPostIsoDate(slug: string) {
  return postIsoDates[slug] ?? "2026-04-01";
}
