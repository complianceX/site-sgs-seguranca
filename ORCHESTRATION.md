# ORCHESTRATION — SGS Site

## Regra principal
Sempre ler primeiro:
1. `AGENTS.md`
2. `TASK_MAP.md`
3. `TASKS.md` (se existir)
4. `.codex/agents/*`

## Fluxo de execução
1. O agente `project_mapper` executa primeiro.
2. O agente `brand_motion_director` só começa após o relatório do `project_mapper`.
3. O agente `seo_copy_strategist` revisa SEO, copy, posicionamento e conversão antes do plano de implementação.
4. O plano consolidado deve reunir achados de mapeamento, marca/motion e SEO/copy.
5. O agente `frontend_implementer` só implementa após receber plano consolidado e aprovação explícita para alterar arquivos.
6. O agente `appsec_lgpd_reviewer` revisa privacidade, LGPD, scripts externos, formulários e exposição de dados após a implementação.
7. O agente `qa_build_reviewer` valida por último.

## Regra de execução
- Não pular dependências.
- Não executar tarefas marcadas como bloqueadas.
- Respeitar o campo `Status`.
- Sempre atualizar o status da tarefa ao concluir.
- Não alterar `.env`.
- Não instalar dependências sem justificativa e aprovação.
- Não criar funcionalidades do app operacional neste repositório.
- Sempre registrar:
  - resumo;
  - arquivos alterados;
  - riscos;
  - validações;
  - próximos passos.

## Status permitidos
- Pendente
- Em andamento
- Bloqueada
- Concluída
- Revisão necessária
