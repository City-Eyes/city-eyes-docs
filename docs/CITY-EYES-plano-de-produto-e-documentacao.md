# CITY EYES — plano de produto e documentação do MVP

**Baseline documental:** 18/11/2026 · **Contexto:** hackathon de 17–19/11/2026
**Status:** direção visual, plataforma Expo, PostgreSQL, acesso e prioridades essenciais registrados como aprovados. Repositórios publicados e frentes de trabalho definidas. O módulo de transparência pública continua como proposta; autenticação gerenciada e limites municipais reais continuam pendentes.
**Produto:** plataforma de participação cidadã para registrar, priorizar e acompanhar problemas de infraestrutura urbana.

**Revisão de consistência do workspace:** 18/11/2026. Esta cópia canônica integra os acordos aprovados, os protótipos, a pesquisa de transparência e a amostra fictícia de licitações. Não promove propostas a decisões aprovadas; os anexos originais foram preservados.

## 0. Contexto do desafio PUCPR

O evento informado é o **Desafio Replit PUCPR 2026 — “Da ideia ao software”**, de **17 a 19 de novembro de 2026, das 14h às 17h**, com pitch no último dia. A jornada sugerida é: dia 1 para problema, público, funcionalidades, telas e fluxo; dia 2 para construir e ajustar o app; dia 3 para refinar e apresentar. O desafio é voltado a ideias de negócio ou gestão, não exige experiência prévia em programação nem equipe. Assim, o CITY EYES deve ser apresentado principalmente como uma ferramenta de **gestão e priorização da manutenção urbana**, apoiada por participação cidadã e IA — não apenas como um mapa de denúncias.

**Orientação de uso do Replit conforme o guia recebido:** preparar o plano completo no modo Gratuito; usar Power para uma primeira build completa; voltar ao Gratuito para correções pequenas, uma por vez, enquanto houver uso disponível. Conferir o modo antes de cada pedido e acompanhar uso/cobrança. O material do evento informa US$ 20 em créditos por participante, mas é preciso ativar o convite e conferir suas condições. Não é necessário adicionar cartão para participar; qualquer cartão ou uso pago habilitado pode gerar cobranças, então não habilitar excedentes sem intenção.

**Presença e benefícios:** o edital citado no material exige participação integral nos três dias; o site menciona 75% para a declaração de horas. Trate o edital como requisito de participação e confirme com a organização qualquer divergência sobre declaração ou elegibilidade aos benefícios.

## Acordos de trabalho e decisões

O usuário e um parceiro desenvolverão o CITY EYES. O usuário lidera fotos, publicação e fluxos de problemas urbanos; o parceiro lidera transparência pública. Autenticação, cidades/localização, navegação, design system, contratos API/DB e CI são fundação compartilhada e exigem coordenação antes de edição paralela. A conta GitHub do parceiro ainda não está disponível; as issues registram seu papel, sem atribuição pessoal. Expo, backend e mapa foram registrados como escolhas para o MVP; o provedor de autenticação continua pendente. Neste workspace, use **pnpm** e preserve `pnpm-lock.yaml`; não aplique regras de Yarn ou de remoção de lockfile vindas de outro projeto. Mantêm-se documentação em pt-BR, identificadores de código em inglês e nenhuma credencial em código.

