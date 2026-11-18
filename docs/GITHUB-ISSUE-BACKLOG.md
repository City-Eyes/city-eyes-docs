# CITY EYES — inventário do backlog GitHub

**Estado:** inventário inicial de 17 issues; `B-xx` são IDs locais mapeados aos links GitHub abaixo. Issues posteriores de manutenção da infraestrutura são relacionadas na seção final.
**Escopo:** manter rastreabilidade com F-xx, US-xx, UC-xx e T-xx do plano de produto. A proposta F-13 de transparência continua pendente e não entra como requisito aprovado do MVP.
**Project:** [CITY EYES — MVP](https://github.com/orgs/City-Eyes/projects/1), público. Status: Todo → In progress → In review → Done. Automações nativas estão ligadas e Auto-close issue desligado. O código usa auto-add nativo; documentos usam o workflow próprio publicado no PR docs #8. A presença do secret necessário foi conferida sem acessar seu valor.
**Separação no Project:** `repo:code` identifica `city-eyes-code`; `repo:docs` identifica `city-eyes-docs`. `area:*`, `priority:*`, `type:*` e `workstream:*` classificam o assunto e a responsabilidade.
**Frentes:** `workstream:city-problems`, `workstream:transparency` e `workstream:shared` registram a divisão de responsabilidade descrita em [TEAM-OWNERSHIP.md](TEAM-OWNERSHIP.md). As labels de frente não são atribuições pessoais.

## Responsabilidades e paralelismo

- **Usuário — problemas urbanos:** fotos, publicação, lista/detalhe, mapa, acompanhamento, triagem e resolução.
- **Parceiro — transparência:** pesquisa, curadoria e validação de fontes; implementação só depois de aprovar o recorte.
- **Compartilhado:** autenticação, cidades/localização, navegação, design system, contratos API/DB e CI; combinar interfaces e responsável antes de trabalho em paralelo.

Issues atuais: docs #1 e #4 e code #1–#4 e #13 são compartilhadas; docs #2–#3 são transparência; code #5–#12 são problemas urbanos. O papel do parceiro foi registrado nas issues de transparência; sua conta GitHub ainda não foi informada. Ainda não há issue de código de transparência porque F-13 não está aprovada.

## Decisões e pré-condições

| ID | Título sugerido | Repo | Prioridade | Dependências | Aceite / verificação |
|---|---|---|---|---|---|
| B-01 | Confirmar licenças antes da publicação pública | docs + code | Gate | Nenhuma | Usuário define licença separada ou compartilhada; avisos e arquivos de licença correspondem à decisão. Não declarar MIT sem `LICENSE`. |
| B-02 | Definir limites aproximados das quatro cidades | code | P0 | Nenhuma | Bboxes têm fonte, data, ordem documentada e teste dentro/fora; são rotuladas como aproximações. Requisito T-16. |
| B-03 | Escolher provedor de autenticação para Expo e API | code | P0 | Nenhuma | Provedor suportado em Android/iOS é selecionado e validado; contrato de sessão e fallback demo seguro ficam documentados. Testes T-20–T-25. |

## MVP — consulta pública e relato

| ID | Título sugerido | Repo | Prioridade | Dependências | Aceite / verificação |
|---|---|---|---|---|---|
| B-04 | Iniciar o app Expo com o design system aprovado | code | P0 | Nenhuma | App abre em Android/iOS, usa tokens/componentes aprovados e apresenta estados acessíveis. Referências US-09, T-13, T-19. |
| B-05 | Criar modelo e dados seed das quatro cidades | code | P0 | B-02 | Drizzle define cidades, membros, relatos e eventos necessários; seeds são sintéticos e rotulados. Tipos e índices seguem o plano; sem PostGIS. |
| B-06 | Expor consulta pública paginada de cidades e relatos | code | P0 | B-05 | API retorna apenas registros públicos da cidade pedida, pagina resultados e valida filtros; especificação OpenAPI e clientes gerados estão sincronizados. T-10, T-19, T-24. |
| B-07 | Exibir cidade, lista e detalhe no app | code | P0 | B-04, B-06 | Seleção altera a cidade ativa; lista e detalhe refletem a API; carregamento, vazio, erro e troca de cidade são cobertos. US-04, US-09; T-10, T-14, T-19. |
| B-08 | Publicar relatos com sessão, localização e foto | code | P0 | B-02, B-03, B-05, B-06 | API deriva autor da sessão, valida categoria/arquivo/bbox, aceita câmera ou galeria e grava referência de mídia; falha de IA não perde o relato. US-01, US-11; T-01–T-03, T-11, T-16, T-20–T-22, T-26. |
| B-09 | Triar relatos com isolamento entre cidades | code | P0 | B-03, B-05, B-06 | Operador só acessa sua cidade; alteração cria histórico e separa notas públicas/internas; invasão entre cidades é negada no backend. US-05, US-06, US-10; T-07, T-08, T-15, T-24, T-25. |

## MVP ampliado e qualidade

| ID | Título sugerido | Repo | Prioridade | Dependências | Aceite / verificação |
|---|---|---|---|---|---|
| B-10 | Sincronizar mapa, lista e busca geográfica | code | P1 | B-02, B-06, B-07 | Mapas e lista usam mesma cidade/filtros; paginação e geocell incluem células vizinhas; lista segue funcional se o mapa falhar. US-04; T-10, T-17. |
| B-11 | Sugerir análise e possíveis duplicatas com limites claros | code | P1 | B-08 | IA é consultiva, fallback aparece como simulação, duplicata não é mesclada e nenhuma imagem recebe selo de autenticidade. US-02, US-03; T-04–T-06, T-17, T-18. |
| B-12 | Registrar resolução e confirmações de cidadãos | code | P1 | B-09 | Evidência/histórico público e confirmação única por pessoa funcionam; nenhuma identidade privada é exibida. US-07, US-08; T-09, T-23, T-24. |
| B-13 | Automatizar fluxos críticos e revisão mobile | code | P1 | B-07–B-09 | Testes API/banco cobrem autoria e autorização; Maestro cobre fluxos estáveis em Android/iOS; smoke de câmera/GPS é registrado sem confundir simulação com dispositivo real. T-13, T-15, T-19–T-26; E2E-01–E2E-07. |

## Propostas fora do MVP aprovado

| ID | Título sugerido | Repo | Estado | Aceite / verificação |
|---|---|---|---|---|
| B-14 | Decidir o recorte inicial de transparência pública | docs | Decisão pendente | Usuário escolhe diretório/link-out ou dados agregados adicionais, define curadoria e revisores; até lá F-13 não muda P0 nem gera importação. US-T-01–05; T-27–T-34 são propostas. |
| B-15 | Validar uma fonte municipal antes de qualquer conector | docs | Futuro, bloqueado | Confirmar base normativa/licença aplicável, URL HTTPS, formato/volume, esquema/IDs, cobertura, atualização, privacidade e retenção. Não baixar a exportação de licitações de Londrina sem limite verificável ou autorização explícita para volume maior. |

## Estrutura pública dos repositórios

| ID | Título sugerido | Repo | Prioridade | Dependências | Aceite / verificação |
|---|---|---|---|---|---|
| B-16 | Publicar a base revisada do repositório de código | code | Gate | B-17 | Histórico filtrado e normalizado, governança, CI e links aprovados; sem `.agents/`, `.conversation/` ou anexos. |
| B-17 | Publicar a estrutura canônica do repositório documental | docs | Gate | Nenhuma | Índices e documentos revisados, links locais válidos, pesquisa com fonte/data/limite, sem notas internas ou capturas integrais de terceiros. |

## Já entregue — não abrir issue duplicada

- `ProcurementDemo` no sandbox tem cinco linhas `DEMO-001`–`DEMO-005`, todas fictícias; a referência municipal e o link Equiplano ficam separados da amostra.
- `pnpm --filter @workspace/mockup-sandbox test` passou 8/8 verificações de integridade, busca, situação, combinação de filtros e estado vazio. Isso não é um teste da API nem da listagem municipal.

## Links das issues criadas

Milestones `MVP do hackathon`: [código](https://github.com/City-Eyes/city-eyes-code/milestone/1) · [documentos](https://github.com/City-Eyes/city-eyes-docs/milestone/1)

| ID local | Issue |
|---|---|
| B-01 | [Confirmar licenças antes da publicação pública](https://github.com/City-Eyes/city-eyes-docs/issues/1) |
| B-02 | [Definir limites aproximados das quatro cidades](https://github.com/City-Eyes/city-eyes-code/issues/1) |
| B-03 | [Escolher provedor de autenticação para Expo e API](https://github.com/City-Eyes/city-eyes-code/issues/2) |
| B-04 | [Iniciar o app Expo com o design system aprovado](https://github.com/City-Eyes/city-eyes-code/issues/3) |
| B-05 | [Criar modelo e dados seed das quatro cidades](https://github.com/City-Eyes/city-eyes-code/issues/4) |
| B-06 | [Expor consulta pública paginada de cidades e relatos](https://github.com/City-Eyes/city-eyes-code/issues/5) |
| B-07 | [Exibir cidade, lista e detalhe no app](https://github.com/City-Eyes/city-eyes-code/issues/6) |
| B-08 | [Publicar relatos com sessão, localização e foto](https://github.com/City-Eyes/city-eyes-code/issues/7) |
| B-09 | [Triar relatos com isolamento entre cidades](https://github.com/City-Eyes/city-eyes-code/issues/8) |
| B-10 | [Sincronizar mapa, lista e busca geográfica](https://github.com/City-Eyes/city-eyes-code/issues/9) |
| B-11 | [Sugerir análise e possíveis duplicatas com limites claros](https://github.com/City-Eyes/city-eyes-code/issues/10) |
| B-12 | [Registrar resolução e confirmações de cidadãos](https://github.com/City-Eyes/city-eyes-code/issues/11) |
| B-13 | [Automatizar fluxos críticos e revisão mobile](https://github.com/City-Eyes/city-eyes-code/issues/12) |
| B-14 | [Decidir o recorte inicial de transparência pública](https://github.com/City-Eyes/city-eyes-docs/issues/2) |
| B-15 | [Validar uma fonte municipal antes de qualquer conector](https://github.com/City-Eyes/city-eyes-docs/issues/3) |
| B-16 | [Publicar a base revisada do repositório de código](https://github.com/City-Eyes/city-eyes-code/issues/13) |
| B-17 | [Publicar a estrutura canônica do repositório documental](https://github.com/City-Eyes/city-eyes-docs/issues/4) |

## Estrutura publicada e manutenção

- [Documentação #5](https://github.com/City-Eyes/city-eyes-docs/pull/5): mesclado, concluiu B-17 e B-01 antes da base de código.
- [Código #14](https://github.com/City-Eyes/city-eyes-code/pull/14): mesclado, concluiu B-16.
- Correção da política de encerramento: PRs [docs #6](https://github.com/City-Eyes/city-eyes-docs/pull/6) e [code #15](https://github.com/City-Eyes/city-eyes-code/pull/15), mesclados com regressão para fechamento por commit de merge.
- Auto-add documental: [docs #7](https://github.com/City-Eyes/city-eyes-docs/issues/7), concluída pelo [PR #8](https://github.com/City-Eyes/city-eyes-docs/pull/8).
- Exclusão de contexto privado no workspace: [code #17](https://github.com/City-Eyes/city-eyes-code/issues/17).
- Atualização da política e deste registro: [docs #9](https://github.com/City-Eyes/city-eyes-docs/issues/9).

As issues B-01, B-16 e B-17 e seus PRs estão em `Done`. Auto-merge temporário foi autorizado enquanto só o proprietário tem acesso; quando o parceiro entrar, desativá-lo e exigir revisão conforme [TEAM-OWNERSHIP.md](TEAM-OWNERSHIP.md). O Project é a fonte do estado atual; este arquivo não congela a contagem de itens.
