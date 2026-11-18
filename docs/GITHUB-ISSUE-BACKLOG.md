# CITY EYES — inventário do backlog GitHub

**Estado em 18/11/2026:** 17 issues de produto, B-01–B-15 e B-18/B-19. B-01 está concluída; as outras 16 estão abertas. B-16 e B-17 registraram a publicação inicial dos repositórios e estão concluídas. Issues de manutenção são listadas separadamente.
**Escopo:** manter rastreabilidade com F-xx, US-xx, UC-xx, T-xx e E2E-xx do plano de produto. F-13 está aprovada para MVP somente como diretório de links oficiais, sem integração municipal.
**Project:** [CITY EYES — MVP](https://github.com/orgs/City-Eyes/projects/1), público. Status: Todo → In progress → In review → Done. Automações nativas estão ligadas e Auto-close issue desligado. O código usa auto-add nativo; documentos usam o workflow próprio publicado no PR docs #8. A presença do secret necessário foi conferida sem acessar seu valor.
**Milestone do MVP:** `MVP do hackathon` existe nos dois repositórios; code #1–#8, #12, #19/#20 e docs #1–#3 estão associados, incluindo validação final. Criar as issues do Pitch somente depois que todas as issues da milestone do MVP forem concluídas; manter Pitch como etapa separada para narrativa, roteiro de demo, slides, ensaio e contingência.
**Separação no Project:** `repo:code` identifica `city-eyes-code`; `repo:docs` identifica `city-eyes-docs`. `area:*`, `priority:*`, `type:*` e `workstream:*` classificam o assunto e a responsabilidade.
**Frentes:** `workstream:city-problems`, `workstream:transparency` e `workstream:shared` registram a divisão de responsabilidade descrita em [TEAM-OWNERSHIP.md](TEAM-OWNERSHIP.md). As labels de frente não são atribuições pessoais.

## Estado técnico e publicado

- A `main` pública ainda não recebeu a implementação; quatro PRs abertos formam a pilha de integração: [#23](https://github.com/City-Eyes/city-eyes-code/pull/23) (fundação) → [#25](https://github.com/City-Eyes/city-eyes-code/pull/25) (publicação) → [#26](https://github.com/City-Eyes/city-eyes-code/pull/26) (API municipal) → [#24](https://github.com/City-Eyes/city-eyes-code/pull/24) (fila mobile).
- O workspace local contém o mesmo estado de arquivos do PR final #24. Há autenticação OIDC, envio de relatos com foto e fila municipal; mapa e diretório de transparência continuam pendentes. Implementação em PR não equivale a integração nem autoriza fechar issue.
- Os checks dos quatro PRs e o typecheck local do monorepo passaram. Os testes locais de API não foram repetidos porque `DATABASE_TEST_URL` não está configurado; não usar o banco de desenvolvimento no lugar do banco isolado. Maestro, dispositivos reais/simulados e carga não foram executados nesta revisão.
- `ProcurementDemo` no sandbox mantém cinco linhas fictícias `DEMO-001`–`DEMO-005`; o teste local passou 8/8. Isso não valida integração municipal nem o app nativo.

### Correções locais e validação pendente

- Em `sync/code-mvp-review`, cache operacional e rascunhos agora são isolados por conta; logout remove dados protegidos, perda de autorização esconde a tela e reinicia o cache, e consentimento não é reaproveitado entre contas. Typecheck e testes dos utilitários passaram; teste de UI em dispositivo ainda não foi executado.
- O upload agora valida uma geração fixa, grava os bytes verificados num objeto final novo e bloqueia leitura pública de caminhos temporários. Os testes de API usam storage falso e passaram; replay contra semântica real do Object Storage ainda precisa de validação antes do merge.
- A allowlist da API agora aceita o scheme `city-eyes-mobile:` configurado no Expo e rejeita o scheme incorreto `cityeyes:`. Teste de contrato passou; login em build nativo ainda não foi executado.
- A validação local cobriu 17 testes de API em banco PostgreSQL descartável, 2 testes de utilitários mobile e typecheck. Banco de desenvolvimento e armazenamento remoto não foram usados.
- A branch local normaliza autoria/mensagem do commit de integração, remove o checkpoint vazio e preserva o CODEOWNERS da `main`; nenhuma branch remota foi reescrita.
- A pilha GitHub #23 → #25 → #26 → #24 ainda não foi atualizada com as correções. #23 precisa ficar em dia com `main`; os quatro PRs precisam de revisão cruzada. Não fazer bypass ou merge até validar o upload real e o fluxo nativo.

A revisão independente confirmou os quatro problemas originais por inspeção do código. Não houve reprodução em aparelho nem replay contra armazenamento real. As correções foram feitas apenas em branches locais e continuam não publicadas.

## Tamanho relativo

`XS` é uma decisão/revisão curta; `S` é uma fatia limitada; `M` atravessa alguns arquivos ou um contrato; `L` cruza camadas ou tem risco de autorização/armazenamento. São tamanhos comparativos, não estimativas de prazo. `P0` é necessário para o fluxo essencial da demo, `P1` é cortável e `P2` permanece futuro/proposta.

## Matriz das issues de produto

**Atualização de implementação:** os resultados, limites e dependências da matriz permanecem válidos. A coluna de estado abaixo é o inventário anterior à pilha de PRs; para estado atual, prevalece esta tabela de atualização. Todas essas issues continuam abertas até integração e critérios de aceite atendidos.

| Fatia | Estado atual verificável |
|---|---|
| B-02/B-03 | Decisões documentais/aceite ainda abertos; a pilha já traz bboxes aproximadas e Replit OIDC, sem equivaler a aprovação. |
| B-04–B-07 | Base, banco e consulta incluídos no PR #23; integração e validação nativa pendentes. |
| B-08 | Implementação no PR #25; bloqueios de upload, login e rascunhos precisam ser resolvidos. |
| B-09 | API no PR #26; revisão e integração pendentes. |
| B-18 | Tela no PR #24; corrigir exposição de cache protegido e validar fluxo nativo. |
| B-13 | Validação final pendente; CI e typecheck não substituem os cenários de dispositivo e autorização. |
| B-14/B-15/B-19 | Recorte documental reconciliado localmente; PR documental, validação de links e diretório ainda pendentes. |
| B-10–B-12 | Funcionalidades P1 ainda não entregues; fora da milestone atual do MVP. |

| ID / issue | Resultado único e limite | Prioridade / tamanho | Dependências | Rastreabilidade e testes | Estado |
|---|---|---|---|---|---|
| B-01 · [docs #1](https://github.com/City-Eyes/city-eyes-docs/issues/1) | Licença MIT aplicada aos dois repositórios; não cobre direitos de terceiros. | Gate / XS | — | `LICENSE`, avisos e auditoria de publicação | Concluída; issue fechada |
| B-02 · [code #1](https://github.com/City-Eyes/city-eyes-code/issues/1) | Registrar bboxes aproximadas das quatro cidades com fonte, data e ordem; não representar limites exatos. | P0 / S | — | F-11, T-16; teste de coordenada dentro/fora | Aberta; fonte e valores pendentes |
| B-03 · [code #2](https://github.com/City-Eyes/city-eyes-code/issues/2) | Escolher provedor gerenciado e registrar contrato de sessão/fallback seguro; não implementar autenticação própria. | P0 / S | — | T-20–T-25; 401, expiração, autoria e demo fora de produção | Aberta; decisão pendente |
| B-04 · [code #3](https://github.com/City-Eyes/city-eyes-code/issues/3) | Base nativa Expo usa o design system aprovado; não cobre os fluxos de publicação/admin. | P0 / M | — | US-09, T-13, T-19; smoke Android/iOS e acessibilidade | Aberta; base local existe, sem PR/device test |
| B-05 · [code #4](https://github.com/City-Eyes/city-eyes-code/issues/4) | Schema e seeds mínimos para cidades/relatos públicos; membros, eventos e permissões ficam nos fluxos específicos. | P0 / M | — | F-04, US-09, T-19; migração, seed sintético e isolamento | Aberta; duas tabelas e seed locais, sem PR |
| B-06 · [code #5](https://github.com/City-Eyes/city-eyes-code/issues/5) | Consulta pública paginada por cidade e detalhe; sem filtros avançados ou dados administrativos. | P0 / M | B-05 | F-04, US-09, T-19; paginação, cidade inválida e detalhe cruzado | Aberta; rotas locais e cinco testes, sem PR |
| B-07 · [code #6](https://github.com/City-Eyes/city-eyes-code/issues/6) | Visitante seleciona cidade e abre lista/detalhe com estados de erro/vazio; sem mapa. | P0 / M | B-04, B-06 | F-04, US-04/09, T-13/14/19, E2E-05 | Aberta; fluxo local existe, sem Maestro/PR |
| B-08 · [code #7](https://github.com/City-Eyes/city-eyes-code/issues/7) | Pessoa autenticada publica relato com foto e localização revisável; não promete autenticidade. | P0 / L | B-02, B-03, B-05, B-06 | F-01/11, US-01/11, T-01–03/11/12/16/20–22/26, E2E-01/02/06/07 | Aberta; não implementada |
| B-09 · [code #8](https://github.com/City-Eyes/city-eyes-code/issues/8) | API autoriza triagem/status por cidade e separa notas públicas/internas; a UI mobile é a B-18. | P0 / L | B-03, B-05, B-06 | F-05, US-05/06/10, T-07/08/15/24/25, E2E-03 | Aberta; não implementada |
| B-10 · [code #9](https://github.com/City-Eyes/city-eyes-code/issues/9) | Mapa e lista consultam o mesmo conjunto; lista permanece disponível se o mapa falhar. | P1 / L | B-02, B-06, B-07 | F-12, US-04, T-10/17, E2E-05 | Aberta; não implementada |
| B-11 · [code #10](https://github.com/City-Eyes/city-eyes-code/issues/10) | Sugestões opcionais de análise/duplicidade ajudam a revisão humana; sem selo de autenticidade ou merge automático. | P1 / L | B-08 | F-02/03, US-02/03, T-04–06/17/18, E2E-04 | Aberta; não implementada |
| B-12 · [code #11](https://github.com/City-Eyes/city-eyes-code/issues/11) | Histórico de resolução com evidência e confirmação cidadã sem expor identidade privada. | P1 / M | B-09 | F-06/07, US-07/08, T-09/23/24 | Aberta; não implementada |
| B-13 · [code #12](https://github.com/City-Eyes/city-eyes-code/issues/12) | Verificar os fluxos entregues com API/banco e Maestro; E2E de recursos só após implementação. | P1 / L | B-07, B-08, B-09, B-18, B-19 | T-13/15/19–34, E2E-01–08; integração e smoke de dispositivo | Aberta; sem Maestro/device test |
| B-14 · [docs #2](https://github.com/City-Eyes/city-eyes-docs/issues/2) | Registrar no plano e no desenho o recorte aprovado: diretório link-out, limites e papéis; sem conector. | P0 / S | — | F-13, US-T-01–06, UC-T-01–03, T-27–34 | Aberta; decisão registrada localmente, PR documental pendente |
| B-15 · [docs #3](https://github.com/City-Eyes/city-eyes-docs/issues/3) | Conferir destinos HTTPS e metadados de fontes para as quatro cidades; link sem confirmação fica fora do catálogo publicável. | P0 / M | B-14 | F-13, US-T-01/03/05/06, UC-T-01–03, T-27–34 | Aberta; conferência manual pendente |
| B-18 · [code #19](https://github.com/City-Eyes/city-eyes-code/issues/19) | Implementar fila municipal mobile: lista por cidade, filtros/ordenação básicos, atualização de status e estados de loading/vazio/erro/sem permissão; reutiliza API B-09, sem duplicar autorização. | P0 / M | B-04, B-09 | F-05, US-05/06/10, UC-02/04, UI-05, DATA-02/04/06, T-07/08/15/24/25, E2E-03 | Aberta; implementação pendente |
| B-19 · [code #20](https://github.com/City-Eyes/city-eyes-code/issues/20) | Implementar diretório de transparência por cidade com catálogo estático validado, proveniência e abertura externa; não criar API/tabela, importar dados ou associar contrato a relato. | P0 / M | B-04, B-06, B-14, B-15 | F-13, US-T-01/02/03/05/06, UC-T-01–03, UI-T-01/02, DATA-09, T-27–34, E2E-08 | Aberta; implementação pendente |

### Rastreabilidade de atores, permissões, casos de uso, telas e dados

IDs definidos no plano. `UI-T-*` e `DATA-09` são escopo aprovado ainda não implementado; `UI-05` é coberta pela B-18.

| Issue | Ator(es) / permissão(ões) | UC(s) | Tela(s) | Dado(s) |
|---|---|---|---|---|
| B-01 | — | — | — | licença/repositório |
| B-02 | ACT-02 / PERM-02 | UC-01, UC-04 | UI-04 | DATA-01 |
| B-03 | ACT-02/03/04 / PERM-02/04/05 | UC-01/02/04 | UI-04/05 | DATA-03/04 |
| B-04 | ACT-01 / PERM-01 | UC-04 | UI-00/01 | DATA-01 |
| B-05 | ACT-01 / PERM-01 | UC-04 | UI-01/02/03 | DATA-01/02 |
| B-06 | ACT-01 / PERM-01 | UC-04 | UI-01/02/03 | DATA-01/02 |
| B-07 | ACT-01 / PERM-01 | UC-04 | UI-00/01/02/03 | DATA-01/02 |
| B-08 | ACT-02 / PERM-02 | UC-01 | UI-04 | DATA-01/02/03/05 |
| B-09 | ACT-03/04 / PERM-04/05 | UC-02/04 | API da fila; UI-05 em B-18 | DATA-02/04/06 |
| B-10 | ACT-01 / PERM-01 | UC-04 | UI-02/06 | DATA-01/02 |
| B-11 | ACT-02/03/06 / PERM-07 | UC-01/03 | UI-07 | DATA-02/08 |
| B-12 | ACT-02/03 / PERM-03/04 | UC-02 | UI-03/05 | DATA-05/06/07 |
| B-13 | ACT-01/02/03 / PERM-01–04 | UC-01–04 | UI-00–07 | DATA-01–08 |
| B-14 | ACT-01/02/03/07 / PERM-01/04/08 | UC-T-01–03 | UI-T-01/02 | DATA-09 (catálogo) |
| B-15 | ACT-01/03/07 / PERM-01/04/08 | UC-T-01–03 | UI-T-01/02 | DATA-09 (catálogo) |
| B-18 | ACT-03/04 / PERM-04/05 | UC-02/04 | UI-05 | DATA-02/04/06 |
| B-19 | ACT-01/02/07 / PERM-01/08 | UC-T-01–03 | UI-T-01/02 | DATA-09 (configuração estática) |

As descrições GitHub devem conter resultado, limites, prioridade/tamanho, dependências, frente, critérios Given/When/Then e testes. Alterar esses textos não muda status, labels, milestones ou responsáveis. Issues permanecem abertas até PR com `Closes #N`, conforme o padrão do repositório.

### Grafo de dependências e caminho crítico

- Sem ciclos: B-05 → B-06 → B-07; B-04 também habilita B-07; B-02/B-03/B-05/B-06 habilitam B-08; B-03/B-05/B-06 habilitam B-09; B-09 + B-04 habilitam B-18; B-02/B-06/B-07 habilitam B-10; B-08 habilita B-11; B-09 habilita B-12; B-07/B-08/B-09 habilitam B-13; B-14 → B-15 → B-19, com B-04/B-06 como dependências técnicas.
- O caminho P0 de publicação é B-02 + B-03 + B-05 + B-06 → B-08; consulta mobile B-04 + B-06 → B-07 pode avançar em paralelo à coleta das bboxes e à decisão de autenticação.
- B-09 pode começar com B-03/B-05/B-06 usando relatos seed, mas o fluxo completo de ponta a ponta exige publicação B-08. B-13 integra somente fluxos entregues; testes de P1 não bloqueiam os fluxos P0.
- B-18 (fila mobile) e B-19 (diretório) podem avançar em paralelo após congelar o ponto de entrada na navegação. B-19 não exige mudança de OpenAPI/schema.
- B-14/B-15/B-19 são a sequência documental/técnica da frente de transparência; o escopo F-13 já está aprovado, mas B-15 ainda bloqueia a publicação de links não verificados.

## Lacunas que precisam de decisão antes de virar issues

- **F-08 — indicadores:** não há issue de implementação; decidir se permanece cortada do MVP ou se entra como issue P1 separada.
- **Fila municipal no app:** B-18 cobre a UI em issue separada de B-09 (API/autorização).
- **Armazenamento de fotos:** disponibilidade, dono, política de retenção e fluxo de exclusão precisam ser confirmados antes do upload.
- **B-11:** análise de imagem e sugestões de duplicata são cortáveis separadamente; só dividir em novas issues se a equipe aprovar esse paralelismo.
- **F-13:** diretório link-out é P0; conectores, scraping, ingestão e vínculo específico seguem fora do MVP.

## Responsabilidades e paralelismo

- **Usuário — problemas urbanos:** fotos, publicação, lista/detalhe, mapa, acompanhamento, triagem e resolução, incluindo B-18.
- **Parceiro — transparência:** lft21 responde pela curadoria dos links oficiais e implementação B-19; docs #2/#3 e code #20 estão atribuídas a ele.
- **Compartilhado:** autenticação, cidades/localização, navegação, design system, contratos API/DB e CI; combinar interfaces e responsável antes de trabalho em paralelo.
- As labels `workstream:*` identificam a frente e não atribuem uma conta pessoal. `repo:code` e `repo:docs` identificam o repositório.

## Repositórios e manutenção

- O único Project é [CITY EYES — MVP](https://github.com/orgs/City-Eyes/projects/1). Status: Todo → In progress → In review → Done; Auto-close issue permanece desligado.
- [Docs PR #5](https://github.com/City-Eyes/city-eyes-docs/pull/5) e [code PR #14](https://github.com/City-Eyes/city-eyes-code/pull/14) publicaram as bases iniciais; docs PRs #6/#8/#10 e code PRs #15/#18 registram manutenção posterior.
- B-16 (code #13) e B-17 (docs #4) estão concluídas. Issues de manutenção code #16/#17 e docs #7/#9 também ficam fora da contagem de produto.
- Auto-merge está desligado nos dois repositórios; exigir revisão humana e CODEOWNERS conforme [TEAM-OWNERSHIP.md](TEAM-OWNERSHIP.md), sem bypass.

## Infraestrutura publicada e manutenção

- B-16 — [code #13: publicar a base revisada](https://github.com/City-Eyes/city-eyes-code/issues/13), concluída pelo [code PR #14](https://github.com/City-Eyes/city-eyes-code/pull/14).
- B-17 — [docs #4: publicar a estrutura canônica](https://github.com/City-Eyes/city-eyes-docs/issues/4), concluída pelo [docs PR #5](https://github.com/City-Eyes/city-eyes-docs/pull/5); docs #5 também concluiu B-01.
- Ajuste da política de encerramento: [docs PR #6](https://github.com/City-Eyes/city-eyes-docs/pull/6) e [code PR #15](https://github.com/City-Eyes/city-eyes-code/pull/15).
- Auto-add documental: [docs #7](https://github.com/City-Eyes/city-eyes-docs/issues/7), concluída pelo [docs PR #8](https://github.com/City-Eyes/city-eyes-docs/pull/8).
- Proteção de contexto privado: [code #17](https://github.com/City-Eyes/city-eyes-code/issues/17); política documental: [docs #9](https://github.com/City-Eyes/city-eyes-docs/issues/9).
- [Code PR #18](https://github.com/City-Eyes/city-eyes-code/pull/18) registra correção de publicação do workspace.
- O Project continua sendo a fonte do status operacional. Esta página registra a contagem de issues de produto na data acima, não substitui o quadro.
