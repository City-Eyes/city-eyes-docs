# Estratégia de testes

O [plano canônico](../CITY-EYES-plano-de-produto-e-documentacao.md) contém a matriz T-xx e os fluxos E2E. As issues do [backlog](../GITHUB-ISSUE-BACKLOG.md) apontam para esses cenários.

- Unitários: validação, bboxes, regras e limites de heurísticas.
- Integração API/banco: autoria, isolamento entre cidades, permissões, upload e persistência.
- Contrato: OpenAPI e clientes gerados sincronizados.
- Maestro: fluxos nativos estáveis em Android/iOS; não substitui testes de autorização no servidor.
- Câmera/GPS: smoke em dispositivo real, separado de simulador.
- Carga: medir consulta paginada, publicação e limites em dados sintéticos; estabelecer metas antes de declarar capacidade.
- Acessibilidade e revisão visual: telas, estados e navegação nos dispositivos-alvo.
- Transparência MVP: validar cidade ativa, proveniência/data do catálogo, abertura externa, retorno ao app e aviso “relato não enviado à prefeitura”; os links externos não são atestados como disponíveis em tempo real.
- Fila municipal: testar listagem/status, estados de loading/vazio/erro e bloqueio de acesso cruzado por cidade; UI não substitui autorização de API.

## Estado verificado no workspace — 18/11/2026

- API: cinco cenários de integração cobrem listagem das quatro cidades, paginação por cidade, bloqueio de detalhe cruzado, página vazia e paginação inválida. A execução anterior registrou 5/5; esses testes não cobrem login, escrita, upload ou autorização municipal.
- Build: typecheck do monorepo e exportações JavaScript de Android/iOS passaram na validação anterior. Exportação JS não equivale a executar o app em emulador ou dispositivo.
- Sandbox: oito testes cobrem apenas a amostra sintética de licitações.
- Transparência: T-27–T-34 estão especificados para catálogo, proveniência, link-out e separação entre relato e fonte; nenhum teste de tela/link foi executado porque o diretório ainda não foi implementado.
- Fila: B-18 ainda não foi implementada; testes de tela e fluxo com perfis de operador continuam pendentes.
- Não executados: Maestro, iOS Simulator, aparelho Android, câmera/GPS reais e testes de carga. Não declarar cobertura nativa ou capacidade em escala até executar esses checks.

O estado local não está na `main` pública do GitHub; o fluxo de PR/CI ainda é necessário. As issues do [backlog](../GITHUB-ISSUE-BACKLOG.md) distinguem o que existe no workspace do que está publicado e do que permanece planejado.
