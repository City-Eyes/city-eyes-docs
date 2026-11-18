# CITY EYES — proposta do módulo de transparência pública

**Estado:** proposta para decisão, não funcionalidade implementada ou aprovada.  
**Pesquisa:** 17/11/2026, horário de Brasília.  
**Evidências:** [relatório comparativo com fontes](../research/transparencia-publica.md); [registro das fontes](../research/sources.json).  
**Requisitos e aceite:** [seção 17 do plano canônico](CITY-EYES-plano-de-produto-e-documentacao.md#17-proposta-de-transparência-pública-aguarda-aprovação).

## 1. O que recomendamos

O novo módulo deve ajudar a responder: “onde encontro informação oficial sobre minha cidade e como acompanho o que é publicado?”. Para o hackathon, a recomendação é um diretório por cidade com referências ao portal de transparência, obras, dados abertos, acesso à informação e ouvidoria.

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
| Diretório + contexto por ocorrência | Permite encontrar canais oficiais e entender a origem dos dados | Exige curadoria de links e rótulos; não exige importar dados | Começar aqui, sujeito à aprovação |
| Catálogo de obras e contratos importados | Consulta de informações oficiais sem sair do app | Formatos, licença, privacidade, sincronização e semântica variam por município | Evolução após validar uma fonte |
| Portal completo e encaminhamento integrado | Reúne orçamento, solicitações e acompanhamento administrativo | Exige integrações e regras municipais; pode induzir falsa impressão de serviço oficial | Fora do MVP |

As quatro cidades continuam no diretório proposto. Profundidade de dados pode variar: o app deve mostrar “fonte não confirmada” ou “informação não disponível” em vez de completar lacunas com dados fictícios.

## 3. Telas e navegação propostas

**Transparência da cidade:** cidade ativa no título, explicação de independência do CITY EYES e categorias “Portal”, “Obras”, “Dados abertos”, “Pedir informação” e “Ouvidoria/serviços”. Cada item mostra órgão, destino, última conferência do link e aviso de abertura externa. Link conferido não significa base atualizada.

**Fontes públicas no detalhe:** primeiro vem a ocorrência comunitária e seu histórico. Depois, uma área separada apresenta as fontes da cidade e eventuais referências específicas revisadas. O padrão é “Não há vínculo oficial confirmado” e “Relato não enviado à prefeitura”. Não apresentar um link genérico do portal como protocolo oficial da ocorrência.

**Detalhe da referência:** nome original, órgão emissor, cidade, identificador externo quando existir, URL, tipo de relação, justificativa e pessoa/equipe responsável pela revisão; exibir data da consulta e data declarada pelo órgão separadamente. Somente dados públicos e necessários aparecem.

**Fonte indisponível:** mostrar a data da última conferência e explicar que não foi possível verificar a informação agora. O relato e sua publicação continuam funcionando; o app não depende da disponibilidade do portal municipal. Não confirmar sucesso de abertura externa se o sistema operacional recusou o link.

A interface deve seguir exclusivamente o design system aprovado. Prototipar os novos estados antes da implementação: carregando, vazio, link indisponível, fonte sem data, informação em cache, referência contestada e demonstração. Anunciar destino externo, origem e estado ao leitor de tela; não distinguir origens apenas por cor; suportar escala de texto e navegação sem mapa.

## 4. Autorização e ciclo das referências

Consulta pública não exige conta. A conta usada para publicar relatos não concede autoridade municipal. Operadores só podem propor referências a relatos de suas cidades; isso não lhes permite editar o registro oficial de origem.

O papel de curador é uma proposta, não um novo privilégio automaticamente concedido. Deve ter escopo municipal ou de catálogo explicitamente autorizado, separado de administração de usuários. Recomenda-se revisão distinta da submissão, com estados `pending → verified → disputed/withdrawn`; restauração e correções geram novos eventos, sem apagar a decisão anterior.

Uma referência deve passar por verificação de município, órgão, identificador, URL e justificativa. A relação pode ser “contexto da cidade” ou “registro específico confirmado”; contexto genérico não vira vínculo de execução. IA pode ajudar a organizar texto no futuro, mas não confirma relações, autenticidade, legalidade de despesa ou responsabilidade.

## 5. Contrato de dados proposto

Não há migração nesta entrega. Os nomes abaixo são uma proposta conceitual para eventual implementação, mantendo o backend modular aprovado.

| Entidade | Dados mínimos | Integridade e visibilidade |
|---|---|---|
| `public_sources` | ID, cidade, órgão, título, categoria, URL, formato, licença/termos, método de obtenção, cobertura, frequência declarada, `last_checked_at`, `data_as_of`, estado | URL pública e cidade obrigatórias; ausência de data/licença fica explícita |
| `source_snapshots` | Fonte, versão/hash quando aplicável, consulta, data de corte, resultado, erro, contagem validada, versão do adaptador | Snapshot não é dado atual por definição; acesso a payload bruto restrito e minimizado |
| `report_public_references` | Relato, fonte, ID externo, tipo/justificativa de relação, estado, autor/revisor e datas | Cidade consistente; registro específico exige evidência; autoria privada não vaza em consulta pública |
| Auditoria | Objeto, ação, ator, antes/depois minimizados, motivo, data | Registrar proposta, aprovação, contestação e retirada; sem tokens nem dados pessoais excessivos |

Em uma evolução com valores financeiros, guardar moeda, exercício, unidade gestora, classificação e etapa da despesa separadamente. Usar decimal preciso, não ponto flutuante. Não somar orçamento autorizado, empenhado, liquidado, pago e valor contratado como se fossem a mesma grandeza; evitar dupla contagem de aditivos e versões. Definir essas regras antes de produzir indicadores ou comparações municipais.

No diretório, não é necessário criar todas essas entidades: uma configuração controlada de fontes pode bastar. O desenho completo é para não perder rastreabilidade ao evoluir.

## 6. Arquitetura e operação propostas

O app consulta seu backend/configuração e abre os portais oficiais no navegador do dispositivo. Não carregar sites municipais por scraping no celular, injetar formulários de login nem coletar credenciais dos portais.

Se um conector for aprovado, ele será um módulo do mesmo backend: obter arquivo/API autorizado → validar formato, licença e esquema → minimizar campos → gravar snapshot → publicar leitura paginada/agregada. Falha mantém a última versão válida com aviso, nunca substitui dados por zeros. Ausência no último arquivo não significa exclusão definitiva sem validar se a fonte é completa ou incremental.

Limitar downloads, tempo, tentativas e paralelismo por origem; usar backoff e impedir sobreposição de importações. Reprocessamento deve ser idempotente por fonte/versão/identificador externo. Não executar sincronização municipal durante a requisição do cidadão. Paginar por cidade/exercício e indexar as consultas medidas; evitar enviar bases completas ao celular. Ainda não há benchmark ou promessa de capacidade.

Para proteger o backend de URLs maliciosas, aceitar apenas origens previamente aprovadas; bloquear IPs privados/metadados, validar DNS e cada redirecionamento e limitar MIME/tamanho. Sanitizar conteúdo importado; nunca executar HTML de fonte externa como parte do app. HTTP legado deve ser explicitamente sinalizado e não receber dados do usuário; validar uma rota HTTPS oficial antes de produção.

## 7. Privacidade e governança

A publicidade de uma página não autoriza, por si só, toda republicação ou todo cruzamento de dados pessoais. A aplicação concreta da LAI/LGPD e as condições da licença precisam ser avaliadas para cada conjunto. O CITY EYES, enquanto projeto independente, não deve presumir que possui todas as bases legais e competências de um órgão público.

Para o primeiro recorte, não copiar bases de remuneração, beneficiários, saúde, CPF, contatos pessoais ou textos livres de solicitações. Preferir links e indicadores agregados somente depois de avaliar risco de reidentificação. Nomes de órgão, objeto público e referências contratuais necessários podem ser mantidos após validação; não aplicar uma proibição genérica a toda informação pessoal cuja divulgação possa ter fundamento legal.

Antes de dados reais: definir responsável pela curadoria, canal de correção/contestação, retenção, exclusão segura de snapshots e política de acesso. Correção no portal original não se propaga automaticamente ao CITY EYES sem processo de atualização; a interface deve deixar isso claro.

## 8. Matriz de validação futura

São testes especificados, **não executados**, porque não há módulo implementado.

| Área | Cenários e resultado esperado |
|---|---|
| Requisitos | F-13, US-T-01–05 e UC-T-01–03 rastreados a T-27–34 na seção 17 do plano |
| Unitários | Datas desconhecidas, origem, estado de desatualização, validação de URL/cidade e tipo de vínculo sem inferir confirmação |
| API/banco | Anônimo só lê; operador não edita outra cidade; curadoria exige permissão; transições auditadas; não retorna payload bruto/identidade privada |
| Contratos de conectores (futuro) | CSV com encoding/separador distintos, coluna removida, IDs repetidos, versão repetida, snapshot parcial, campo nulo e alteração de licença |
| Resiliência | Timeout, 404/500, redirecionamento indevido e arquivo excessivo preservam versão válida e não geram zeros nem bloqueiam relatos |
| Financeiro (futuro) | Moeda/exercício/unidade/etapa claros; não somar etapas ou duplicar aditivos; números conferidos contra a fonte |
| UI/fluxo | Trocar cidade, abrir fonte externa, voltar ao relato, lidar com link recusado e fonte sem data; nunca mostrar “enviado à prefeitura” sem integração |
| Acessibilidade | VoiceOver/TalkBack anunciam origem, datas e destino; texto ampliado, contraste, foco e alvos de toque conforme design system |
| Segurança e privacidade | URL com IP privado, redirecionamento, HTML e campo pessoal indevido são bloqueados/minimizados; consulta pública não expõe notas internas |
| Desempenho | Medir lista/detalhe com cidade/exercício e carga definida; sem chamadas municipais em cada abertura nem arquivos grandes no celular |

Depois de implementado e aprovado o fluxo, Maestro pode validar navegação e rótulos. Ele não substitui testes de autorização, importação, semântica financeira, atualização e proteção de dados.

## 9. Validação atual das fontes municipais

Em 18/11/2026, o usuário escolheu a listagem atual de licitações de Londrina como **candidata** para evolução. Isso não aprova importação nem implementação. A matriz completa, as evidências das rotas e a amostra mínima estão em [pesquisa de transparência](../research/transparencia-publica.md#revalidação-manual-de-rotas-e-matriz-de-viabilidade--18112026), [Londrina](https://portal-prefeitura-londrina.equiplano.cloud/relatorio/licitacao-contrato/licitacoes/licitacoes/listagem?flagDescartada=false&flagVideoconferencia=false&updateParams=false) e [Ponta Grossa](https://servicos.pontagrossa.pr.gov.br/portaltransparencia/1/).

| Campo | O que foi possível confirmar | Estado para conector |
|---|---|---|
| Órgão | Prefeitura do Município de Londrina; licitações centralizadas segundo a página municipal | Confirmado |
| Rota | Portal municipal HTTPS; HTTP redireciona para HTTPS. A listagem atual em Equiplano responde HTTPS. O antigo portal em HTTP:8080 não é rota segura de ingestão. | Confirmado para navegação; aprovação técnica do host ainda necessária |
| Cobertura | Licitações a partir de 01/04/2026 | Confirmada para a listagem mostrada |
| Atualização | O rodapé declara “em tempo real”, mas capturas do portal exibiram horários diferentes em 17/11/2026; sem SLA ou data de corte consistente | Declarada, não garantida |
| Esquema e chave | Colunas visíveis, incluindo número/ano e objeto; sem dicionário nem chave estável verificada | Pendente |
| Formato e volume | Prefeitura chama a rota de “formato aberto”; a interface oferece “Baixar tabela” e PDF, sem tipo de arquivo confirmado. 8.173 linhas indicadas, 10 por página; tamanho em bytes não medido | Pendente |
| Reuso | Decreto Municipal 667/2024, art. 15 e § 1º, V, estabelece livre utilização de informação de transparência ativa, incluindo licitações, sujeita à LGPD e à Lei 14.129/2021; não indica licença CC BY específica | Base normativa geral documentada; validar os limites legais antes de qualquer uso concreto |
| Privacidade | Linhas da listagem examinadas sem CPF, telefone ou e-mail visíveis; detalhes, anexos e o conjunto integral não avaliados | Pendente; não coletar dados detalhados |
| Ponta Grossa | Portal oficial identificado, mas timeout e erro 500 impediram confirmar conteúdo, licença ou amostra | Não avaliável nesta consulta |

### Liberação obrigatória antes de qualquer conector

- Preservar como base de reutilização o Decreto Municipal 667/2024 (arts. 15 e 16) e confirmar que a finalidade/campos concretos continuam dentro dos limites legais; não atribuir CC BY 4.0 à plataforma atual sem fonte específica.
- Confirmar formato real de exportação, bytes/volume máximo, paginação do arquivo, esquema, tipos e identificador único e estável.
- Validar cobertura e cadência; distinguir data de publicação, data de atualização e data de corte.
- Revisar campos, detalhes e anexos quanto a dados pessoais; aprovar minimização, retenção, correção e acesso ao bruto.
- Aprovar origem HTTPS, host e redirecionamentos; limitar tamanho, tempo, frequência e tentativas.
- Exigir importação idempotente, validação de versões e preservação do último snapshot válido em falhas.
- Manter os registros identificados como fonte municipal. Não vinculá-los a relato comunitário sem identificador verificável e revisão humana; nunca inferir envio à prefeitura.

Até esses pontos serem confirmados, a fonte serve apenas como link externo contextualizado. Não houve download integral nem implementação de conector.

A base normativa geral de reutilização está documentada no [Decreto Municipal 667/2024](https://repositorio.londrina.pr.gov.br/index.php/menu-ouvidoria/legislacao-federal/d3cr3t-s/67331-decreto-667-2024-1/file): o art. 15 prevê livre utilização de informação de transparência ativa e o § 1º, V, inclui licitações, observadas a LGPD e a Lei 14.129/2021. Isso não é uma licença CC BY específica para o sistema Equiplano.

## 10. Decisões para o usuário

1. Aprovar diretório + contexto como primeiro recorte ou escolher também importação de dados?
2. Confirmar se haverá somente link para canais oficiais, sem envio pelo CITY EYES no MVP.
3. Definir responsável e regra de revisão para referências entre ocorrência e registro oficial.
4. Escolher um único conjunto para eventual prova de integração posterior; confirmar licença, esquema, retenção e privacidade antes da coleta.

Não ampliar a promessa do pitch para prestação oficial de contas, atendimento municipal garantido ou economia financeira medida sem implementação e evidência.
