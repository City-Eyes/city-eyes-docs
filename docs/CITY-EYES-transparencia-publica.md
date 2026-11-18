# CITY EYES — MVP do diretório de transparência pública

**Estado:** escopo link-out aprovado para o MVP em 18/11/2026; ainda não implementado.
**Pesquisa:** 17/11/2026, horário de Brasília.  
**Evidências:** [relatório comparativo com fontes](../research/transparencia-publica.md); [registro das fontes](../research/sources.json).  
**Requisitos e aceite:** [seção 17 do plano canônico](CITY-EYES-plano-de-produto-e-documentacao.md#17-mvp-de-transparência-pública).

## 1. O que recomendamos

O módulo MVP ajuda a responder: “onde encontro informação oficial sobre minha cidade e como acompanho o que é publicado?”. O escopo aprovado é um diretório por cidade com links oficiais de transparência, obras, dados abertos e canais de acesso à informação/ouvidoria, sempre identificando órgão, cidade e data de conferência.

O detalhe de uma ocorrência pode mostrar esse contexto, mas a existência de um contrato de pavimentação na cidade não comprova que o buraco relatado está coberto por ele. Uma relação específica depende de identificador verificável, documentação e revisão humana. Não inferir corrupção, responsabilidade contratual ou desvio de recursos a partir de coincidência de endereço, palavras ou valores.

O produto passa a ter três origens visíveis:

| Origem | Exemplo | O que o rótulo significa |
|---|---|---|
| Comunidade / CITY EYES | Relato e histórico do app | Foi registrado no CITY EYES; não equivale a protocolo da prefeitura |
| Fonte oficial | Link a registro municipal, com órgão e datas | A informação pertence à fonte indicada; o CITY EYES não é seu emissor |
| Demonstração | Relato ou indicador sintético | Serve apenas para apresentar o fluxo; não representa informação municipal real |

## 2. Opções para decidir

| Opção | Valor | Custo e risco | Recomendação |
|---|---|---|---|
| Diretório de links por cidade | Permite encontrar canais oficiais e entender a origem dos dados | Exige curadoria e revisão de URLs; não importa dados | **Incluído no MVP** |
| Contexto de fonte em detalhe de ocorrência | Pode ajudar a explicar canais oficiais | Não há identificador comum confirmado; pode sugerir vínculo indevido | Apenas aviso de origem no MVP; vínculo específico é futuro |
| Catálogo de obras/contratos importados | Consulta sem sair do app | Formatos, licença, privacidade e atualidade variam por município | Evolução, após validação de fonte |
| Portal completo e encaminhamento integrado | Reúne orçamento, solicitações e acompanhamento administrativo | Exige integração e regras municipais; pode induzir falsa impressão de serviço oficial | Fora do MVP |

As quatro cidades estão no escopo do diretório do MVP. Profundidade de dados pode variar: o app deve mostrar “fonte não confirmada” ou “informação não disponível” em vez de completar lacunas com dados fictícios.

## 3. Telas e navegação do MVP

**UI-T-01 — Transparência da cidade:** cidade ativa no título, explicação de independência do CITY EYES e categorias “Portal”, “Obras”, “Dados abertos” e “Acesso à informação/Ouvidoria” quando houver URL oficial conferida. Cada item mostra órgão, destino, data da conferência e aviso de abertura externa. Link conferido não significa base atualizada. e-SIC e Ouvidoria são canais diferentes e devem ser rotulados corretamente.

**UI-T-02 — Aviso de origem no detalhe:** primeiro vem a ocorrência comunitária e seu histórico; em seguida, aviso separado “Relato não enviado à prefeitura” e “Não há vínculo oficial confirmado”. O MVP não liga contrato, obra ou item do portal a um relato.

**Detalhe da referência específica:** fora do MVP. No futuro, qualquer vínculo exige identificador externo, justificativa, revisão humana e histórico; proximidade geográfica ou texto semelhante não bastam.

**Link recusado/indisponível:** manter o diretório e o fluxo de relatos acessíveis, mostrar a última data de conferência e explicar quando o sistema operacional não consegue abrir o destino. Não sondar a disponibilidade em tempo real nem apresentar data de conferência como data de atualização dos dados.

A interface deve seguir exclusivamente o design system aprovado. Estados P0: carregando, vazio, URL não confirmada, link recusado, fonte sem data declarada e demonstração. Anunciar destino externo, origem e estado ao leitor de tela; não distinguir origens apenas por cor; suportar escala de texto e navegação sem mapa.

## 4. Autorização e ciclo das referências

Consulta pública não exige conta. A conta usada para publicar relatos não concede autoridade municipal. A permissão de fila municipal continua restrita à cidade vinculada e não concede edição do catálogo nem vínculo entre ocorrência e fonte.

No MVP não existe papel ou painel de curador dentro do app. O parceiro mantém o catálogo como editor do repositório, por PR com revisão cruzada; isso não concede permissão municipal nem de administração de usuários.

Os links do diretório passam por conferência manual de cidade, órgão, categoria e URL HTTPS. O catálogo não relaciona uma fonte a uma ocorrência; qualquer relação específica fica para evolução futura, com identificador comprovável e revisão humana.

## 5. Catálogo do MVP e dados de evolução

Não há migration nem API nova no MVP. O catálogo é uma configuração estática, revisada por PR, e contém apenas links/metadados necessários.

| Entidade | Dados mínimos | Integridade e visibilidade |
|---|---|---|
| DATA-09: item de fonte curada | ID, cidade, órgão, título, categoria, URL HTTPS, `last_checked_at`, `data_as_of` opcional e estado da verificação | Conteúdo controlado por PR; sem dados copiados, pessoais ou credenciais |
| `source_snapshots` (futuro) | Fonte, versão/hash quando aplicável, consulta, data de corte, resultado, erro, contagem validada, versão do adaptador | Só após decisão de connector e validação técnica/privacidade |
| `report_public_references` (futuro) | Relato, fonte, ID externo, justificativa, estado, autor/revisor e datas | Não existe associação específica no MVP |

Em uma evolução com valores financeiros, guardar moeda, exercício, unidade gestora, classificação e etapa da despesa separadamente. Usar decimal preciso, não ponto flutuante. Não somar orçamento autorizado, empenhado, liquidado, pago e valor contratado como se fossem a mesma grandeza; evitar dupla contagem de aditivos e versões. Definir essas regras antes de produzir indicadores ou comparações municipais.

No diretório, não é necessário criar todas essas entidades: uma configuração controlada de fontes pode bastar. O desenho completo é para não perder rastreabilidade ao evoluir.

## 6. Arquitetura e operação do MVP

O app lê o catálogo estático embarcado e abre somente links HTTPS previamente revisados no navegador do dispositivo. Não carregar sites municipais por scraping no celular, injetar formulários de login nem coletar credenciais dos portais. A indisponibilidade do destino não bloqueia a fila nem relatos.

Qualquer conector futuro exigirá nova decisão e será um módulo do mesmo backend: obter arquivo/API autorizado → validar formato, licença e esquema → minimizar campos → gravar snapshot → publicar leitura paginada/agregada. Isso não faz parte do MVP link-out.

Se uma futura ingestão for aprovada, limitar downloads, tempo, tentativas e paralelismo por origem; usar backoff e impedir sobreposição. Reprocessamento deve ser idempotente por fonte/versão/identificador externo. Não executar sincronização durante a requisição do cidadão nem enviar bases completas ao celular. Esses controles não indicam que exista um conector no MVP.

Como o MVP usa uma lista estática, aceitar somente destinos HTTPS previamente revisados e não permitir URLs fornecidas por usuários. Não buscar URLs ou interpretar conteúdo externo no backend/app. Regras SSRF, DNS, redirecionamentos, MIME e tamanho serão obrigatórias se houver ingestão futura; rotas HTTP legadas ficam fora do catálogo.

## 7. Privacidade e governança

A publicidade de uma página não autoriza, por si só, toda republicação ou todo cruzamento de dados pessoais. A aplicação concreta da LAI/LGPD e as condições da licença precisam ser avaliadas para cada conjunto. O CITY EYES, enquanto projeto independente, não deve presumir que possui todas as bases legais e competências de um órgão público.

No MVP, não copiar bases de remuneração, beneficiários, saúde, CPF, contatos pessoais ou textos livres de solicitações: o diretório guarda somente metadados do link. Reutilização futura deve avaliar finalidade, licença, necessidade e risco de reidentificação por conjunto, sem presumir que o projeto possui as competências de um órgão público.

Antes de dados reais: definir responsável pela curadoria, canal de correção/contestação, retenção, exclusão segura de snapshots e política de acesso. Correção no portal original não se propaga automaticamente ao CITY EYES sem processo de atualização; a interface deve deixar isso claro.

## 8. Matriz de validação futura

São testes especificados, **não executados**, porque o diretório ainda não está implementado.

| Área | Cenários e resultado esperado |
|---|---|
| Requisitos | F-13, US-T-01–06 e UC-T-01–03 rastreados a T-27–34 na seção 17 do plano |
| Unitários | Datas desconhecidas, rótulos de origem, URL HTTPS, cidade/categoria e exclusão de itens não confirmados |
| Catálogo/configuração | Estrutura valida ID/cidade/categoria/URL HTTPS/data; links não verificados são excluídos da lista publicada |
| UI/fluxo MVP | Trocar cidade, abrir link externo com destino controlado, voltar ao app, link recusado, data desconhecida e separação do aviso “não enviado à prefeitura” |
| Contratos de conectores (futuro) | CSV com encoding/separador distintos, coluna removida, IDs repetidos, versão repetida, snapshot parcial, campo nulo e alteração de licença |
| Resiliência futura | Timeout, 404/500, redirecionamento indevido e arquivo excessivo preservam versão válida e não geram zeros nem bloqueiam relatos |
| Financeiro (futuro) | Moeda/exercício/unidade/etapa claros; não somar etapas ou duplicar aditivos; números conferidos contra a fonte |
| Acessibilidade | VoiceOver/TalkBack anunciam origem, datas e destino; texto ampliado, contraste, foco e alvos de toque conforme design system |
| Segurança e privacidade MVP | Catálogo não contém tokens, dados pessoais nem conteúdo copiado; relatório de relato não expõe nota interna; destino externo é HTTPS |
| Desempenho futuro | Medir lista/detalhe com cidade/exercício e carga definida; não fazer chamadas municipais em cada abertura nem enviar arquivos grandes ao celular |

Depois de implementado e aprovado o fluxo, Maestro pode validar navegação e rótulos. Ele não substitui testes de autorização, importação, semântica financeira, atualização e proteção de dados.

## 9. Validação atual das fontes municipais

Em 18/11/2026, o usuário aprovou o diretório/link-out das quatro cidades no MVP. A listagem atual de licitações de Londrina continua apenas **candidata a uma evolução com ingestão**; isso não aprova download ou importação. A matriz completa, as evidências das rotas e a amostra limitada estão em [pesquisa de transparência](../research/transparencia-publica.md#revalidação-manual-de-rotas-e-matriz-de-viabilidade--18112026), [Londrina](https://portal-prefeitura-londrina.equiplano.cloud/relatorio/licitacao-contrato/licitacoes/licitacoes/listagem?flagDescartada=false&flagVideoconferencia=false&updateParams=false) e [Ponta Grossa](https://servicos.pontagrossa.pr.gov.br/portaltransparencia/1/).

| Campo | O que foi possível confirmar | Estado para conector |
|---|---|---|
| Órgão | Prefeitura do Município de Londrina; licitações centralizadas segundo a página municipal | Confirmado |
| Rota | Portal municipal HTTPS; HTTP redireciona para HTTPS. A listagem atual em Equiplano responde HTTPS. O antigo portal em HTTP:8080 não é rota segura de ingestão. | Confirmado para navegação; aprovação técnica do host ainda necessária |
| Cobertura | Licitações a partir de 01/04/2026 | Confirmada para a listagem mostrada |
| Atualização | O rodapé declara “em tempo real”, mas capturas do portal exibiram horários diferentes em 17/11/2026; sem SLA ou data de corte consistente | Declarada, não garantida |
| Esquema e chave | Campos visíveis incluem modalidade, natureza, situação, número/ano, abertura, entidade, resumo do objeto e valores. Tipos aparentes foram inferidos da exibição, sem dicionário; número + exercício é chave candidata, sem unicidade/estabilidade confirmadas | Pendente |
| Formato e volume | Rechecagem autorizada: resposta da página HTTP 200, `text/html`, 27.419 bytes — não é a exportação. A lista mostra 10 por página e 8.173 linhas (818 páginas); não foi possível confirmar que “Baixar tabela” respeita esse limite. MIME e bytes da exportação não medidos | Pendente; coleta interrompida para evitar baixar a base sem limite |
| Reuso | Decreto Municipal 667/2024, art. 15 e § 1º, V, estabelece livre utilização de informação de transparência ativa, incluindo licitações, sujeita à LGPD e à Lei 14.129/2021; não indica licença CC BY específica | Base normativa geral documentada; validar os limites legais antes de qualquer uso concreto |
| Privacidade | Nas 10 linhas visíveis não foram observados CPF, telefone ou e-mail; detalhes, anexos e o conjunto integral não avaliados | Pendente; não coletar dados detalhados |
| Ponta Grossa | Portal oficial identificado, mas timeout e erro 500 impediram confirmar conteúdo, licença ou amostra | Não avaliável nesta consulta |

### Liberação obrigatória antes de qualquer conector futuro

- Preservar como base de reutilização o Decreto Municipal 667/2024 (arts. 15 e 16) e confirmar que a finalidade/campos concretos continuam dentro dos limites legais; não atribuir CC BY 4.0 à plataforma atual sem fonte específica.
- Confirmar formato real de exportação, bytes/volume máximo, paginação do arquivo, esquema, tipos e identificador único e estável.
- Validar cobertura e cadência; distinguir data de publicação, data de atualização e data de corte.
- Revisar campos, detalhes e anexos quanto a dados pessoais; aprovar minimização, retenção, correção e acesso ao bruto.
- Aprovar origem HTTPS, host e redirecionamentos; limitar tamanho, tempo, frequência e tentativas.
- Exigir importação idempotente, validação de versões e preservação do último snapshot válido em falhas.
- Manter os registros identificados como fonte municipal. Não vinculá-los a relato comunitário sem identificador verificável e revisão humana; nunca inferir envio à prefeitura.

**Decisão da amostra limitada:** parar a coleta. A autorização recebida cobria até 10 registros, mas a interface não permitiu confirmar que a exportação pode ser limitada a esse volume. Não foi acionado “Baixar tabela”; o tamanho medido é apenas o da página HTML. Retomar somente se houver recorte verificável de até 10 registros ou nova autorização explícita para outro limite. Essa limitação bloqueia ingestão, não o diretório de links; ainda assim, o destino deve passar pela conferência HTTPS do item antes de publicação. Não houve download de exportação nem implementação de conector.

A base normativa geral de reutilização está documentada no [Decreto Municipal 667/2024](https://repositorio.londrina.pr.gov.br/index.php/menu-ouvidoria/legislacao-federal/d3cr3t-s/67331-decreto-667-2024-1/file): o art. 15 prevê livre utilização de informação de transparência ativa e o § 1º, V, inclui licitações, observadas a LGPD e a Lei 14.129/2021. Isso não é uma licença CC BY específica para o sistema Equiplano.

## 10. Checklist de implementação do MVP

1. Conferir cada URL HTTPS, órgão, cidade e categoria antes de incluí-la; manter indisponível qualquer destino que não puder ser confirmado.
2. Registrar `last_checked_at` e a data de atualização que a própria fonte declara, sem tratar a conferência do link como atualização do conteúdo.
3. Fazer a curadoria pelo parceiro via PR com revisão cruzada; não criar papel de curador no app.
4. Manter fontes comunitárias, oficiais e sintéticas separadas e rotuladas; não criar vínculo específico entre ocorrência e contrato/obra.
5. Não adicionar conector, scraping, pedido e-SIC ou reprodução de dados sem nova decisão e validação técnica/privacidade por fonte.

Não ampliar a promessa do pitch para prestação oficial de contas, atendimento municipal garantido ou economia financeira medida sem implementação e evidência.
