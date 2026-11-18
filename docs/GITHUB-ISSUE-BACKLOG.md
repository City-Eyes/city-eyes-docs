# CITY EYES — rascunho do backlog GitHub

**Estado:** rascunho local para revisão; nenhuma issue foi criada no GitHub.  
**IDs `B-xx`:** temporários, não são números de issue.  
**Escopo:** manter rastreabilidade com F-xx, US-xx, UC-xx e T-xx do plano de produto. A proposta F-13 de transparência continua pendente e não entra como requisito aprovado do MVP.

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
| B-15 | Validar uma fonte municipal antes de qualquer conector | code + docs | Futuro, bloqueado | Confirmar base normativa/licença aplicável, URL HTTPS, formato/volume, esquema/IDs, cobertura, atualização, privacidade e retenção. Não baixar a exportação de licitações de Londrina sem limite verificável ou autorização explícita para volume maior. |

## Já entregue — não abrir issue duplicada

- `ProcurementDemo` no sandbox tem cinco linhas `DEMO-001`–`DEMO-005`, todas fictícias; a referência municipal e o link Equiplano ficam separados da amostra.
- `pnpm --filter @workspace/mockup-sandbox test` passou 8/8 verificações de integridade, busca, situação, combinação de filtros e estado vazio. Isso não é um teste da API nem da listagem municipal.
