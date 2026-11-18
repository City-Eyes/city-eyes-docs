# Auditoria da cópia pública

## Escopo e limites

- Exportação separada de documentação e código, preservando a sequência linear de `main` no histórico derivado; SHAs e mensagens foram reescritos. Branches auxiliares não fazem parte da exportação.
- Commits sem mudanças publicáveis na frente correspondente foram omitidos; a ordem dos demais foi preservada.
- O repositório pessoal e o histórico local não são modificados. Não há force-push.
- `.agents/`, anexos, dados de sessão, artefatos gerados e fontes brutas de terceiros foram excluídos de todas as revisões exportadas.
- Autoria normalizada conforme o padrão de commits autorizado. Corpos dos commits de importação explicam a preservação histórica; não se fazem passar pelos motivos originais não registrados.
- Busca automatizada no conteúdo de todas as revisões exportadas: chaves privadas, padrões de tokens, URLs de banco com credenciais e emails pessoais. A busca por padrões não garante ausência de todos os segredos.
- Revisão de paths/tamanhos: não há binários anexados nem dump de banco no conjunto exportado. README e instruções distinguem protótipo de implementação.
- MIT cobre contribuições originais; dependências e fontes externas conservam suas licenças. Capturas integrais de terceiros não são redistribuídas.

## Pendências operacionais

- Automações nativas do Project exigem sessão GitHub autenticada.
- `PROJECT_TOKEN` deve ser configurado nos secrets GitHub pelo proprietário; sem ele a automação de branch falha explicitamente e não anuncia movimentação do cartão.
- Política de revisores deverá ser ajustada quando o segundo colaborador for adicionado.
