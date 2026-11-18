# Responsabilidades e paralelismo

## Frentes

- **Problemas urbanos — usuário:** captura/escolha de foto, publicação, lista e detalhe, mapa, acompanhamento, triagem e resolução de ocorrências.
- **Transparência pública — parceiro:** pesquisa e curadoria de fontes municipais, validação de dados e, depois que o recorte for aprovado, telas e integrações desta frente.
- **Fundação compartilhada:** autenticação e autorização, cidades/localização, navegação, design system, contratos OpenAPI, schema/migrations do banco e CI. Combinar contrato e responsável antes de editar esses pontos em paralelo.

## Organização no GitHub

Um único repositório de código e um único Project da organização. Use `workstream:city-problems`, `workstream:transparency` e `workstream:shared` para separar as issues. `repo:code` e `repo:docs` continuam indicando a qual repositório pertence cada issue; `area:*`, `priority:*` e `type:*` preservam a classificação técnica e de prioridade.

As labels registram a frente, não uma atribuição de conta. As issues de transparência indicam “parceiro” como responsável por papel. Não convidar nem atribuir conta individual até o usuário GitHub ser confirmado.

## Sequência da transparência

A transparência permanece como proposta. O trabalho inicial fica limitado à decisão de escopo (B-14) e validação de uma fonte (B-15). Só criar issues de implementação após aprovar o recorte, os dados e as condições de uso. Não transformar pesquisa ou amostra fictícia em integração oficial.
