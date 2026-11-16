# CITY EYES — direção visual e tokens

**Status:** direção escolhida; proposta de tokens em revisão antes da implementação Expo  
**Data:** 16/11/2026

Este documento registra três hipóteses comparadas e a combinação escolhida para a proposta de design system. O primeiro protótipo verde/creme é somente uma referência funcional e não representa a escolha. Os três protótipos comparados mantêm os mesmos dados e fluxos, mas variam identidade visual e hierarquia.

**Direção escolhida:** combinar a paleta de **Participação comunitária** com a intenção tipográfica de **Operação municipal**. Como Avenir Next não foi fornecida como fonte licenciada, esta proposta usa **Nunito Sans**: alternativa gratuita e portátil, próxima da família Avenir, mas não idêntica. O usuário aceitou fechar fonte e tokens usando essa recomendação.

O plano v0.9 registra a aprovação funcional dos fluxos do protótipo. Essa aprovação é distinta da aparência final. A proposta combinada está formalizada no artefato `CITY EYES — Design System`; revisar a prévia antes de aplicar tokens às telas Expo.

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

## Revisão antes da aprovação final

Os valores das três hipóteses acima são candidatos extraídos dos protótipos. A proposta combinada abaixo já está no artefato, mas ainda precisa de revisão visual de cada componente, foco, leitor de tela, escala de texto e comportamento em celular.

Os tokens estão formalizados como candidata única no artefato de design system. A aprovação da prévia libera o uso como base visual; a aprovação do fluxo existente não aprova automaticamente esta aparência.

## 4. Proposta combinada — CITY EYES

| Papel | Claro | Escuro |
|---|---|---|
| Fundo / texto | `#f4f0e6` / `#263b32` | `#1e2b25` / `#f1ecdc` |
| Superfície / texto | `#fffcf4` / `#263b32` | `#29382f` / `#f1ecdc` |
| Primária / texto do botão | `#315c45` / `#fffcf4` | `#b8d0ae` / `#1e2b25` |
| Secundária / texto | `#e3e9dc` / `#263b32` | `#39453a` / `#f1ecdc` |
| Acento / texto | `#a85032` / `#fffcf4` | `#edaa83` / `#1e2b25` |
| Sucesso | `#35694e` | `#abd0a9` |
| Atenção | `#80521f` | `#edc58c` |
| Perigo | `#963f35` | `#f0a79a` |
| Borda / foco | `#d8d2c3` / `#a85032` | `#48574a` / `#f1b393` |

- **Fonte de interface:** `Nunito Sans`, carregada na prévia e prevista para ser empacotada na versão Expo; `system-ui, sans-serif` como fallback. É uma substituição por portabilidade, não a fonte original Avenir Next.
- **Monoespaçada:** `SFMono-Regular`, `Consolas`, `Liberation Mono`, monospace.
- **Espaçamento proposto:** base 4 px; escala 4, 8, 12, 16, 20, 24, 32 e 40 px.
- **Raios propostos:** base 14 px; famílias 8, 14, 20, 28 px e pill 999 px.
- **Elevação proposta:** `0 2px 8px #3b49351a` para cartões; `0 16px 38px #3443371c` para painéis.
- **Ajuste de acessibilidade:** texto secundário claro usa `#536457` (em vez do `#637368` da amostra) para atingir contraste AA nas superfícies clara, creme e verde-claro. Os pares de texto/ação primários, acento, sucesso, atenção e perigo foram medidos; testar os componentes completos, foco, zoom e temas claro/escuro antes de aprovar.
