# Estratégia de testes

O [plano canônico](../CITY-EYES-plano-de-produto-e-documentacao.md) contém a matriz T-xx e os fluxos E2E. As issues do [backlog](../GITHUB-ISSUE-BACKLOG.md) apontam para esses cenários.

- Unitários: validação, regras e limites de heurísticas.
- Integração API/banco: autoria, isolamento entre cidades, permissões e persistência.
- Contrato: OpenAPI e clientes sincronizados.
- Maestro: fluxos nativos estáveis em Android/iOS; não substitui testes de autorização no servidor.
- Câmera/GPS: smoke em dispositivo real, separado de simulador.
- Carga: medir consulta paginada, publicação e limites; estabelecer metas antes de declarar capacidade.
- Acessibilidade e revisão visual: telas, estados e navegação nos dispositivos-alvo.

O teste atual do sandbox verifica a demonstração fictícia de licitações. Não comprova API, login, Expo ou funcionamento com dados municipais reais.
