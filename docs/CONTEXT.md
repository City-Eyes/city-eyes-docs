# CITY EYES — contexto rápido

## Produto e atores

Participação cidadã multicípio: moradores consultam e publicam relatos geolocalizados; operadores municipais fazem triagem e atualizações dentro da cidade autorizada. A consulta é pública; publicar e confirmar exige conta. Administração e papéis devem ser validados no servidor.

## Decisões confirmadas

- Android/iOS com Expo; backend monolítico modular TypeScript.
- PostgreSQL/Drizzle e mídia fora do banco; PostGIS fora do MVP.
- Demonstração: Curitiba, Londrina, Maringá e Ponta Grossa.
- Paleta comunitária e quarta variante do design system aprovadas; usar tokens e componentes existentes.
- Organização com dois repos públicos, MIT e Project único; issues separadas por `repo:code` e `repo:docs`.

## Não confundir

- Protótipo clicável não é app Expo, API persistente ou autenticação implementada.
- Bbox não garante pertencimento a um limite municipal exato.
- Câmera, metadados e detectores de IA não provam autenticidade.
- Transparência pública segue como proposta; licitações de demonstração são fictícias.

## Fontes de verdade

- Produto, atores, requisitos, casos de uso, dados e testes: [plano canônico](CITY-EYES-plano-de-produto-e-documentacao.md).
- Donos das frentes e limites de paralelismo: [responsabilidades](TEAM-OWNERSHIP.md).
- Estado e pendências: [handoff](HANDOFF-city-eyes.md).
- Trabalho planejado: [backlog](GITHUB-ISSUE-BACKLOG.md) e [Project](https://github.com/orgs/City-Eyes/projects/1).
- Pesquisa municipal: [transparência](CITY-EYES-transparencia-publica.md).

Documento resumido de navegação, não uma segunda especificação independente.