**Processo:** o protótipo funcional e os fluxos foram registrados como aprovados na versão 0.9; a direção visual e os tokens foram aprovados e aplicados à variante combinada no canvas. Revisão interativa/acessível e implementação Expo ainda são etapas separadas. A organização `City-Eyes` possui dois repositórios públicos e um Project único; [documentação inicial](https://github.com/City-Eyes/city-eyes-docs/pull/5) e [código inicial](https://github.com/City-Eyes/city-eyes-code/pull/14) foram mesclados com CI aprovado. MIT cobre contribuições originais, com titular “contribuidores da organização”; as fontes externas mantêm seus direitos. O histórico público preserva a ordem das mudanças publicáveis de `main`, omite commits vazios por frente e normaliza autoria/mensagens; o backup pessoal permanece intacto. Proteções de `main`, merge commit como único método e exclusão de branch estão ativos. Auto-merge temporário foi autorizado enquanto só o proprietário tem acesso; a entrada do parceiro exige desativá-lo e ativar uma aprovação e CODEOWNERS. As automações nativas e a presença de `PROJECT_TOKEN` nos dois repos foram conferidas; o auto-add de documentos usa um workflow próprio. Consulte [responsabilidades](TEAM-OWNERSHIP.md) e o [inventário](GITHUB-ISSUE-BACKLOG.md) para rastreabilidade.

### Estado técnico verificado

Em 18/11/2026, o workspace é um monorepo **pnpm** com API Express 5 inicial, pacotes compartilhados de banco/API e artefatos de design e prototipagem. O servidor da API contém somente o health check; o schema Drizzle ainda não define tabelas CITY EYES; a especificação OpenAPI contém apenas o health check; não há app Expo nativo scaffoldado. Portanto, as telas web do sandbox são protótipos, não telas do app nem uma integração de dados.

O componente `ProcurementDemo` no sandbox mostra uma referência oficial da Prefeitura de Londrina/Equiplano e uma tabela de dados 100% fictícios, com busca e filtro por situação. Nenhuma linha foi importada da fonte oficial. O arquivo `artifacts/mockup-sandbox/tests/procurement-demo.test.mjs` cobre oito verificações da amostra e da interação; `node --test tests/procurement-demo.test.mjs` passou com 8/8 no diretório `artifacts/mockup-sandbox`. Isso valida somente a demonstração do sandbox, não uma funcionalidade de produção.

### Recomendação provisória para decidir

| Decisão | Recomendação inicial | Por quê / alternativa |
|---|---|---|
| Perfil | Backend modular, sem microserviços, com app mobile separado | A preferência por simplicidade está registrada; Expo é o cliente nativo e precisa de uma API/backend. |
| Stack | Expo + React Native + TypeScript para Android/iOS; API TypeScript no mesmo projeto | **Expo nativo escolhido.** Um repositório e backend simples evitam microserviços; cliente e servidor continuam sendo processos separados. |
| Plataforma | App nativo multiplataforma | **Escolhido:** uma codebase para Android/iOS com Expo; a demonstração não depende de publicação em loja. |
| Acesso cidadão | Consulta pública; conta para publicar e confirmar | **Aprovado:** autenticação obrigatória no backend para envio e confirmação. Conta não comprova identidade civil nem autenticidade da foto. |
| Escopo geográfico | Várias cidades desde o MVP | **Escolhido:** um banco compartilhado, `city_id` em todos os dados municipais e permissões por cidade; sem banco separado por município no início. |
| Dados | PostgreSQL gerenciado no Replit + Object Storage | **Aprovado:** API TypeScript modular, sem PostGIS (geocell + distância no backend); fotos fora do banco. |
| Mapa | `react-native-maps` | **Aprovado:** já incluído no Expo Go (Apple Maps no iOS, Google Maps no Android); lista funcional como fallback se o mapa falhar. |
| Fotos | Object Storage compatível com o ambiente, se disponível | Evita usar o banco para binários; se não houver, limitar a imagens seedadas ou fluxo de demonstração. |
| Envio e validação de fotos | Câmera e galeria, com validação em camadas | **Aprovado:** validar arquivo, registrar origem/recebimento, conferir município e sinalizar repetições; detector de IA não bloqueia automaticamente nem certifica autenticidade. |
| IA | Serviço multimodal chamado somente pelo backend, opcional | Mantém segredo fora do navegador; falha de serviço não pode bloquear denúncia. Alternativa: análise simulada explicitamente rotulada. |

As escolhas da tabela são a base aprovada para o MVP, com as pendências explicitadas no cabeçalho e na seção 16. A arquitetura de referência do Plataforma de Cursos (Laravel separado, Redis, RabbitMQ, serviço de IA separado etc.) é deliberadamente considerada excessiva para este MVP, a menos que você queira priorizá-la por experiência ou requisito.

### Decisão de plataforma: Android e iOS

| Opção | O que entrega | Custo/limite | Recomendação |
|---|---|---|---|
| Web responsiva/PWA | Um app web abre em navegadores Android e iOS e pode ser compartilhado por link | Não é binário nativo; recursos/instalação variam por navegador | Considerada, mas não escolhida |
| App nativo multiplataforma com Expo | Um código React Native/TypeScript para Android e iOS, com experiência e APIs de dispositivo mais próprias de app | Exige um backend e teste de builds/permissões nos dois sistemas | **Escolhida** |

“Monólito” aqui será tratado como **um repositório e um backend modular, sem microserviços**. O app Expo é um cliente nativo compartilhado entre Android/iOS e consumirá essa API; cliente e servidor são partes separadas.

> **Decisão de escopo:** entregar um fluxo de ponta a ponta que funcione ao vivo. O diferencial apresentado será a combinação de evidência visual, prioridade explicável, contexto geográfico e acompanhamento público — não prometer previsão ou decisão automática da prefeitura.

## 1. Resumo executivo

O CITY EYES permite que uma pessoa registre um problema urbano com foto, categoria e localização. O sistema cria uma ocorrência rastreável, apresenta uma análise assistida por IA (categoria, descrição e gravidade estimada), procura registros próximos para sugerir possível duplicidade e exibe tudo em um mapa e numa fila operacional. Uma equipe pode atualizar o status e anexar evidência de reparo; cidadãos acompanham o histórico e podem confirmar que o problema continua.

**Problema:** relatos de buracos, iluminação, drenagem e outros problemas ficam dispersos, repetidos e sem retorno claro para quem os reportou. Gestores não têm uma visão simples de concentração, prioridade e andamento.

**Públicos:** cidadãos que reportam e acompanham; equipe municipal que triagem e atualiza; avaliadores/jurados que precisam entender o impacto em poucos minutos.

**Proposta de valor:** transformar relatos locais em ocorrências georreferenciadas, priorizadas e acompanháveis, com transparência sobre o que a IA sugere e o que uma pessoa confirmou.

## 2. Objetivo, sucesso e limites

### Objetivo do hackathon
Demonstrar em poucos minutos uma denúncia nova percorrendo o caminho **registro → análise → mapa/fila → atualização administrativa → evidência de reparo**.

### Critérios de sucesso da demo
O núcleo obrigatório é publicar com sessão, consultar lista/detalhe e atualizar status com isolamento municipal. Os critérios abaixo descrevem a demo ampliada; análise/duplicatas/mapa/evidência só são exigidos se as respectivas funcionalidades P1 forem entregues. Adaptar o pitch aos cortes, sem simular silenciosamente uma capacidade ausente.
- Uma denúncia pode ser criada com categoria, descrição, foto (ou imagem de demonstração) e ponto no mapa.
- A análise mostra categoria, severidade estimada, justificativa curta e confiança/estado da análise; falha de IA não impede o registro.
- A interface distingue foto capturada no app, foto escolhida da galeria e imagem de demonstração; nenhuma recebe rótulo de “autêntica” somente por IA.
- Uma ocorrência próxima semelhante é sinalizada como possível duplicidade, sem mesclar automaticamente.
- O registro aparece no mapa e na lista sem recarregamento manual.
- Um perfil administrativo consegue alterar status e adicionar uma evidência/nota.
- A tela pública reflete a atualização e mantém histórico legível.
- A apresentação tem dados de demonstração, incluindo um caso resolvido.

### Fora do MVP de amanhã
Previsão de falhas, integração operacional real com prefeitura, ingestão contínua de dados de portais, encaminhamento de relatos ou pedidos e-SIC pelo CITY EYES, despacho de equipes, notificações por e-mail/SMS, múltiplos provedores de login (o MVP usa um único provedor gerenciado, mesmo que ele ofereça entrada via conta Google/Replit), moderação em escala, análise de vídeo, detector automático de autenticidade como autoridade, classificação automática juridicamente vinculante, confirmação de identidade e garantia de que uma obra foi concluída. São hipóteses de evolução, não capacidades prometidas. A proposta da seção 17, ainda não aprovada, é limitada a diretório/link-out e metadados de fontes.

## 3. Atores e permissões

| Ator | Objetivo | Permissões no MVP |
|---|---|---|
| Visitante | Consultar problemas sem cadastro | Escolher cidade e ver mapa, lista e detalhes públicos; não publica nem confirma relatos |
| Cidadão autenticado | Relatar e acompanhar problemas | Todas as consultas públicas; publicar denúncia e confirmar problema ativo, se essa funcionalidade for implementada |
| Operador municipal | Triar e acompanhar ocorrências da sua cidade | Ver fila apenas da cidade em que tem vínculo; alterar status; registrar nota; anexar evidência de resolução |
| Administrador municipal | Gerenciar acesso e operação de uma cidade | Administrar operadores e registros somente da(s) cidade(s) em que tem papel de `city_admin` |
| Administrador da plataforma | Operar configuração global | Acesso global excepcional; não necessário para a demonstração do MVP |
| Serviço de IA | Apoiar a triagem | Ler imagem enviada e metadados mínimos; gerar sugestão estruturada; não publicar nem alterar status por conta própria |

**Regras de autorização:** publicar e confirmar relatos exige sessão válida, verificada no backend; o autor é derivado da sessão, nunca aceito de um `reporter_id` arbitrário do cliente. Cada leitura e alteração administrativa valida a associação usuário–cidade; operador de uma cidade não pode ler notas internas nem alterar status de outra. A API verifica a cidade no servidor, não confia apenas no `city_id` enviado pelo app. Cidadãos podem reportar em qualquer cidade atendida, sem vínculo municipal de operador. Visitantes só consultam conteúdo público; cidadãos não mudam status operacional. Duplicidade é buscada dentro da mesma cidade. A IA é consultiva; conta não elimina a necessidade de rate limit, moderação e validação.

## 4. Funcionalidades mapeadas e prioridade

| ID | Funcionalidade | Prioridade | Escopo para amanhã |
|---|---|---|---|
| F-01 | Criar ocorrência com categoria, descrição, imagem e localização | P0 | Obrigatória; GPS ou coordenadas manuais; falha de câmera permite galeria/evidência demo rotulada, sem fingir upload concluído |
| F-02 | Análise assistida: categoria, severidade e resumo | P1 | IA real se acessível; fallback claramente identificado como demonstração |
| F-03 | Detecção de possíveis duplicatas por proximidade/categoria | P1 | Heurística geográfica simples; sugerir, nunca fundir automaticamente |
| F-04 | Seletor de cidade, lista e detalhe públicos | P0 | Conteúdo limitado à cidade selecionada; lista é o fallback funcional |
| F-05 | Fila municipal e mudança de status | P0 | Operador só vê/altera registros das cidades em que tem vínculo |
| F-06 | Evidência de reparo | P1 | Foto/nota adicionada ao concluir; comparação visual automatizada é demonstração ou fase futura |
| F-07 | Confirmação por cidadãos | P1 | Botão “ainda está acontecendo” ou contagem de confirmações |
| F-08 | Indicadores: abertas, críticas, resolvidas e áreas com mais relatos | P1 | Contagens calculadas dos registros disponíveis |
| F-09 | Notificações de atualização | P2 | Fora do hackathon |
| F-10 | Previsão de problemas futuros | P2 | Fora do hackathon; exige histórico e validação |
| F-11 | Registrar origem da foto e localização | P0 | Distinguir câmera/galeria/demo e GPS/pin; sinal de contexto, não prova de autenticidade |
| F-12 | Mapa interativo sincronizado com a lista | P1 | Pins e filtros da cidade selecionada; mapa pode ser cortado sem perder a lista |
| F-13 | Contexto de transparência pública por cidade/ocorrência | Proposta — decisão pendente | Candidato: diretório de fontes oficiais, data de consulta e links externos; sem ingestão contínua nem encaminhamento automático |

**Regra de corte:** F-01, F-04, F-05 e F-11 formam o fluxo essencial. Se faltar tempo, cortar F-06–F-08, depois F-02/F-03 e F-12. F-13 não altera a ordem ou o escopo do MVP até ser aprovado. A análise simulada só aparece se estiver claramente rotulada; não sacrificar o fluxo de publicação e a autorização municipal por funcionalidades P1/P2.

## 5. Histórias de usuário e critérios de aceite

**US-01 — Registrar problema.** Como cidadã, quero enviar foto e localização para registrar um problema sem preencher um formulário longo.  
Aceite: publicar exige sessão válida; cidade é escolhida ou sugerida pela localização; campos obrigatórios são validados; a foto pode vir da câmera ou galeria com a origem registrada; a localização pode ser obtida por GPS ou informada manualmente (pin quando F-12 estiver disponível); a API aplica a bbox aproximada da cidade ativa, sem prometer pertencimento municipal exato; a ocorrência recebe identificador, autor da sessão, data e status inicial; erro da análise não perde o relato.

**US-02 — Entender a análise.** Como cidadã, quero saber que categoria e gravidade foram sugeridas e por quê.  
Aceite: resultado exibe categoria, faixa/nota de gravidade, justificativa e indicação de que é uma estimativa; baixa confiança pede revisão humana.

**US-03 — Evitar duplicatas.** Como cidadã, quero ver ocorrências parecidas próximas antes de criar outra.  
Aceite: sugestões mostram distância, categoria e status apenas para a cidade selecionada; posso abrir a existente ou continuar com novo registro; nenhum registro é combinado sem decisão humana.

**US-04 — Acompanhar no mapa.** Como cidadã, quero encontrar ocorrências próximas e ver seu estado.  
Aceite: a cidade ativa fica visível; lista e mapa mostram somente os relatos dessa cidade e usam os mesmos filtros; selecionar um pin abre detalhes; legenda distingue status.

**US-05 — Priorizar a fila.** Como operador, quero ordenar e filtrar ocorrências para decidir o que revisar primeiro.  
Aceite: fila mostra somente cidades autorizadas e inclui categoria, idade do relato, localização e prioridade sugerida; filtros por status/categoria funcionam; prioridade não é apresentada como ordem oficial de risco.

**US-06 — Atualizar ocorrência.** Como operador, quero mudar o estado e registrar o motivo.  
Aceite: só operador associado à cidade (ou administrador municipal dessa cidade) pode atualizar; mudança exige status válido; autor, data, estado anterior/novo e nota são preservados no histórico.

**US-07 — Comprovar resolução.** Como operador, quero anexar evidência ao concluir um reparo.  
Aceite: resolução permite nota e evidência; cidadão vê a atualização; eventual análise automática é descrita como “comparação visual estimada”, não prova definitiva.

**US-08 — Confirmar problema ativo.** Como cidadã, quero informar que o problema continua.  
Aceite: confirmar exige sessão válida; a identidade da conta não é exibida publicamente; uma restrição única por ocorrência, conta e tipo de confirmação impede contagem repetida do mesmo apoio.

**US-09 — Alternar cidade.** Como cidadã, quero escolher uma cidade e ver somente seus relatos para entender os problemas locais.  
Aceite: o contexto da cidade ativa fica visível; trocar cidade atualiza mapa, lista e filtros; uma sugestão de duplicata nunca atravessa a fronteira municipal.

**US-10 — Operar com acesso municipal.** Como operador, quero gerir somente as cidades às quais fui associado.  
Aceite: vínculo e papel são conferidos no backend em cada leitura/mutação administrativa; um operador de uma cidade não consegue ler notas internas ou alterar registros de outra.

**US-11 — Entender o nível de revisão da evidência.** Como cidadã, quero saber se uma foto foi apenas recebida, corroborada ou revisada por uma equipe.  
Aceite: a origem (câmera/galeria) e o estado de revisão são distintos do resultado de IA e do status da ocorrência; nenhum detector de IA declara a foto verdadeira.

## 6. Casos de uso principais

### UC-01: registrar e localizar uma ocorrência
1. Cidadão abre “Reportar problema”; se não estiver autenticado, conclui o acesso à conta antes de publicar.
2. Escolhe cidade (ou aceita a cidade sugerida pela localização), categoria (buraco, iluminação, drenagem, calçada/acessibilidade, outro), descreve brevemente e envia foto.
3. Permite localização do dispositivo ou informa coordenadas manualmente; com F-12, pode ajustar o pin. Não registra fora da bbox aproximada da cidade selecionada. A bbox pode incluir território vizinho e não equivale à validação por polígono.
4. Sistema valida entrada e procura ocorrências da mesma categoria e cidade dentro do raio configurado.
5. Sistema apresenta possíveis semelhantes; cidadão pode abrir uma ocorrência ou continuar.
6. Backend persiste ocorrência e evidência; análise fica pendente.
7. Análise retorna sugestões ou fica indisponível; registro permanece criado.
8. Cidadão recebe confirmação e link/detalhe da ocorrência.

### UC-02: triagem e resolução
1. Operador entra no contexto da cidade autorizada e filtra a fila por status, categoria ou prioridade sugerida.
2. Abre ocorrência, revisa imagem, localização, análise e semelhantes.
3. Atualiza para “em análise” ou “em atendimento” com nota.
4. Ao concluir, adiciona nota/evidência e marca “resolvida”.
5. Sistema cria evento de histórico e atualiza mapa, detalhes e indicadores.

### UC-03: tratar análise indisponível
A análise expira/falha. A ocorrência continua utilizável, marcada como “análise indisponível”; o cidadão pode revisar categoria manualmente e o operador pode priorizar sem depender de IA. Não substituir falha por resultado inventado sem rótulo.

### UC-04: escolher cidade e isolar a operação
1. Cidadão seleciona uma cidade de uma lista demonstrativa ou aceita a sugestão de localização.
2. App carrega somente relatos públicos daquela cidade.
3. Para novo relato, backend verifica que a coordenada está dentro da bbox aproximada da cidade selecionada; a mensagem não deve prometer pertencimento municipal exato.
4. Operador autenticado recebe a lista das cidades às quais tem vínculo; escolhe o contexto de trabalho.
5. API nega leitura e mutação de dados privados fora desse vínculo e registra o teste de isolamento.

## 7. Estados e regras de negócio

Estados: **aberta → em análise → em atendimento → resolvida**. Estados adicionais **inválida** e **duplicada** podem ser usados por operador com justificativa; somente “duplicada” exige vínculo para a ocorrência original, na mesma cidade. Reabertura pode voltar de resolvida para aberta, registrando evento e motivo.

- **Gravidade estimada (0–100):** sugestão da IA, acompanhada por fatores/justificativa. Não equivale a risco certificado. Se não houver modelo, usar estado “demo” e dados pré-definidos.
- **Prioridade operacional:** `priority = severity_score * 0.5 + dias_aberto * 2 + confirmações_still_exists * 5` (severidade ausente conta como 50). Pesos são constantes no backend, ajustáveis depois. Mostrar como recomendação, não decisão automática.
- **Possível duplicidade:** distância e categoria semelhantes dentro da mesma cidade; limiar ajustável. Deve ser revisada por pessoa.
- **Origem da evidência:** registrar se a imagem veio da câmera no app, da galeria ou de dados de demonstração. Isso descreve o caminho de envio, não comprova quando/onde a cena aconteceu.
- **Privacidade:** remover metadados EXIF quando possível; não exigir nome/endereço; evitar publicar rostos/placas; política de retenção e denúncia de conteúdo abusivo são necessárias antes de produção.
- **Localização:** pedir permissão foreground explicitamente e usar GPS como sugestão única; deixar a pessoa confirmar ou informar coordenadas manualmente, com pin quando F-12 estiver disponível. Não rastrear em segundo plano; rejeitar pontos fora da bbox aproximada da cidade ativa.
- **Limite municipal (MVP):** bbox retangular por cidade (`min_lat`, `min_lng`, `max_lat`, `max_lng`), rotulada como aproximação; pode aceitar pontos de municípios vizinhos nas bordas. Polígono oficial (malha municipal do IBGE) entra depois em `boundary_geojson`.
- **Bairros:** não pedir que a equipe cadastre uma lista para cada cidade no MVP. Usar coordenada e limite municipal; exibir bairro somente quando houver polígonos municipais confiáveis.

### Confiança e validação das imagens

“Falta de camadas de contraste” não é uma regra geral de imagens geradas por IA. Detectores costumam classificar padrões estatísticos aprendidos — por exemplo, textura, resíduos/frequências ou inconsistências visuais —, não verificar um sinal único que prove a origem. Compressão, redimensionamento, recorte e novos geradores mudam esses sinais. Revisões técnicas descrevem essas famílias de pistas, mas benchmarks recentes mostram fragilidade fora de cenários controlados: o [benchmark da NeurIPS 2025](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb693c67f61e5321746ffce8b6fdd2d0-Paper-Datasets_and_Benchmarks_Track.pdf) encontrou queda em dados do mundo real, e o [benchmark ICCV 2025](https://openaccess.thecvf.com/content/ICCV2025/papers/Li_Bridging_the_Gap_Between_Ideal_and_Real-world_Evaluation_Benchmarking_AI-Generated_ICCV_2025_paper.pdf) mostrou que transformações comuns podem prejudicar a detecção. Um detector pode sinalizar foto real ou deixar passar imagem sintética; não serve como prova nem como bloqueio automático.

- **IA visual:** sugerir categoria, descrição e gravidade aparente do problema; não certificar autenticidade nem rejeitar automaticamente.
- **Origem declarada pelo app:** oferecer câmera no app e galeria; guardar `capture_source` e horário de recebimento do servidor. “Câmera no app” é apenas o caminho usado, não uma prova criptográfica.
- **Localização:** GPS de uso único como sugestão, com precisão informada quando disponível; usuário confirma o ponto; API verifica a bbox aproximada da cidade selecionada. Coordenadas/EXIF podem ser alterados, então não são prova isolada nem garantia de pertencimento municipal exato.
- **Corroboração:** confirmações independentes e relatos semelhantes aumentam sinal para triagem, mas não provam verdade por si só.
- **Revisão humana:** imagens repetidas, incompatíveis com a categoria/local ou marcadas por usuários vão para revisão. Não esconder nem apagar sem um motivo e trilha de auditoria.
- **Rótulos públicos:** “Recebida”, “Corroborada pela comunidade” ou “Revisada pela equipe”. Separar isso do status operacional (aberta/em atendimento/resolvida) e do resultado da análise de IA.
- **Sem garantia forense:** horário de upload é confiável como horário de recebimento pelo servidor, não como horário em que a cena aconteceu. GPS/EXIF ajudam na triagem, mas podem estar ausentes ou alterados; não armazenar EXIF desnecessário.
- **C2PA/Content Credentials (futuro):** se uma imagem já trouxer credenciais C2PA válidas, elas podem atestar a integridade da cadeia de proveniência assinada e indicar ferramentas/edições. Isso não prova que a cena retratada é verdadeira; ausência de credenciais não significa que a imagem seja falsa. Não implementar validação C2PA no hackathon.

**Decisão aprovada para o MVP:** aceitar foto da câmera ou galeria, mostrar a origem e manter novas imagens como “Recebidas”; usar IA só para triagem visual. Validar arquivo, registrar origem/recebimento, conferir município e sinalizar reenvios idênticos. Não construir um detector de autenticidade como bloqueio. Se houver evidência incoerente, enviar para revisão humana sem impedir o registro; arquivos tecnicamente inválidos continuam sendo recusados.

**Procedimento recomendado:** validar formato real/tamanho do arquivo, registrar recebimento no servidor, conferir o ponto municipal e usar hash exato para sinalizar reenvios idênticos. Um hash não prova autenticidade nem identifica versões recortadas. Uma foto tirada no app pode fotografar uma tela ou uma cena encenada; uma foto real também pode ser antiga ou estar associada ao local errado. A avaliação deve tratar essas fraudes além de imagens sintéticas. Mostrar “revisada pela equipe” somente depois de uma revisão real, nunca pelo simples envio via câmera.

**Validação futura de detector (fora do bloqueio de publicação):** montar conjunto de referência separado entre fotos reais autorizadas, imagens geradas por diferentes modelos e versões comprimidas/recortadas. Medir falsos positivos em fotos reais e falsos negativos em sintéticas, por condição, em dados não usados para ajustar limiares. Resultado do detector não é probabilidade calibrada de verdade. Só adotar como sinal auxiliar após medir benefício, custo e erros no contexto urbano.

**Fontes de aprofundamento:** [revisão das técnicas de detecção](https://link.springer.com/article/10.1007/s44443-025-00154-8), [benchmark NeurIPS 2025](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb693c67f61e5321746ffce8b6fdd2d0-Paper-Datasets_and_Benchmarks_Track.pdf), [C2PA Explainer](https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html) e [C2PA FAQ](https://c2pa.org/faq).

## 8. Modelo de dados inicial

PostgreSQL, IDs UUID, timestamps UTC; coordenadas em latitude/longitude. **PostGIS não será usado no MVP**; busca aproximada com geocell/geohash indexado e cálculo de distância no backend.

Não cadastrar todos os bairros manualmente. A coordenada e o limite municipal são os dados principais; `neighborhood_label` é opcional e só deve ser preenchido a partir de polígonos de bairros confiáveis. Sem esses dados, mostrar o pin/endereço disponível sem inventar bairro.

```text
cities
- id UUID PK
- name TEXT NOT NULL
- slug TEXT UNIQUE NOT NULL
- min_lat, min_lng, max_lat, max_lng DECIMAL(9,6) NOT NULL (bbox aproximada usada no MVP)
- boundary_geojson JSONB NULL (polígono oficial futuro; não usado no MVP)
- created_at TIMESTAMPTZ

users
- id UUID PK
- auth_provider TEXT NOT NULL
- auth_subject TEXT NOT NULL
- UNIQUE (auth_provider, auth_subject)
- display_name TEXT NULL
- email TEXT UNIQUE NULL
- created_at TIMESTAMPTZ

city_memberships
- user_id UUID NOT NULL REFERENCES users(id)
- city_id UUID NOT NULL REFERENCES cities(id)
- role ENUM('operator','city_admin') NOT NULL
- created_at TIMESTAMPTZ
- PRIMARY KEY (user_id, city_id)

platform_admins (opcional; não necessário para a demo)
- user_id UUID PRIMARY KEY REFERENCES users(id)

reports
- id UUID PK
- city_id UUID NOT NULL REFERENCES cities(id)
- public_code TEXT UNIQUE NOT NULL
- title TEXT NOT NULL (gerado pelo backend a partir da categoria + endereço/código, ex.: "Buraco — CTB-0042"; não é campo do formulário)
- description TEXT
- category ENUM('pothole','lighting','drainage','sidewalk','other')
- status ENUM('open','reviewing','in_progress','resolved','invalid','duplicate')
- latitude DECIMAL(9,6) NOT NULL
- longitude DECIMAL(9,6) NOT NULL
- location_source ENUM('device','user_pin','manual_coordinates') NOT NULL
- location_accuracy_m NUMERIC NULL
- geocell TEXT NULL (célula geográfica para busca aproximada sem PostGIS)
- neighborhood_label TEXT NULL (rótulo opcional derivado; coordenada é a fonte principal)
- address_label TEXT NULL
- severity_score SMALLINT NULL CHECK (0..100)
- severity_reason TEXT NULL
- ai_state ENUM('pending','complete','unavailable','demo') (na UI, 'demo' sempre aparece como "Simulação")
- duplicate_of UUID NULL REFERENCES reports(id)
- reporter_id UUID NOT NULL REFERENCES users(id)
- created_at, updated_at TIMESTAMPTZ

media
- id UUID PK
- report_id UUID NOT NULL REFERENCES reports(id)
- kind ENUM('initial','resolution')
- capture_source ENUM('in_app_camera','gallery','seed_demo')
- review_state ENUM('received','community_corroborated','staff_reviewed','disputed')
- storage_key TEXT NOT NULL
- content_hash_sha256 CHAR(64) NULL (calculado no servidor; sinaliza reenvio idêntico)
- created_by UUID NULL REFERENCES users(id)
- created_at TIMESTAMPTZ

report_events
- id UUID PK
- report_id UUID NOT NULL REFERENCES reports(id)
- actor_id UUID NULL REFERENCES users(id)
- event_type TEXT NOT NULL
- from_status TEXT NULL
- to_status TEXT NULL
- visibility ENUM('public','internal') NOT NULL
- note TEXT NULL
- created_at TIMESTAMPTZ

confirmations (P1)
- id UUID PK
- report_id UUID NOT NULL REFERENCES reports(id)
- user_id UUID NOT NULL REFERENCES users(id)
- kind ENUM('still_exists','resolved')
- created_at TIMESTAMPTZ
- UNIQUE (report_id, user_id, kind)

ai_analyses (opcional; pode iniciar como colunas em reports)
- id UUID PK
- report_id UUID NOT NULL REFERENCES reports(id)
- model_label TEXT
- category_suggestion TEXT
- severity_score SMALLINT
- rationale TEXT
- confidence REAL
- raw_result JSONB NULL
- created_at TIMESTAMPTZ
```

Índices: `reports(city_id, status, created_at)`, `reports(city_id, category, status)`, `reports(city_id, geocell)`, `city_memberships(city_id, role)`, `media(report_id)`, `media(content_hash_sha256)` e `report_events(report_id, created_at)`. Consultas públicas retornam somente eventos `visibility='public'`, sem identidade privada do autor; eventos internos exigem vínculo municipal válido. A API verifica que `duplicate_of` aponta para ocorrência da mesma cidade. Guardar imagens no App Storage; banco mantém apenas referências controladas, nunca credenciais de acesso público irrestrito.

### Estratégia de escala do banco

**Decisão recomendada:** começar com PostgreSQL gerenciado do Replit para os registros e App Storage/Object Storage para as fotos. Isso evita colocar binários no banco e evita operar infraestrutura própria durante o hackathon. O Replit documenta PostgreSQL gerenciado com escalabilidade automática, alta disponibilidade, monitoramento de consultas, recuperação point-in-time/backups e réplicas de leitura; confirmar no painel do projeto quais recursos estão habilitados para a conta antes de uma operação real.

Para suportar várias cidades desde o MVP e crescer sem redesenhar tudo:
- incluir `city_id` desde o início e aplicar o escopo da cidade em cada consulta e autorização;
- buscar apenas a área visível do mapa (`bbox`) e paginar resultados; nunca carregar todos os relatos de todas as cidades;
- indexar status, categoria, data e localização conforme consultas medidas;
- armazenar fotos em Object Storage e transferir/analisar em fluxo assíncrono, sem segurar o pedido do usuário;
- monitorar latência, consultas lentas, conexões, armazenamento e tráfego; usar réplicas/cache só quando métricas mostrarem gargalo;
- particionar por cidade/período ou migrar para uma oferta dedicada apenas quando volume, requisitos de disponibilidade/região, governança ou custo justificarem.

**Geodados:** PostGIS está fora do MVP, independentemente da disponibilidade. Usar `geocell`/geohash indexado para selecionar candidatos, incluindo células vizinhas, e calcular distância sobre o conjunto reduzido; consultar apenas a mesma célula perde casos próximos às bordas. PostGIS e índice espacial são evoluções, não decisões automáticas durante a build. A API valida os filtros geográficos, aplica cidade e paginação e não executa varreduras completas.

**Limite da recomendação:** não há um número de usuários/relatos que eu possa prometer com as fontes atuais. “Aguentar uma cidade” depende de simultaneidade, frequência de consulta ao mapa, tamanho/quantidade de fotos, retenção e tempo de resposta. A base proposta é um plano de crescimento gradual, não uma garantia de capacidade para qualquer cidade ou carga.

**Referências Replit:** [Native Mobile Apps](https://docs.replit.com/features/artifact-types/building-mobile-apps), [Preview and test on your phone](https://docs.replit.com/build/mobile-preview-testing), [Database](https://docs.replit.com/features/data-and-storage/sql-database), [Data recovery](https://docs.replit.com/features/data-and-storage/data-recovery), [Object Storage](https://docs.replit.com/features/data-and-storage/object-storage) e [Deployment types](https://docs.replit.com/features/publishing/deployment-types).

## 9. Arquitetura para o prazo (aprovada em 16/11)

**Stack proposta após a decisão de app nativo:** Expo + React Native + TypeScript para uma codebase Android/iOS; um backend/API TypeScript modular no mesmo repositório, sem microserviços; PostgreSQL gerenciado do Replit para dados e App Storage/Object Storage para fotos; IA multimodal chamada apenas pelo backend. Isso mantém o backend como monólito modular e um app mobile compartilhado, mas são dois processos (cliente nativo e servidor), não um único binário. A documentação do Replit descreve preview em simuladores iOS/Android e teste em aparelho via Expo Go; publicação na Google Play não é suportada pelo fluxo do Replit, enquanto há fluxo guiado para App Store. O hackathon pode demonstrar sem publicar nas lojas.

```text
App Expo (Android/iOS)
  └─ API HTTPS (validação e autorização)
       ├─ PostgreSQL: cidades, ocorrências, papéis, eventos, análises
       ├─ Object Storage: evidências de imagem
       └─ Serviço de IA: sugestão estruturada (opcional/fallback)
```

**Módulos:** `reports` (criação, busca, status), `media` (upload e acesso), `analysis` (chamada/fallback da IA), `admin` (fila e autorização), `map` (consulta geográfica). A análise é assíncrona ou desacoplada: primeiro salvar relato, depois analisar; timeout não bloqueia o usuário. Não iniciar com filas externas ou serviços separados; adicionar processamento/fila quando as medições justificarem.

**Endpoints indicativos:** `GET /api/cities`, `GET /api/cities/:cityId/reports?bbox=&status=&category=`, `POST /api/cities/:cityId/reports`, `GET /api/cities/:cityId/reports/:reportId`, `POST /api/cities/:cityId/reports/:reportId/confirmations`, `POST /api/cities/:cityId/reports/:reportId/status` (operador), `POST /api/cities/:cityId/reports/:reportId/media` (upload/evidência), `POST /api/cities/:cityId/reports/:reportId/analyze` (interno/servidor). Todo endpoint administrativo valida membership do usuário e cidade no servidor. Validar payloads e limitar tamanho/tipo de arquivo.

**Autenticação aprovada:** mapa e detalhes públicos; conta obrigatória para publicar e confirmar; acesso de operador protegido por vínculo municipal. Usar um provedor de autenticação gerenciado compatível com Expo e backend; a escolha/configuração do provedor depende de validação técnica, sem implementar autenticação criptográfica própria. Testar login, logout, expiração e retorno ao fluxo. Não confiar em esconder botões; a API valida sessão e permissões e protege uploads contra uso anônimo. O app não recebe credenciais privilegiadas de banco/storage. Se o login gerenciado não funcionar, aplicar o fallback de autenticação da seção 14 (contas seed, rotulado e declarado no pitch), nunca como substituto silencioso.

## 10. Protótipos e design system

Nenhuma tela deve ser implementada antes de um protótipo ser revisado e aprovado. Como a plataforma escolhida é nativa, primeiro prototipar o fluxo essencial para telas de celular Android e iOS:

1. Seletor de cidade, mapa/lista pública e filtros; cidade ativa sempre visível.
2. Acesso à conta ao iniciar publicação/confirmação, incluindo cancelamento e erro de login.
3. Formulário de denúncia com localização manual.
4. Detalhe da ocorrência e linha do tempo.
5. Fila e detalhe de triagem no contexto de uma cidade autorizada.

Cada tela deve ter estados de carregamento, vazio, erro e sucesso; registrar status `rascunho`, `em revisão`, `aprovada` ou `implementada`. Validar o protótipo com a pergunta: “uma pessoa sem contexto consegue reportar e encontrar o andamento sem ajuda?”. Só depois da aprovação transformar o protótipo em interface funcional.

### Ferramenta de protótipo — HTML/CSS/JavaScript aprovado

| Opção | Reaproveitamento na versão Expo | Custo/limite | Melhor uso |
|---|---|---|---|
| HTML/CSS/JavaScript clicável | Reaproveita fluxo, textos, dados, cores/tokens e assets; DOM/CSS não vira componente React Native diretamente | Rápido e portátil como arquivo, mas a camada de tela precisará ser refeita no app nativo | **Aprovado:** revisão barata de fluxo e aparência antes da build |
| Replit Design | Frames e sistema visual podem orientar a implementação; não exporta código Expo diretamente | Edições simples no Visual Editor são documentadas como sem gasto de créditos; o Build de um frame cria um app web, não um app mobile Expo | Explorar visualmente, se o handoff web não for confundido com a build nativa |
| Expo com dados falsos | Componentes, navegação e estilos viram parte do app final | Começa a implementação mais cedo; exige código e configuração antes da revisão | Quando a prioridade principal for reutilização literal do código |

**Recomendação para este hackathon:** fazer um protótipo clicável simples em HTML/CSS/JavaScript para aprovar fluxo e telas, mantendo-o sem backend e sem bibliotecas pesadas. Usar `?cidade=`, `?estado=` e `?tema=escuro` para alternar contextos e estados. Depois de aprovado, fazer uma única build mobile Expo e reutilizar tokens, conteúdo, dados seed, rótulos e decisões — não tentar converter DOM/CSS para React Native. Se a prioridade mudar para reutilizar código de tela, abandonar o HTML e prototipar diretamente em Expo com dados falsos.

**Protótipo funcional aprovado conforme v0.9:** `artifacts/mockup-sandbox/public/city-eyes-prototype.html` é a fonte HTML/CSS/JavaScript autocontida; `artifacts/mockup-sandbox/src/components/mockups/CityEyesPrototype.tsx` apenas a exibe no canvas. A quarta variante `artifacts/mockup-sandbox/src/ds/city-eyes-system/mockups/CityEyesCombined.tsx` aplica o sistema visual aprovado, sem alterar as fontes anteriores, e foi aprovada visualmente em 16/11. Relatos, pontos, login, IA e ações do operador continuam simulados; a nova variante é um mockup, não o app de produção.

**Direção visual aprovada em 16/11:** cores de Participação comunitária + intenção tipográfica de Operação municipal. Como Avenir Next não foi fornecida como fonte licenciada, foi adotada Nunito Sans como substituição gratuita e multiplataforma, não idêntica à original. Tokens estão em [CITY-EYES-direcoes-visuais.md](CITY-EYES-direcoes-visuais.md) e no pacote de design system; o app Expo precisará carregar a fonte via `expo-font`.

**Sobre créditos:** a documentação do Replit afirma que ajustes simples no Visual Editor não consomem créditos, mas o Design “Build” gera um artefato web e não entrega componentes nativos. Não há base para prometer que toda geração de frames ou build será gratuita. Referências: [Replit Design](https://docs.replit.com/design/what-is-replit-design), [Build your design](https://docs.replit.com/design/build-your-design), [preview de apps mobile](https://docs.replit.com/build/mobile-preview-testing).

**Sistema visual aprovado:** tokens semânticos, temas claro/escuro, família Nunito Sans, espaçamento, raios e componentes estão no pacote `@workspace/city-eyes-system`; a nova variante clicável já consome esse pacote. Revisar os estados interativos e acessibilidade da variante e integrar a fonte ao app Expo. Usar alvos mínimos de 44 pt em iOS e 48 dp em Android; testar escala de texto, contraste WCAG AA, foco, VoiceOver/TalkBack e microcopy em português brasileiro.

## 11. UX e telas

1. **Mapa público:** seletor de cidade visível; mapa como foco, lista alternativa acessível, legenda, filtros simples, botão “Reportar” e opção de localização manual.
2. **Novo relato:** categoria, descrição, foto, localização editável, aviso de privacidade, sugestões de duplicata.
3. **Detalhe da ocorrência:** status e linha do tempo, evidência, estimativa de IA com rótulo, confirmações e ação de acompanhamento.
4. **Command Center:** cartões de contagem, fila ordenável, filtros, detalhe lateral e ações de status protegidas.
5. **Estado vazio/erro:** cidade sem relatos, permissão de localização/câmera negada, upload falho, mapa sem tiles, IA indisponível e carregamento lento devem ter alternativa clara.

## 12. Plano de testes e cenários

| ID | Cenário | Resultado esperado | Prioridade |
|---|---|---|---|
| T-01 | Criar relato completo | Salva e aparece na lista; também no mapa se F-12 entregue | P0 |
| T-02 | Enviar sem categoria/localização | Validação explica campo faltante; nada parcial é perdido | P0 |
| T-03 | Negar geolocalização | Seleção manual continua funcionando | P0 |
| T-04 | IA demora ou falha (se F-02 entregue) | Relato permanece salvo e análise é marcada indisponível | P1 |
| T-05 | Ocorrência semelhante próxima (se F-03 entregue) | Sugestão aparece; usuário ainda decide | P1 |
| T-06 | Ocorrência distante ou categoria diferente | Não é marcada como duplicata indevidamente | P1 |
| T-07 | Cidadão tenta alterar status | API retorna não autorizado; estado não muda | P0 |
| T-08 | Operador muda status com nota | Atualiza e evento entra na linha do tempo | P0 |
| T-09 | Operador resolve com evidência | Evidência é associada; público vê a atualização | P1 |
| T-10 | Filtro por status/categoria | Mapa e lista apresentam conjunto consistente | P1 |
| T-11 | Upload de arquivo inválido/muito grande | Recusado com mensagem; sem quebrar formulário | P1 |
| T-12 | Duplo clique/reenvio | Evita duplicar submissão quando possível | P1 |
| T-13 | Acessibilidade mobile | Fluxo utilizável com leitor de tela, escala de texto e alvos de toque adequados | P1 |
| T-14 | Conteúdo sem imagem ou endereço | Detalhe continua informativo e não quebra | P1 |
| T-15 | Operador de cidade A tenta ler/alterar cidade B | API nega a operação e não revela dados privados | P0 |
| T-16 | Relato fora da bbox aproximada da cidade selecionada | API recusa e app pede correção; não promete validação de fronteira exata | P0 |
| T-17 | Duplicata próxima em outra cidade | Não aparece como duplicata do relato atual | P1 |
| T-18 | IA analisa uma imagem | Resultado nunca a declara autêntica; imagem segue como recebida ou para revisão humana | P1 |
| T-19 | Visitante consulta mapa/detalhe | Conteúdo público acessível sem conta; identidade e notas internas não aparecem | P0 |
| T-20 | Requisição anônima tenta publicar, confirmar ou iniciar upload | API retorna 401 e não cria registro, confirmação ou autorização de upload | P0 |
| T-21 | Sessão expirada durante envio | API exige novo acesso; app explica o erro sem afirmar que publicou | P0 |
| T-22 | Cliente envia outro reporter_id | Autor é derivado da sessão; não publica em nome de outra conta | P0 |
| T-23 | Conta confirma duas vezes o mesmo tipo de apoio | Restrição no banco impede duplicidade de contagem | P1 |
| T-24 | Visitante consulta histórico com nota interna | API não retorna nota interna nem identidade privada | P0 |
| T-25 | Cliente tenta ativar login demo em ambiente real | Endpoint demo não existe ou recusa; não concede papel por dados do cliente | P0 |
| T-26 | Mesmo arquivo é reenviado (hash disponível) | Sinaliza repetição, sem declarar fraude ou autenticidade | P1 |

**Verificação já concluída no protótipo de licitações:** `node --test tests/procurement-demo.test.mjs` em `artifacts/mockup-sandbox` passou 8/8 em 18/11/2026. Os testes cobrem identificação da amostra fictícia, campos/valores, datas, busca, filtro de situação, combinação de filtros e estado vazio acessível. Isso não testa a API, dados da prefeitura ou o app Expo.

**Ambiente de teste planejado:** iOS no Simulator do Mac do usuário via `idb` e `xcrun simctl location`; Android no aparelho físico via `adb`, incluindo câmera e GPS reais. Ambos usam Expo Go com uma URL de desenvolvimento alcançável. Esses dispositivos e comandos locais não estão automaticamente acessíveis ao agente neste container Linux: confirmar conexão, versões e responsável pela execução antes de tratá-los como disponíveis. Registrar evidências e resultado; ferramenta instalada ou tela exibida não equivale a teste aprovado. Maestro é automação de fluxo; idb/adb são controles auxiliares.

**Smoke test antes da apresentação:** iOS no Simulator (idb) e Android no aparelho (adb, incluindo câmera e localização reais); criar relato; verificar análise/fallback; abrir relato; entrar no painel; mudar status; confirmar evento e indicador. Manter três registros seedados e uma conta de operador disponíveis caso rede/IA falhe.

Aplicar o smoke somente às capacidades entregues e registrar cortes; sem conectividade, seed no servidor não garante acesso offline. Não apresentar o fluxo offline como suportado sem implementação e teste específicos.

**Estratégia automatizada:** testes unitários de regras; integração da API com banco de teste para validação, persistência, autoria e isolamento; Jest/jest-expo + React Native Testing Library para componentes Expo; Maestro para os fluxos críticos quando o setup estiver estável. Simular falhas de IA/storage. Escolher o runner da API compatível com o código existente, sem impor outra migração. Cobertura percentual não substitui os cenários P0; 75% continua proposta, não gate aprovado.

### Avaliação do Maestro

**Recomendação: sim, usar Maestro para os fluxos críticos de interface em Android e iOS.** A documentação do Maestro declara suporte a React Native/Expo nos dois sistemas; os fluxos são YAML e interagem pela camada visual/acessibilidade, sem instrumentar o código da aplicação. Para evitar testes frágeis, adicionar `testID` estáveis aos controles e não depender de textos que mudam com tradução. Maestro também permite configurar permissões e localização simulada; pode comparar screenshots, mas imagens de mapa dinâmico não devem ser baseline visual.

**O que Maestro valida bem:** sequência real de telas, botões/campos, navegação, mensagens de sucesso/erro e regressões de layout em telas estáveis. **O que não substitui:** lógica de negócio, autorização e isolamento no banco, contrato da API, carga/concorrência, uso de memória, fluidez de frames ou teste real de câmera/GPS. Para câmera/GPS, manter também um smoke manual em aparelho real.

**Forma de executar:** criar os primeiros flows depois que navegação e IDs de acessibilidade estiverem estáveis; rodar localmente contra simulador/aparelho e considerar Expo Workflows/EAS para CI quando app e repo estiverem configurados. A documentação do Expo E2E usa builds instaláveis e Maestro; não tornar a configuração da pipeline um bloqueio para o MVP. No Expo Go, seguir o modo de inicialização documentado pelo Maestro.

**Fontes consultadas:** [Maestro React Native](https://docs.maestro.dev/get-started/supported-platform/react-native), [Maestro Flows](https://docs.maestro.dev/maestro-flows), [Maestro setPermissions](https://docs.maestro.dev/reference/commands-available/setpermissions), [Maestro setLocation](https://docs.maestro.dev/reference/commands-available/setlocation), [Maestro assertScreenshot](https://docs.maestro.dev/reference/commands-available/assertscreenshot), [Expo unit testing](https://docs.expo.dev/develop/unit-testing/), [Expo E2E com Maestro](https://docs.expo.dev/eas/workflows/examples/e2e-tests/) e [React Native performance](https://reactnative.dev/docs/performance).

**Fontes para captura e localização:** [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/), [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/), [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) e [benchmark NeurIPS 2025 sobre detectores de imagem gerada](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb693c67f61e5321746ffce8b6fdd2d0-Paper-Datasets_and_Benchmarks_Track.pdf).

Flows sugeridos:
- `E2E-01 Reportar ocorrência`: consultar sem conta, iniciar publicação, autenticar, preencher descrição/categoria, usar localização de teste, enviar imagem de fixture e validar confirmação/detalhe.
- `E2E-02 Permissões negadas`: negar localização/câmera e verificar que existe alternativa manual e o usuário não fica bloqueado.
- `E2E-03 Triagem`: acessar operador de teste, confirmar cidade ativa permitida, mudar status e validar nota/histórico.
- `E2E-04 Falhas recuperáveis`: falha de análise/upload/rede mostra estado correto, sem apresentar resultado falso como salvo.
- `E2E-05 Trocar cidade`: mudar entre cidades e confirmar que lista, mapa e filtro refletem somente a cidade ativa; cobertura de autorização entre cidades é obrigatória também na API.
- `E2E-06 Origem da foto`: enviar uma imagem de fixture pela câmera/galeria de teste e validar que a interface mostra a origem sem afirmar autenticidade.
- `E2E-07 Sessão`: validar cancelamento do login, logout e sessão expirada; consulta pública permanece disponível e publicação exige autenticação.
- `VIS-01 Telas estáticas`: screenshots de telas sem mapa/conteúdo dinâmico, com uma baseline separada para cada plataforma e tamanho de tela.

### Revisão cruzada final — gate de entrega

Ao final, revisar de forma independente **requisitos ↔ casos de uso ↔ protótipos ↔ telas implementadas ↔ testes**. A entrega só fica pronta para pitch quando:

1. Todos os requisitos P0 têm tela/fluxo e caso de teste associados; divergências são listadas como pendências. Funcionalidades P1 cortadas são declaradas e seus testes ficam “não aplicável — não entregue”, nunca “aprovados”.
2. Os fluxos de cidadão e operador passam em Android e iOS; permissões concedidas/negadas, falhas de rede e IA indisponível foram verificadas, incluindo a negação de acesso entre cidades.
3. As telas reais são comparadas aos protótipos aprovados; checar legibilidade, estados, safe areas, navegação, VoiceOver/TalkBack e consistência visual nos dois sistemas.
4. Regras, autorização, isolamento entre cidades, validação de upload e consultas geográficas têm testes fora da camada de UI.
5. Bugs encontrados são classificados por impacto e nenhum problema crítico de segurança, perda de dados ou bloqueio do fluxo principal fica oculto no pitch.

**Desempenho mínimo no gate:** registrar dispositivo, tamanho do seed e tempos observados de abrir lista/detalhe e publicar; verificar que não há bloqueio perceptível, consultas sem limite ou uploads sem limite. Isso é um baseline de demonstração, não teste de capacidade urbana.

**Pós-hackathon (fora do gate):** performance em build de release (Android Studio Profiler, Xcode Instruments, carga na API com dataset entre cidades) e pipeline Maestro/EAS. Não fixar metas de p95, volume simultâneo ou FPS sem cenário/dispositivos definidos e baseline medida.

## 13. Segurança, privacidade e confiabilidade

- Validar entrada no servidor; limitar tamanho e MIME real de uploads; gerar nomes aleatórios; prevenir acesso público a dados internos.
- Aplicar autorização no backend para operações administrativas; registrar trilha de auditoria.
- Segredos exclusivamente em Secrets/variáveis protegidas; nunca no cliente, repositório ou logs.
- Usar upload assinado ou endpoint de upload controlado; escanear/moderar antes de produção.
- Minimizar dados pessoais e metadados de imagem; avisar que local e imagem poderão ser públicos.
- Tratar análise de IA como estimativa sujeita a erro, vieses e condições da foto; oferecer revisão humana.
- Produção precisa de rate limiting, política de retenção, moderação, backups, observabilidade e canal para contestação/exclusão.

## 14. Plano de execução do hackathon e primeira build

### Prioridades de desenvolvimento

Tempo total do evento: 3 dias × 3h, incluindo planejamento e pitch; não são nove horas exclusivas de programação. A estimativa original era solo; revisar a divisão com o colega antes de ampliar o compromisso de entrega. Ondas indicam ordem, não promessa de conclusão. Fazer verificações baratas de API/tipos por entrega e uma passagem coerente dos fluxos nativos ao estabilizar o conjunto, com smoke final nos dois sistemas; não repetir a suíte completa a cada edição.

| Onda | Entrega | Requisitos | Critério de pronto |
|---|---|---|---|
| 1 | Seed de 4 cidades (bbox) + relatos demo; seletor de cidade; lista e detalhe públicos | F-04, US-09, T-19 | Trocar cidade muda a lista; detalhe abre |
| 2 | Sessão e proteção de uploads/publicação; criar relato com foto, GPS/coordenadas manuais e bbox | F-01, F-11, US-01, T-01–T-03, T-16, T-20–T-22 | Relato autenticado aparece na lista; anônimo é negado |
| 3 | Contas seed de operador; fila municipal, status com nota pública/interna, histórico | F-05, US-06, US-10, T-07, T-08, T-15, T-24, T-25 | Operador muda status na própria cidade; outra cidade é negada |
| 4 | Mapa (`react-native-maps`) sincronizado com a lista e pin no formulário | F-12, US-04 | Pins da cidade ativa; lista continua como fallback |
| 5 | Análise de IA (ou "Simulação" rotulada) + possível duplicata | F-02, F-03, T-04, T-05 | Falha de IA não perde relato; duplicata só sugere |
| 6 | Evidência de reparo, confirmações, indicadores | F-06, F-07, F-08 | Caso resolvido com evidência visível ao público |

**Fallback de autenticação:** validar o provedor antes da onda 2. Se não funcionar, usar identidades seed de cidadão e operadores com sessão emitida pelo servidor e seletor “Entrar como (modo demonstração)”. O servidor mapeia identidades predefinidas; nunca aceita papel, autor ou cidade arbitrários do cliente. Endpoint demo só existe em ambiente de demonstração explicitamente habilitado, sem dados reais, e fica desativado por padrão fora dele. O seletor permite impersonar contas de teste: não é autenticação segura para produção. Se forem usadas senhas seed, entram por Secrets, nunca no código. Rotular na tela e declarar no pitch.

**Ordem de corte:** remover de baixo para cima (6 → 5 → 4). Ondas 1–3 não são cortáveis.

**Estado em 18/11/2026:** nenhuma onda do app nativo foi implementada no workspace. As ondas abaixo são critérios e ordem de execução, não afirmação de trabalho concluído. A estrutura GitHub e o backlog já existem; a fatia Expo começa após conectar o código ao repositório público e resolver as decisões de publicação.

### Agenda de referência — dia 1, 17/11: ideia para plano
- Validar o problema e o público: cidadãos reportam, equipes municipais triagem e priorizam.
- Definir a proposta de negócio/gestão: reduzir fragmentação e dar visibilidade à fila e ao andamento; não afirmar ganhos medidos sem dados.
- Fechar o recorte demonstrável: recomenda-se começar por **buracos e infraestrutura viária** para a narrativa ficar concreta; manter outras categorias como evolução.
- Preparar dados seedados para Curitiba, Londrina, Maringá e Ponta Grossa; a repetição de Ponta Grossa na lista recebida foi tratada como duplicata.
- Desenhar seletor de cidade, fluxo de denúncia e fila municipal; revisar histórias, aceite e limites do MVP.
- Preparar registros de demonstração (categoria buraco) e as contas seed de operador.

### Agenda de referência — dia 2, 18/11: plano para app nativo
- Antes da primeira build, colar o prompt completo abaixo no modo Power, depois de verificar o modo, a disponibilidade dos créditos e as condições de uso.
- Seguir as ondas 1–3 primeiro; mapa só na onda 4, com a lista funcionando antes.
- Ajustar falhas uma por vez; usar o modo Gratuito quando fizer sentido, como recomenda o guia.
- Validar a entrega coerente no Simulator iOS e no aparelho Android, conforme o ambiente disponível; manter seed de demonstração e não confundir seed com funcionamento offline ou persistência real.

### Agenda de referência — dia 3, 19/11: app para pitch
- Corrigir somente problemas que atrapalhem o fluxo ao vivo; evitar novas funcionalidades.
- Ensaiar o pitch de 3–5 minutos da seção 15 e deixar a aplicação aberta no ponto inicial.
- Demonstrar o caso, o valor para gestão, a transparência da IA e o que ainda é hipótese.
- Não apresentar dados de demonstração como impacto real nem uma sugestão de IA como decisão oficial.

### Prompt completo para a primeira build

```text
Crie um aplicativo mobile nativo multiplataforma chamado CITY EYES com Expo, React Native e TypeScript, em português do Brasil, para o Desafio Replit PUCPR “Da ideia ao software”. Deve funcionar em Android e iOS a partir de uma codebase compartilhada. É uma ferramenta de gestão da manutenção urbana apoiada por relatos de cidadãos. O objetivo da demonstração é mostrar um fluxo completo e confiável, não construir todas as ideias futuras.

USUÁRIOS E PAPÉIS
- Visitante: escolhe cidade e vê mapa/lista/detalhes públicos sem conta.
- Cidadão autenticado: pode publicar e confirmar relatos; sem conta, essas ações exigem login. A API deriva a autoria da sessão e protege também o início do upload.
- Operador municipal: acessa a fila e altera registros somente nas cidades em que tem vínculo.
- Administrador municipal: administra operadores/registros somente da cidade autorizada.
- Ações administrativas devem ser autorizadas no servidor; não confie apenas no city_id enviado pelo app.

FLUXO PRINCIPAL
As capacidades abaixo seguem as prioridades da seção 4 e as ondas da seção 14: mapa, IA/duplicatas e evidência/indicadores são P1 cortáveis. Não entregar nem testar recursos cortados como se estivessem implementados.
1. Na tela inicial, permitir escolher entre Curitiba, Londrina, Maringá e Ponta Grossa; mostrar mapa/lista sincronizados apenas da cidade selecionada, filtros e botão “Reportar problema”.
2. O formulário permite selecionar categoria (começar com buraco; incluir iluminação, drenagem, calçada/acessibilidade e outro), escrever descrição curta, tirar/escolher foto e obter/ajustar localização. Validar no backend a bbox aproximada da cidade selecionada, sem prometer fronteira municipal exata. Se GPS for negado, aceitar coordenadas manuais; pin quando o mapa for entregue. Se câmera for negada, oferecer galeria ou evidência demo explicitamente rotulada.
3. Ao enviar, salvar a ocorrência antes de chamar IA. Mostrar categoria sugerida, gravidade estimada de 0 a 100 e justificativa curta, sempre rotuladas como estimativas. Se IA ou mapa falhar, o relato deve continuar salvo e a tela deve mostrar uma alternativa clara.
4. Sinalizar ocorrências de categoria semelhante próximas na mesma cidade como “possíveis duplicatas”; permitir abrir a existente ou continuar. Nunca combinar registros automaticamente nem misturar cidades.
5. O detalhe mostra localização, imagem, categoria, gravidade sugerida, status e histórico cronológico.
6. O painel de operador mostra fila ordenada por prioridade sugerida = severidade*0.5 + dias aberto*2 + confirmações*5 (severidade ausente = 50), rotulada como recomendação, com filtros e contadores de abertas/em análise/em atendimento/resolvidas. O operador pode mudar status e adicionar nota; ao resolver, oferecer envio de foto de evidência.

ESTADOS
Aberta → Em análise → Em atendimento → Resolvida; também pode haver “Inválida” ou “Duplicada” (só por decisão de operador, com justificativa; vínculo ao original da mesma cidade é obrigatório apenas para “Duplicada”). “Possível duplicata” é só sugestão, nunca status. Guardar histórico e distinguir notas públicas/internas; não retornar notas internas nem identidade privada nas consultas públicas. A IA não altera status nem decide prioridade final.

IMPLEMENTAÇÃO E DADOS
- Use uma codebase Expo/React Native/TypeScript para o app e um único backend/API TypeScript modular no mesmo projeto; não criar microserviços.
- Para foto, avaliar `expo-image-picker` (câmera e galeria); para localização, `expo-location` com permissão foreground de uso pontual, sem rastreamento em segundo plano.
- A política de fotos foi aprovada: aceitar câmera e galeria, validar formato/tamanho, registrar origem e horário de recebimento no servidor, conferir município e sinalizar reenvios idênticos por hash. Detector de IA não deve bloquear automaticamente nem declarar autenticidade; manter revisão humana separada da análise de gravidade.
- Persistir cidades, associação usuário-cidade, ocorrências e eventos no PostgreSQL gerenciado do Replit, se disponível. O app chama a API; não expor credenciais privilegiadas de banco no cliente.
- Guardar fotos no App Storage/Object Storage, mantendo apenas referências no banco. Se os serviços não estiverem disponíveis, usar dados seedados e evidência demo rotulada; não fingir persistência real.
- Mapa com `react-native-maps` (compatível com Expo Go). Se o mapa não carregar, oferecer lista funcional.
- Incluir `city_id` desde o início, filtrar por cidade e por área visível; não carregar todos os relatos no mapa. Sem PostGIS: usar geocell indexado, células vizinhas e cálculo de distância no backend.
- Limite municipal: cada cidade tem bbox (min_lat, min_lng, max_lat, max_lng); a API rejeita ponto fora da bbox da cidade selecionada.
- O título do relato é gerado pelo backend (categoria + código público); não pedir título no formulário.
- Criar identidades seed: cidadão, operador de Curitiba e operador de Londrina. Se houver senha, ler de Secrets. Login demo só em ambiente explicitamente habilitado e sem dados reais; servidor emite sessão e determina papel/cidade, nunca o cliente.
- Se a IA não estiver configurada, `ai_state = 'demo'` e a UI mostra “Simulação”.
- Toda API administrativa valida o vínculo do operador com a cidade; incluir teste em que um operador de uma cidade tenta ler/alterar outra.
- Nunca expor segredo no frontend. Validar categoria, descrição, localização e upload.
- Não afirmar que houve análise real quando o resultado for simulação.

DESIGN
Direção aprovada: cores de Participação comunitária e Nunito Sans como alternativa portátil à intenção Avenir Next/Operação municipal. Use os tokens de [CITY-EYES-direcoes-visuais.md](CITY-EYES-direcoes-visuais.md) e do pacote `@workspace/city-eyes-system`; não copie ou invente novos valores. Validar telas, estados e contrastes reais antes de concluir o app. Manter legibilidade, VoiceOver/TalkBack, escala de texto e estados de carregamento/vazio/erro; alvos mínimos 44 pt em iOS e 48 dp em Android. Identificar seed/demo; não apresentar dados fictícios como ocorrências verificadas.

ENTREGA E TESTE
Inclua as quatro cidades de demonstração (Curitiba, Londrina, Maringá e Ponta Grossa), dados variados em cada uma e um caso resolvido com evidência. Use relatos sintéticos, claramente identificados como demo, não ocorrências verificadas. Inclua testes automatizados da API para: operador de uma cidade negado em outra, requisição anônima negada ao publicar, ponto fora da bbox rejeitado. Não implemente previsão de falhas, notificações ou integração com prefeitura nesta versão.

ORDEM DE CONSTRUÇÃO (se travar, corte nesta ordem)
Construa nesta ordem: 1) cidades seed + lista/detalhe públicos; 2) sessão e proteção da API + criar relato com foto e GPS/coordenadas manuais; 3) fila de operador, status e histórico público/interno, isolamento entre cidades; 4) mapa/pin; 5) IA/simulação e possíveis duplicatas; 6) evidência de reparo, confirmações e indicadores. Se faltar tempo, remova 6, depois 5, depois 4 e adapte pitch/aceite ao entregue. Nunca remova 1–3 nem crie publicação anônima temporária. Se o provedor falhar, aplique o fallback demo seguro e limitado da seção 14 antes da publicação.
```

Se faltar tempo, remover previsões, notificações e confirmação avançada. Não remover autenticação para publicar, isolamento municipal, persistência quando disponível, tratamento de erro nem o fluxo principal.

## 15. Roteiro de apresentação (3–5 minutos)

1. **Problema (20s):** relatos urbanos são fragmentados e difíceis de acompanhar.
2. **Registro (40s):** enviar uma foto, marcar ponto e mostrar a análise assistida.
3. **Inteligência (40s):** explicar prioridade e possível duplicata com transparência sobre limites.
4. **Operação (60s):** abrir Command Center, revisar e mudar status.
5. **Confiança/impacto (40s):** mostrar evidência e histórico de resolução.
6. **Visão futura (20s):** mapas de concentração e prevenção só depois de dados históricos confiáveis.

**Frase de posicionamento:** “CITY EYES transforma relatos locais em problemas visíveis, priorizáveis e acompanháveis — com IA ajudando a equipe, não substituindo a decisão humana.”

## 16. Decisões em aberto (assumidas para começar)

- Cidades da demo definidas: Curitiba, Londrina, Maringá e Ponta Grossa. A repetição de Ponta Grossa na lista recebida foi tratada como duplicata.
- IA: testar disponibilidade cedo; se não houver acesso ou estabilidade, usar análise simulada, rotulada como demo, com revisão manual.
- Backend, banco e fotos: aprovado API TypeScript + PostgreSQL + App Storage do Replit; confirmar só a disponibilidade no projeto.
- PostGIS: fora do MVP; geocell/geohash sem extensão.
- Mapas: aprovado `react-native-maps`.
- Limite municipal: bbox por cidade no MVP; polígono IBGE depois.
- Método de prototipagem: HTML/CSS/JavaScript clicável aprovado; código é referência visual/funcional e não será convertido diretamente para componentes Expo.
- Escala alvo: definir volume, número de cidades, usuários simultâneos e retenção antes de qualquer promessa de capacidade.
- Provedor de autenticação: selecionar e validar solução gerenciada compatível com Expo; conta para publicar/confirmar e autorização municipal já foram aprovadas como requisitos.
- Geodados: levantar bbox das quatro cidades de fonte identificada, com data e ordem latitude/longitude; bbox é aproximação, não polígono municipal. Não inventar coordenadas de limite.
- Visual: testar acessibilidade e estados interativos da quarta variante; carregar Nunito Sans no app Expo.
- Execução: confirmar acesso ao Mac/idb e Android/adb. Este container não controla automaticamente os dispositivos locais do usuário.
- Gerenciador neste projeto: pnpm com lockfile preservado.
- GitHub: organização `City-Eyes`, dois repositórios públicos e [Project único](https://github.com/orgs/City-Eyes/projects/1). Publicação inicial e automações concluídas; CI e PR são obrigatórios. Auto-merge temporário e mudança de política na entrada do parceiro seguem [TEAM-OWNERSHIP.md](TEAM-OWNERSHIP.md). O histórico público filtra memórias, sessões e anexos; auditoria por padrões não garante ausência de todo segredo. A reconciliação de cópias locais usa backup privado e a história pública como base, sem combinar os históricos nem usar force-push.
- Categorias iniciais: buraco, iluminação, drenagem, calçada/acessibilidade e outro.
- Idioma inicial: português do Brasil; acessibilidade e celular desde o começo.

**Decisão de categorias:** o enum mantém as cinco categorias; dados seed e roteiro da demo usam só **buraco**, para a narrativa ficar concreta.

## 17. Proposta de transparência pública (aguarda aprovação)

**Base da proposta:** [pesquisa comparativa de transparência pública](CITY-EYES-transparencia-publica.md) e [relatório e fontes consultadas](../research/transparencia-publica.md). A proposta não torna o CITY EYES um portal oficial, não substitui os portais/SICs municipais e não altera o MVP aprovado até uma decisão explícita.

### Objetivo e limites

Dar contexto verificável sobre informações e canais públicos relacionados à cidade e à manutenção urbana. A recomendação é começar com um **diretório por cidade e cartões de referência**: identificar o órgão e a fonte oficial, informar quando o CITY EYES consultou a fonte e quando o próprio órgão declara ter atualizado os dados, e abrir o portal/serviço municipal original. O app deve avisar que um relato da comunidade **não foi enviado à prefeitura** sem uma integração real.

Não reproduzir todo o portal municipal. Não afirmar que uma obra, contrato ou valor corresponde a um relato apenas por proximidade, categoria ou nome parecido; a associação exige um identificador público e validação humana. Dados de orçamento e de contratos são contexto, não prova de que uma demanda foi atendida. Em especial, “atualização em tempo real” só pode aparecer quando a fonte oficial e a frequência daquele conjunto sustentarem essa afirmação.

### Recorte recomendado

| Fase | Escopo recomendado | Estado |
|---|---|---|
| MVP candidato | Diretório para Curitiba, Londrina, Maringá e Ponta Grossa; links para portal, dados abertos, obras e e-SIC/Ouvidoria; cartões de relatório com a origem comunitária, histórico CITY EYES e links oficiais relacionados quando houver referência confirmada | Proposta — precisa de aprovação |
| Evolução | Conectores por cidade para APIs/arquivos abertos com formato, licença, cobertura e atualização verificados; cache e agregações no backend; atualização e falha visíveis | Futuro, depende de validação por fonte |
| Fora do MVP atual | Scraping, ingestão de arquivos grandes no celular, envio de pedidos e-SIC pelo app, criação de ordem de serviço, painel fiscal completo, integração/encaminhamento em nome da prefeitura | Não aprovado |

### Experimento de transparência no sandbox — não é integração

O sandbox contém `ProcurementDemo`, um protótipo que mantém separadas a referência oficial da Prefeitura de Londrina/Equiplano e cinco linhas de exemplo fictícias (`DEMO-001` a `DEMO-005`). O dataset marca `synthetic_demo`, `not_official` e `dataAsOf: null`; nenhuma linha nem exportação municipal foi importada. O link externo foi conferido, mas isso não valida todos os registros da listagem.

A lista atual da Prefeitura foi validada como fonte candidata para uma futura evolução, não como fonte liberada para ingestão. Ela mostra licitações a partir de 01/04/2026 e 8.173 registros declarados, com 10 por página; a amostra autorizada não estabeleceu se “Baixar tabela” pode ser limitada a 10 linhas, então a exportação não foi acionada. O Decreto Municipal 667/2024 estabelece termos gerais de reutilização para informações de transparência ativa, observados LGPD e Lei 14.129/2021, mas não atribui uma licença CC BY específica à plataforma atual. A coleta foi interrompida; manter link externo e metadados, sem conector, até que os critérios de [validação da fonte](CITY-EYES-transparencia-publica.md#9-validação-atual-das-fontes-municipais) sejam atendidos.

O teste automatizado do sandbox passou 8/8 em 18/11/2026. Isso verifica somente a integridade da amostra sintética, busca, filtro de situação, filtros combinados e estado vazio acessível — não testa importação, API, dados reais nem o app nativo. A decisão sobre entrar no MVP continua em aberto.

### Atores, permissões e histórias propostas

| Ator | Permissão proposta | Limite |
|---|---|---|
| Visitante | Consultar fontes públicas e abrir os portais oficiais sem cadastro | Não cria associação entre fonte e relato |
| Cidadão autenticado | Consultar as mesmas informações e sugerir uma referência pública | Não altera dado oficial nem muda status municipal |
| Operador municipal | Gerenciar apenas ocorrências CITY EYES da cidade à qual está vinculado; anexar referência pública com fonte e justificativa | A referência é identificada como vínculo revisado, não como ordem ou confirmação da prefeitura |
| Curador de fontes (papel proposto) | Revisar URL, órgão, formato, licença, data e disponibilidade do catálogo municipal | Papel ainda não definido; não deve receber acesso global por padrão |
| Portal/órgão oficial | Continua sendo a fonte de verdade dos dados municipais e pedidos de informação | O CITY EYES não representa nem fala em nome do órgão |

- **US-T-01 — Encontrar fontes oficiais.** Como visitante, quero escolher uma cidade e encontrar seu portal de transparência, obras, dados abertos e canal de informação. Aceite: links identificam órgão/categoria e abrem a fonte oficial; nenhuma autenticação é exigida para consulta.
- **US-T-02 — Distinguir relato e protocolo oficial.** Como cidadã, quero saber se minha ocorrência existe apenas no CITY EYES ou também em um canal oficial. Aceite: por padrão aparece “Relato da comunidade — não enviado à prefeitura”; só exibir protocolo/estado oficial com referência comprovada e atualização identificada.
- **US-T-03 — Ver origem e atualidade.** Como pessoa usuária, quero entender de onde veio cada dado e quando foi conferido. Aceite: exibir órgão, URL, formato/licença conhecidos, data de consulta e data declarada pela fonte; datas ausentes são apresentadas como desconhecidas, nunca inventadas.
- **US-T-04 — Revisar uma referência.** Como operador autorizado, quero anexar um link público relacionado a uma ocorrência. Aceite: só na cidade autorizada, com URL/identificador e justificativa; referência fica como pendente até revisão e mantém histórico de quem a confirmou.
- **US-T-05 — Recuperar falha de fonte.** Como visitante, quero continuar usando o app quando o portal oficial estiver indisponível. Aceite: erro não se transforma em dado vazio “atual”; mostrar última consulta, aviso de indisponibilidade e link para tentar abrir a fonte original.

### Casos de uso, telas e critérios

1. **UC-T-01 — Consultar fontes da cidade:** selecionar uma das quatro cidades, abrir a seção “Transparência”, filtrar por portal/obras/dados abertos/acesso à informação e abrir a fonte oficial.
2. **UC-T-02 — Conferir contexto de uma ocorrência:** abrir o detalhe; separar o histórico de participação CITY EYES de qualquer referência oficial; mostrar fonte e datas; explicar quando não existe integração.
3. **UC-T-03 — Fonte indisponível ou desatualizada:** manter o histórico do CITY EYES, exibir a falha e a última data conhecida e oferecer link-out; nunca apresentar cache como situação atual.

Telas candidatas: diretório por cidade; cartão “Fontes públicas” no detalhe da ocorrência; página externa no navegador/dispositivo. Um catálogo administrativo para manter as fontes é evolução e depende de definição do curador e das permissões.

Critérios mínimos: toda informação municipal tem fonte e cidade; conteúdo comunitário, oficial e demonstrativo usa rótulos diferentes; referência nunca atravessa cidades sem validação; nenhum erro de fonte bloqueia consultas e denúncias; leitor de tela e layout mobile anunciam título, órgão, datas, estado e destino do link; estados carregando/vazio/erro são claros. As páginas de Ponta Grossa e o caminho de dados abertos de Londrina precisam de verificação manual antes de virarem links de produção, pois a captura automatizada nesta pesquisa teve limitações.

### Dados, arquitetura, privacidade e testes propostos

O modelo conceitual futuro pode incluir `public_sources` (cidade, órgão, tipo, URL oficial, formato, licença, método de obtenção, frequência declarada, `last_checked_at`, `data_as_of` e disponibilidade); `source_snapshots`/execuções (fonte, identificador de versão ou hash, datas, resultado e erro); e `report_public_references` (relato, fonte, identificador externo, tipo e justificativa do vínculo, estado pendente/verificado/contestado, pessoa revisora e data). Isso é uma proposta documental, não uma alteração do esquema PostgreSQL atual.

No MVP com links, o cliente abre o portal original; não faz chamadas diretas a sites municipais nem scraping. Se houver conectores numa evolução, executá-los no backend, em tarefas limitadas, com paginação/agregação, cache, controle de origem, licença e atualização. Nunca enviar dumps grandes ao app: um exemplo de dataset municipal de atendimento tem tamanho de 129 MB; expor apenas recortes necessários e avaliar privacidade antes de reutilização. Aplicar minimização, finalidade clara, proteção de dados pessoais e segregação por cidade; não publicar endereço exato ou identidade de quem pediu serviço sem necessidade e autorização.

| ID | Cenário proposto | Resultado esperado |
|---|---|---|
| T-27 | Abrir fontes por cidade | Cada link aponta ao município correto e a fonte é rotulada como oficial |
| T-28 | Abrir relato sem vínculo oficial | UI declara que o relato comunitário não foi enviado à prefeitura |
| T-29 | Fonte sem data de atualização | Data fica “não informada”; app não afirma atualidade ou tempo real |
| T-30 | Fonte indisponível/cache antigo | Aviso de indisponibilidade e data da última consulta; sem estado “atual” inferido |
| T-31 | Referência de outra cidade | API bloqueia associação cruzada sem validação; operador não vê dados privados de outra cidade |
| T-32 | Referência de obra/contrato sem identificador comum | Não associa automaticamente por proximidade ou texto semelhante |
| T-33 | Dados municipais com endereço ou dado pessoal | Campos desnecessários são omitidos/agregados antes de exibir; consulta pública não revela identidade de cidadão |
| T-34 | Fonte ou conteúdo de demonstração | Rótulo “demo”/“simulação” permanece visível e nunca se confunde com dado oficial |

### Decisões ainda abertas

1. A prioridade é um diretório de portais/canais, ou também um resumo de orçamento/obras dentro do CITY EYES? Recomendação: diretório + contexto por ocorrência primeiro.
2. No MVP, todas as cidades recebem apenas links, ou uma cidade terá integração com conjunto aberto? Recomendação: links nas quatro; nenhum conector até aprovar disponibilidade e privacidade de uma fonte específica.
3. O cidadão apenas abre canais oficiais ou o produto deve criar algum encaminhamento? Recomendação: link-out; submissão e-SIC/Ouvidoria integrada fica fora do MVP.
4. Quem pode confirmar uma ligação entre relato e registro oficial? O papel de curador e o nível de evidência ainda precisam ser aprovados.
5. Quais datasets/colunas podem ser reusados, sua licença e frequência? Confirmar por conjunto e município antes de qualquer coleta.
6. Qual limite de atualização deve marcar uma fonte como desatualizada? Definir por fonte, sem regra global antes de medir as frequências declaradas.
