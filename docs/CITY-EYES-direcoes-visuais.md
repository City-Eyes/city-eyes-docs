# CITY EYES — direções visuais em avaliação

**Status:** opções para comparação; nenhuma direção ou token foi aprovado  
**Data:** 16/11/2026

Este documento compara três hipóteses de sistema visual para o CITY EYES. O primeiro protótipo verde/creme é somente uma referência funcional e não representa uma escolha. Os três protótipos mantêm os mesmos dados e fluxos, mas variam identidade visual e hierarquia para ajudar a decidir.

## O que permanece igual

- Consulta pública do mapa, lista e detalhes, sem exigir conta.
- Conta solicitada somente ao publicar ou confirmar um relato.
- Seleção de Curitiba, Londrina, Maringá e Ponta Grossa.
- Formulário com câmera/galeria e localização manual.
- Fila municipal de demonstração, histórico e atualização de status.
- Dados fictícios, IA simulada e nenhum detector de autenticidade.
- Interface mobile-first, conteúdo em português brasileiro e estados acessíveis.

## Comparação das hipóteses

| Direção | Hipótese | Ênfase | Trade-off a observar |
|---|---|---|---|
| **Serviço cívico claro** | Uma linguagem de serviço público calma e consistente facilita entender cidade, status, revisão da imagem e próximo passo. | Legibilidade e previsibilidade para moradores e equipes. | Prioriza clareza em vez de uma identidade mais expressiva ou comunitária. |
| **Participação comunitária** | Uma experiência mais local e acolhedora incentiva moradores a relatar e corroborar problemas. | Voz da comunidade e chamada para contribuir. | A chamada de participação ocupa espaço que poderia destacar mapa e lista. |
| **Operação municipal** | Uma hierarquia orientada à triagem ajuda equipes a localizar prioridade, status e idade do relato rapidamente. | Sinais de estado e fluxo da equipe municipal. | A densidade e os indicadores podem reduzir espaço inicial para exploração cidadã. |

## 1. Serviço cívico claro

**Prévia:** [abrir HTML](https://github.com/City-Eyes/city-eyes-code/blob/main/artifacts/mockup-sandbox/public/city-eyes-civic.html) · [componente do canvas](https://github.com/City-Eyes/city-eyes-code/blob/main/artifacts/mockup-sandbox/src/components/mockups/CityEyesCivic.tsx)

### Tokens de cor propostos

| Papel | Claro | Escuro |
|---|---|---|
| Fundo | `#f2f6f7` | `#142a33` |
| Superfície | `#ffffff` | `#1e3943` |
| Texto | `#18333c` | `#e8f1f2` |
| Texto secundário | `#526b73` | `#b1c5ca` |
| Borda | `#cad9de` | `#3c5963` |
| Primária | `#155b78` | `#83c8dd` |
| Acento | `#087e83` | `#72d2ca` |
| Sucesso | `#246747` | `#9bd4ae` |
| Atenção | `#76520a` | `#f0d58c` |
| Perigo | `#9a3f3a` | `#f0aaa0` |
| Foco | `#b94e18` | `#ffc49d` |

### Tipografia e ritmo

- Texto e títulos: `"Segoe UI", "Avenir Next", "Trebuchet MS", system-ui, sans-serif`.
- Metadados: `ui-monospace`, `"SFMono-Regular"` ou `Consolas`.
- Escala declarada: 10, 12, 14 e 25 px; texto base 14 px.
- Espaçamento: 4, 8, 12, 16, 20, 24 e 32 px.
- Raios: 8, 10, 14, 16, 20 e 999 px.
- Elevação: `0 2px 7px` para cartões e `0 15px 40px` para diálogos.

## 2. Participação comunitária

**Prévia:** [abrir HTML](https://github.com/City-Eyes/city-eyes-code/blob/main/artifacts/mockup-sandbox/public/city-eyes-community.html) · [componente do canvas](https://github.com/City-Eyes/city-eyes-code/blob/main/artifacts/mockup-sandbox/src/components/mockups/CityEyesCommunity.tsx)

### Tokens de cor propostos

| Papel | Claro | Escuro |
|---|---|---|
| Fundo | `#f4f0e6` | `#1e2b25` |
| Superfície | `#fffcf4` | `#29382f` |
| Texto | `#263b32` | `#f1ecdc` |
| Texto secundário | `#637368` | `#bdc5b5` |
| Borda | `#d8d2c3` | `#48574a` |
| Primária | `#315c45` | `#b8d0ae` |
| Acento | `#a85032` | `#edaa83` |
| Sucesso | `#35694e` | `#abd0a9` |
| Atenção | `#80521f` | `#edc58c` |
| Perigo | `#963f35` | `#f0a79a` |
| Foco | `#a85032` | `#f1b393` |

### Tipografia e ritmo

- Títulos: `Georgia` ou `"Times New Roman", serif`.
- Corpo: `"Trebuchet MS"` ou `"Segoe UI", sans-serif`.
- Metadados: `ui-monospace`, `"SFMono-Regular"` ou `Consolas`.
- Espaçamento: 4, 8, 12, 16, 20, 24, 32 e 40 px.
- Raios: 8, 14, 20, 28 e 999 px.
- Elevação: `0 2px 8px` para cartões e `0 16px 38px` para painéis.

## 3. Operação municipal

**Prévia:** [abrir HTML](https://github.com/City-Eyes/city-eyes-code/blob/main/artifacts/mockup-sandbox/public/city-eyes-operations.html) · [componente do canvas](https://github.com/City-Eyes/city-eyes-code/blob/main/artifacts/mockup-sandbox/src/components/mockups/CityEyesOperations.tsx)

### Tokens de cor propostos

| Papel | Claro | Escuro |
|---|---|---|
| Fundo | `#e8ece8` | `#17221f` |
| Superfície | `#f8faf8` | `#22312c` |
| Texto | `#17231f` | `#f0f4ef` |
| Texto secundário | `#4e615a` | `#b2c1b9` |
| Borda | `#b9c6bf` | `#53645b` |
| Primária | `#183b35` | `#b5d9c8` |
| Acento | `#f0b844` | `#f0b844` |
| Sucesso | `#176548` | `#8ed4a9` |
| Atenção | `#8a4a0a` | `#f4bd72` |
| Perigo | `#9b382f` | `#f19b8e` |
| Foco | `#b44a25` | `#ffc166` |

### Tipografia e ritmo

- Texto e títulos: `"Avenir Next"`, `Avenir` ou `"Segoe UI", sans-serif`.
- Dados: `"SFMono-Regular"`, `Consolas` ou `"Liberation Mono", monospace`.
- Espaçamento: 4, 8, 12, 16, 20 e 24 px.
- Raios: 6, 9, 12, 16 e 999 px.
- Elevação: `0 2px 7px` para cartões e `0 12px 32px` para painéis.

## Revisão antes de escolher

Os valores acima são candidatos extraídos dos protótipos, não tokens finais. Ainda é necessário conferir contraste WCAG AA de cada par de texto/fundo, tamanhos mínimos, foco, estados, leitor de tela e comportamento com ampliação de texto. A direção vencedora deve funcionar tanto no mapa e formulário do cidadão quanto na fila do operador; se necessário, podemos combinar uma linguagem visual com a hierarquia de outra opção, mas isso será registrado como uma nova proposta.

Depois da escolha, formalizar um único sistema com nomes semânticos estáveis, tema claro/escuro, escala tipográfica, espaçamentos, raios, elevação, componentes e estados. Só então marcar os protótipos como aprovados para orientar a implementação Expo.
