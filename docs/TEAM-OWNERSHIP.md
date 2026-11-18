# Responsabilidades e paralelismo

## Frentes

- **Problemas urbanos — usuário:** captura/escolha de foto, publicação, lista e detalhe, mapa, acompanhamento, triagem e resolução de ocorrências.
- **Transparência pública — lft21 (parceiro):** curadoria de links oficiais e metadados, validação de fontes e implementação do diretório; sem ingestão ou integração municipal no MVP.
- **Fundação compartilhada:** autenticação e autorização, cidades/localização, navegação, design system, contratos OpenAPI, schema/migrations do banco e CI. Combinar contrato e responsável antes de editar esses pontos em paralelo.

## Organização no GitHub

Um único repositório de código e um único Project da organização. Use `workstream:city-problems`, `workstream:transparency` e `workstream:shared` para separar as issues. `repo:code` e `repo:docs` continuam indicando a qual repositório pertence cada issue; `area:*`, `priority:*` e `type:*` preservam a classificação técnica e de prioridade.

As labels registram a frente, não a pessoa. O parceiro é lft21, responsável pela transparência; as issues docs #2/#3 e code #20 estão atribuídas a ele.

## Auto-merge e revisão

O auto-merge está desligado nos dois repositórios. Os rulesets da branch principal exigem uma aprovação e revisão de code owner; CODEOWNERS nomeia @LucasStop e @lft21 para todos os arquivos. Assim, cada PR exige a aprovação da outra pessoa antes do merge. Somente merge commits estão habilitados.

## Sequência da transparência

A transparência permanece como proposta. O trabalho inicial fica limitado à decisão de escopo (B-14) e validação de uma fonte (B-15). Só criar issues de implementação após aprovar o recorte, os dados e as condições de uso. Não transformar pesquisa ou amostra fictícia em integração oficial.
