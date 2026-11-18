# Arquitetura

O [plano canônico](../CITY-EYES-plano-de-produto-e-documentacao.md) contém a arquitetura e o modelo de dados aprovados. Esta pasta receberá especificações extraídas e revisadas por assunto, sem criar cópias divergentes.

Direção confirmada: app Expo Android/iOS, monólito modular TypeScript, PostgreSQL/Drizzle e mídia em armazenamento de objetos. Escala, limites e índices precisam de validação por carga, não promessa de suportar “a cidade inteira”.

Estado no workspace local em 18/11/2026: monólito modular TypeScript com API Express, contratos OpenAPI e cliente gerado. A API oferece consulta pública de cidades e relatos por cidade, incluindo paginação e detalhe. Drizzle define `city_eyes_cities` e `city_eyes_reports`, com índices de consulta e seed sintético para quatro cidades.

Este é apenas um modelo de leitura demonstrativo. Ainda não há tabelas de usuários/vínculos municipais, eventos de status, armazenamento de fotos, autenticação nem bboxes reais. A aplicação Expo existe localmente, mas a fatia ainda não está publicada na `main` do GitHub; não confundir existência local com entrega pública. Escala e limites precisam de validação por carga, não promessa de suportar “a cidade inteira”.

Transparência no MVP usa um catálogo estático revisado por PR e abre links oficiais HTTPS no navegador do dispositivo. Não adiciona tabela, endpoint, ingestão ou scraping. Qualquer conector futuro exige decisão separada, validação de fonte/licença/privacidade e atualização desta arquitetura.
