# TASKS — Site Institucional SGS

## Regras de execução

- Este projeto é somente o site institucional/marketing do SGS.
- Não implementar módulos operacionais de APR, DDS, PT, ARR, checklist, relatórios, dashboard, login ou gestão de usuários.
- Não alterar `.env`.
- Não expor secrets.
- Não instalar dependências sem justificativa e aprovação.
- Usar módulos do SGS apenas como narrativa comercial.
- Respeitar dependências e status antes de executar qualquer tarefa.

## Status permitidos

- Pendente
- Em andamento
- Bloqueada
- Concluída
- Revisão necessária

## Tarefas

| ID | Tarefa | Responsável | Dependências | Status | Escopo | Critério de aceite |
|---|---|---|---|---|---|---|
| T01 | Mapear estrutura real do site | `project_mapper` | Nenhuma | Concluída | Rotas, páginas, componentes, estilos, assets, imagens, vídeos, animações e pontos frágeis | Relatório com caminhos de arquivos e riscos antes de qualquer edição |
| T02 | Revisar identidade visual e motion | `brand_motion_director` | T01 | Concluída | Hero, hierarquia visual, paleta, tipografia, imagens, vídeos, animações, responsividade e percepção enterprise | Recomendações priorizadas, sem edição de arquivos |
| T03 | Revisar SEO, copy e conversão | `seo_copy_strategist` | T01 | Concluída | Headline, subtítulo, CTAs, meta title, meta description, palavras-chave, seções comerciais e prova de autoridade | Recomendações por seção, sem promessas exageradas e sem edição de arquivos |
| T04 | Consolidar plano de implementação | Agente principal | T01, T02, T03 | Concluída | Plano objetivo por arquivo, impacto, risco e critério de aceite | Plano aprovado antes de qualquer implementação |
| T05 | Implementar melhorias aprovadas | `frontend_implementer` | T04 aprovado | Concluída | Apenas mudanças frontend do site institucional aprovadas no plano | Arquivos alterados listados, sem dependência nova não aprovada e sem mudança em `.env` |
| T06 | Revisar LGPD, privacidade e exposição de dados | `appsec_lgpd_reviewer` | T05 | Concluída | Cookies, analytics, scripts externos, formulários, links externos, termos, privacidade e variáveis públicas | Achados classificados por severidade com evidência e recomendação |
| T07 | Validar build, qualidade e regressões | `qa_build_reviewer` | T05, T06 | Concluída | Lint, build, responsividade, acessibilidade básica, SEO básico e regressões visuais | Checklist final com comandos executados ou justificativa quando não executados |
| T08 | Entregar relatório final | Agente principal | T07 | Concluída | Resumo da entrega, arquivos alterados, riscos remanescentes, validações e próximos passos | Relatório objetivo e rastreável |
