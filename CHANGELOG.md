# Histórico documental

## 2026-11-18 — Correções de segurança publicadas na pilha de PRs

- Registrada a publicação das correções de segurança e isolamento na pilha do código (#23, #25, #26, #24) sem reescrever histórico.
- Atualizado o inventário do backlog: PR #23 agora fecha code #3, #4, #5 e #6; PR #25 recebeu correções de upload, rascunhos e redirecionamento; PR #24 recebeu isolamento de cache de fila e tratamento de revogação.
- Validação técnica registrada: typecheck ok, 17 testes de API e 2 testes mobile. Replay contra Object Storage real, login nativo e revisão cruzada de lft21 continuam pendentes.

## 2026-11-18 — Transparência incluída no MVP

- Registrado o recorte link-out do diretório por cidade e os limites contra ingestão, scraping e encaminhamento municipal.
- Separadas as issues da fila municipal (B-18) e do diretório de transparência (B-19), com responsabilidades e revisão cruzada.
- A validação individual das fontes e a implementação seguem pendentes; esta decisão não certifica disponibilidade ou atualidade dos portais.

## Preparação da organização

- Publicação inicial de código e documentos concluída com CI, política de fechamento corrigida e automações do Project verificadas.
- Auto-merge temporário foi encerrado após a entrada do parceiro lft21; revisão humana e CODEOWNERS são exigidos antes da integração.
- Documentação canônica separada do contexto privado e do histórico original do workspace.

- Separação de código e documentação para manter uma fonte canônica por assunto.
- Project único e labels de repositório para coordenar dependências sem duplicar quadros.
- Estrutura inspirada em `Plataforma-de-Cursos-TCC/plataforma-cursos-docs`, adaptada sem copiar informações pessoais, stack ou decisões de outro produto.
- Licença MIT para contribuições originais. Conteúdo de terceiros mantém seus próprios direitos e não é relicenciado por este repositório.

Este registro descreve decisões documentais, não conclusão das funcionalidades do MVP.
