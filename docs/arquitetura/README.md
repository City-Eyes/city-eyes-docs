# Arquitetura

O [plano canônico](../CITY-EYES-plano-de-produto-e-documentacao.md) contém a arquitetura e o modelo de dados atuais. Esta pasta receberá especificações extraídas e revisadas por assunto, sem criar cópias divergentes.

Direção confirmada: app Expo Android/iOS, monólito modular TypeScript, PostgreSQL/Drizzle e mídia em armazenamento de objetos. Escala, limites e índices precisam de validação por carga, não promessa de suportar “a cidade inteira”.

Estado implementado: API inicial com health check e pacote de banco sem tabelas do produto. Autenticação e bbox reais ainda são decisões/entregas pendentes.
