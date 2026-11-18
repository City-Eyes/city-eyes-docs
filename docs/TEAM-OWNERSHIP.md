# Responsabilidades e paralelismo

## Frentes

- **Problemas urbanos — usuário:** captura/escolha de foto, publicação, lista e detalhe, mapa, acompanhamento, triagem e resolução de ocorrências.
- **Transparência pública — lft21 (parceiro):** curadoria de links oficiais e metadados, validação de fontes e implementação do diretório e aviso de origem; sem ingestão ou integração municipal no MVP.
- **Fundação compartilhada:** autenticação e autorização, cidades/localização, navegação, design system, contratos OpenAPI, schema/migrations do banco e CI. Combinar contrato e responsável antes de editar esses pontos em paralelo.

## Limites de edição e contratos

- **Problemas urbanos — usuário:** telas Expo de cidade/lista/detalhe/publicação; rotas e regras de relatos; esquema e dados de ocorrências. Não alterar contratos compartilhados sem registrar a decisão e combinar integração.
- **Transparência — parceiro:** catálogo estático revisado por PR e tela/fluxo do diretório em rota própria. Não criar tabelas, APIs, conectores ou associação entre relatos e registros oficiais no MVP.
- **Fundação compartilhada:** uma pessoa deve liderar cada alteração de `lib/api-spec/openapi.yaml` e clientes gerados, `lib/db/src/schema/*` e migrations, contratos de sessão, IDs/bboxes das cidades, tokens/componentes do design system, workspace e CI. A outra integra por interfaces documentadas, não por edição concorrente desses arquivos.
- **Integração entre frentes:** definir payload, proprietário da migration, comportamento de erro e teste de contrato antes de paralelizar; revisar diffs de arquivos compartilhados juntos. As issues já estão atribuídas por frente; mudanças nessas responsabilidades precisam ser combinadas.

## Áreas de arquivo candidatas

- **Problemas urbanos:** `artifacts/city-eyes-mobile/app/city/[cityId]/queue.tsx` e `components/queue/` para a fila; `artifacts/api-server/src/routes/` para regras/rotas; `lib/db/scripts/seed.mjs` para seed. Escrita compartilhada no schema exige coordenação.
- **Transparência:** `docs/CITY-EYES-transparencia-publica.md` e `research/` para fontes e proveniência; no app, `app/city/[cityId]/transparency.tsx`, `components/transparency/` e `constants/transparency-sources.ts`. Sem alterar schema/OpenAPI. A navegação comum será integrada por um único responsável após combinar as rotas.
- **Fundação compartilhada:** `lib/api-spec/openapi.yaml`, `lib/api-zod/`, `lib/api-client-react/`, `lib/db/src/schema/`, migrations, `artifacts/city-eyes-system/`, `pnpm-lock.yaml` e workflows. Mudanças nesses arquivos devem ter um responsável por alteração e revisão do outro.

## Pacotes de trabalho por frente

- **Fundação compartilhada:** B-02 a B-05. B-02 e B-03 são decisões independentes; B-04 (base Expo) e B-05 (schema/seed) podem avançar em paralelo se não alterarem os mesmos contratos.
- **Problemas urbanos:** B-06 a B-13 e B-18, depois de estabilizados os contratos de cidade, sessão e relato. B-09 cobre API/autorização; B-18 cobre a tela móvel da fila. B-13 valida apenas o que estiver implementado. Indicadores F-08 continuam fora do recorte P0.
- **Transparência:** B-14 registra o recorte aprovado; B-15 valida links oficiais das quatro cidades; B-19 implementa o diretório. B-19 depende da validação documental e das interfaces compartilhadas, não de integração municipal.
- **Revisão final:** juntar evidências de API, app, acessibilidade, privacidade e limites de desempenho. Não chamar exportação JavaScript de teste de dispositivo nem seed sintético de validação municipal.

## Organização no GitHub

Um único repositório de código e um único Project da organização. Use `workstream:city-problems`, `workstream:transparency` e `workstream:shared` para separar as issues. `repo:code` e `repo:docs` continuam indicando a qual repositório pertence cada issue; `area:*`, `priority:*` e `type:*` preservam a classificação técnica e de prioridade. As labels classificam o trabalho; as atribuições de usuário registram quem responde por cada issue.

LucasStop responde pela frente de problemas urbanos; lft21 responde pela transparência. Issues compartilhadas estão atribuídas aos dois. As issues docs #2/#3 e code #20 estão atribuídas a lft21.

## Auto-merge e revisão

O auto-merge está desligado nos dois repositórios. Os rulesets da branch principal exigem uma aprovação e revisão de code owner; CODEOWNERS nomeia @LucasStop e @lft21 para todos os arquivos. Assim, cada PR exige a aprovação da outra pessoa antes do merge. Somente merge commits estão habilitados. Não usar bypass administrativo nem integrar sem revisão cruzada.

## Sequência da transparência

A transparência está aprovada no MVP somente como diretório de links oficiais. A sequência é B-14 (registrar o recorte), B-15 (validar destinos HTTPS das quatro cidades) e B-19 (implementar tela e catálogo estático). Não transformar pesquisa ou amostra fictícia em integração oficial; não criar API, tabela, scraping ou envio municipal neste recorte.

## Trabalho paralelo e revisão cruzada

As frentes podem avançar em módulos separados após acordar o ponto de entrada na navegação. O usuário lidera fila e relatos; o parceiro lidera catálogo e diretório. Cada um revisa o PR da outra frente antes da integração, sem editar simultaneamente contratos compartilhados. F-13 não altera OpenAPI nem schema no MVP, reduzindo conflitos entre as frentes.
