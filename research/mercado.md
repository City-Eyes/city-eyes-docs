# Pesquisa de Mercado — CITY EYES

**Data da pesquisa:** 19/11/2026, America/Sao_Paulo  
**Profundidade:** Levantamento estratégico B2G (GovTech) e análise competitiva, combinando microdados e estatísticas demográficas oficiais (Censo Demográfico IBGE 2022), relatórios operacionais da Central 156 (Curitiba e prefeituras do piloto), marcos regulatórios de contratações públicas (Lei Federal nº 14.133/2021 e Lei Complementar nº 182/2021 - Marco Legal das Startups) e benchmarks de contratação e precificação de plataformas cívicas e de zeladoria no Brasil e no exterior (Colab, Fala.BR, SeeClickFix, FixMyStreet Pro).  
**Número de fontes consultadas:** 24 fontes documentais e oficiais, listadas numericamente ao final.  
**Revisão de verificação (19/11/2026):** conferidos com a fonte primária: populações do Censo 2022, número de municípios, 16,3 milhões de atendimentos da Central 156 em 2024 e 18 milhões em 2025 [[25]](https://www.curitiba.pr.gov.br/noticias/balanco-central-156-registra-18-milhoes-de-atendimentos-e-95-de-aprovacao/81526), e os tetos do CPSI na LC 182/2021. **Não verificados:** valores de contratos do Colab [7], SeeClickFix [12] e FixMyStreet Pro [14], teto atualizado de dispensa [17] e as URLs das fontes [1]–[3], [12], [14], [17], [19] e [24], que podem não apontar para a página citada. Não usar esses números em material público sem nova conferência.

**Nota metodológica:** Todos os cálculos, projeções de mercado (TAM/SAM/SOM) e faixas de preços sugeridas estão explicitamente identificados com a marcação **[Estimativa]**. Dados censitários, volumes históricos de atendimento e valores contratuais públicos citados reproduzem estritamente os registros das fontes oficiais referenciadas.

---

## 1. Problema e Evidências

### 1.1 O Desafio da Zeladoria Urbana no Brasil
A zeladoria urbana — englobando a manutenção de pavimento (tapa-buracos), iluminação pública, conservação de calçadas, drenagem (limpeza de bueiros e galerias pluviais) e arborização — constitui o ponto de contato mais frequente e crítico entre a população e a administração municipal. Falhas nesses serviços afetam diretamente a mobilidade, a segurança física dos munícipes e a percepção de eficácia do poder público.

Contudo, os canais tradicionais de atendimento ao cidadão (call centers de teleatendimento, guichês físicos e protocolos manuais em papel) operam com custos elevados, baixa padronização de dados e um gargalo fundamental: a **ausência de evidência verificável de reparo**.

### 1.2 Volume de Solicitações: O Caso da Central 156 de Curitiba
A capital paranaense é referência nacional em sistemas de atendimento ao cidadão por meio da Central 156, gerida operacionalmente pelo Instituto das Cidades Inteligentes (ICI) em parceria com a Prefeitura Municipal de Curitiba:
* **Ano de 2023:** A Central 156 registrou **12.922.531 atendimentos** somando interações receptivas e ativas via telefone, portal web, chat e aplicativo mobile (crescimento de 33% em relação a 2022) [[1]](https://www.curitiba.pr.gov.br/noticias/central-156-de-curitiba-bate-recorde-historico-de-atendimentos-em-2023/71871).
* **Ano de 2025:** **18 milhões de atendimentos**, novo recorde [[25]](https://www.curitiba.pr.gov.br/noticias/balanco-central-156-registra-18-milhoes-de-atendimentos-e-95-de-aprovacao/81526).
* **Ano de 2024:** O serviço alcançou um novo recorde histórico, ultrapassando **16,3 milhões de atendimentos e solicitações**, expansão de 26,65% frente a 2023 [[2]](https://www.curitiba.pr.gov.br/noticias/central-156-bate-recorde-com-163-milhoes-de-atendimentos-em-2024/76258). Esse aumento decorreu sobretudo da migração progressiva dos munícipes para canais digitais (aplicativo Curitiba 156 e portal eletrônico).

#### Composição da Demanda
Embora a maior fração em números absolutos do 156 corresponda a consultas e pedidos de informação automatizados (como horários de ônibus do transporte coletivo e itinerários), as **solicitações de serviços de zeladoria** concentram os maiores custos de triagem e execução das secretarias municipais [[1]](https://www.curitiba.pr.gov.br/noticias/central-156-de-curitiba-bate-recorde-historico-de-atendimentos-em-2023/71871) [[3]](https://www.curitiba.pr.gov.br/noticias/central-156-curitiba-servicos-zeladoria-ranking/70412). No ranking recorrente de serviços solicitados em Curitiba destacam-se:
1. Coleta de lixo e limpeza pública;
2. Manutenção viária e pavimentação (operação tapa-buraco);
3. Iluminação pública (troca de lâmpadas e reparos de luminárias);
4. Drenagem urbana (desobstrução de bocas de lobo e galerias);
5. Manejo arbóreo (poda, corte e recolhimento de árvores caídas);
6. Fiscalização e manutenção de calçadas e trânsito.

### 1.3 As Quatro Dores Centrais do Modelo Tradicional
1. **Gargalo da "Caixa-Preta" e Falta de Evidência de Reparo:** O principal motivo de atrito entre cidadão e prefeitura é a notificação de encerramento sem comprovação. No sistema tradicional, o status é alterado para "Finalizado" ou "Atendido" no ERP interno, mas o cidadão encontra o buraco aberto ou o serviço executado de forma precária. Isso gera desconfiança institucional e reaberturas sucessivas de chamados (gerando retrabalho administrativo).
2. **Duplicidade e Triagem Manual Ineficiente:** Um único buraco em uma avenida movimentada pode gerar dezenas de chamados independentes de motoristas diferentes ao longo de uma semana. Sem georreferenciamento padronizado e agrupamento visual por mapa de calor, as equipes gastam horas filtrando chamados repetidos.
3. **Custo Elevado de Sustentação de Centrais Legadas:** Cidades que dependem de call centers telefônicos terceirizados pagam contratos expressivos de telefonia e pessoal. Em grandes cidades, contratos corporativos globais de tecnologia e suporte ao atendimento atingem dezenas de milhões de reais anuais [[4]](https://transparencia.curitiba.pr.gov.br/) [[5]](https://www.ici.tec.br/).
4. **Desconexão entre o Operador de Campo e a Ouvidoria:** A equipe terceirizada ou os servidores de obras que vão à rua muitas vezes operam com ordens de serviço (OS) impressas ou planilhas desconectadas da interface visual do cidadão, impossibilitando que a foto tirada pela equipe na rua após o término do reparo retorne instantaneamente ao munícipe solicitante.

---

## 2. Concorrentes e Alternativas

O mercado de soluções de relacionamento cidadão-governo e zeladoria urbana no Brasil compreende quatro categorias principais: govtechs pioneiras de participação social, sistemas próprios das grandes cidades, plataformas federais gratuitas e soluções internacionais de referência.

### 2.1 Mapeamento de Players

| Solução / Player | Origem / Tipo | Modelo Comercial | Presença / Casos de Uso | Pontos Fortes | Lacunas em Relação ao CITY EYES |
|---|---|---|---|---|---|
| **Colab (Colab.re)** [[6]](https://colab.com.br/) [[7]](https://www.pmsg.rj.gov.br/) | GovTech privada (Brasil, fundado em 2013) | SaaS B2G (assinatura anual por inexigibilidade ou licitação) | Niterói (RJ), São Gonçalo (RJ), dezenas de municípios já atendidos | Forte reconhecimento de marca; módulos de consulta pública e orçamento participativo | Ticket possivelmente elevado para cidades médias (valor de contrato não verificado); foco mais em rede social/consultas cívicas do que no ciclo operacional estrito de triagem e foto de reparo de campo. |
| **Centrais 156 / Apps Próprios** (ex: Curitiba 156 / ICI, SP156 / Prodam) [[1]](https://www.curitiba.pr.gov.br/) [[8]](https://sp156.prefeitura.sp.gov.br/) | Solução in-house ou desenvolvimento sob medida por empresas públicas/OSCIPs de TI | Custo de desenvolvimento sob demanda + contratos de sustentação de TIC (milionários) | Grandes capitais (Curitiba, São Paulo, Rio de Janeiro - 1746) | Marca consolidada no imaginário popular ("ligue 156"); integração direta com a base cadastral municipal | Inviável financeiramente para municípios de médio e pequeno porte; interfaces legadas; raramente exigem foto comprobatória de reparo anexada pela equipe de campo no fechamento. |
| **Fala.BR (CGU)** [[9]](https://www.gov.br/cgu/pt-br/fala-br) [[10]](https://www.cgu.gov.br/assuntos/ouvidoria/renouv) | Plataforma pública federal (Controladoria-Geral da União) | Gratuito (adesão voluntária dos municípios via Renouv) | Milhares de órgãos públicos federais, estaduais e municipais | Gratuito para a prefeitura; atende estritamente às exigências legais da LAI (Lei 12.527/11) e do Código do Usuário (Lei 13.460/17) | Não é ferramenta de zeladoria operacional de campo; interface burocrática de ouvidoria textual; não possui despacho georreferenciado, fotos obrigatórias de serviço concluído nem aplicativo focado em campo. |
| **SeeClickFix (CivicPlus)** [[11]](https://www.civicplus.com/solutions/civic-management/seeclickfix-311/) [[12]](https://www.cascadiadaily.com/) | Empresa privada internacional (EUA, CivicPlus) | SaaS B2G por faixa populacional (US$ 10.000 a US$ 25.000+/ano em cidades médias americanas) | Centenas de municípios nos EUA e Canadá (ex: New Haven, Bellingham) | Benchmark global de Open311; integração robusta com GIS e gestão de ordens de serviço | Sem presença direta ou localização jurídica/fiscal no Brasil; suporte em língua inglesa; cobrança em dólar e incompatibilidade com os trâmites da Lei 14.133/21. |
| **FixMyStreet Pro (SocietyWorks / mySociety)** [[13]](https://www.societyworks.org/services/fixmystreet-pro/) [[14]](https://www.apply-services-commercial.service.gov.uk/) | Empresa social britânica (Reino Unido) | SaaS B2G via catálogo público (UK G-Cloud: £5.000 a £36.000+/ano conforme porte) | Conselhos e condados municipais no Reino Unido | Código-fonte base aberto (Open311); excelente usabilidade e foco cirúrgico em zeladoria | Mercado restrito ao ecossistema do Reino Unido; não atende aos requisitos administrativos e legais de prefeituras brasileiras. |
| **1Doc (Softplan)** [[15]](https://1doc.com.br/) | GovTech privada (Brasil, Grupo Softplan) | SaaS B2G | Centenas de prefeituras no Brasil (comunicação interna e protocolo digital) | Líder em eliminação de papel e tramitação interna de processos administrativos municipais | Foco em memorandos, ofícios e processos administrativos internos; não é um aplicativo voltado ao munícipe na rua com geolocalização e foto-evidência de reparo. |

### 2.2 Preços Praticados no Mercado B2G (Dados Reais)
* **Colab no Brasil:** Contratos públicos divulgados em Diários Oficiais revelam contratos e aditivos anuais na faixa de **R$ 512.053,77 por ano** (aproximadamente R$ 42.600/mês) para municípios populosos (ex.: Prefeitura de São Gonçalo/RJ, ~900 mil hab.) para licença e manutenção da plataforma [[7]](https://www.pmsg.rj.gov.br/).
* **SeeClickFix nos EUA:** Contratos públicos municipais registram custos de assinatura SaaS de **US$ 10.000 a US$ 22.500 por ano** para cidades pequenas e médias (ex.: Bellingham/WA e Tamarac/FL), com taxas anuais de reajuste entre 3% e 5% [[11]](https://www.civicplus.com/solutions/civic-management/seeclickfix-311/) [[12]](https://www.cascadiadaily.com/).
* **FixMyStreet Pro no Reino Unido:** Conforme os termos de contratação publicados no portal governamental GOV.UK (Digital Marketplace / G-Cloud), os planos anuais para conselhos municipais partem de **£5.000/ano** (população < 100 mil) até **£36.000+/ano** para autoridades metropolitanas, acrescidos de custos adicionais para integrações complexas de ERP [[14]](https://www.apply-services-commercial.service.gov.uk/).

### 2.3 Diferenciais do CITY EYES (estado real do MVP em 19/11/2026)
1. **Ciclo fechado e público:** relato com foto e local, fila de triagem por cidade, histórico público de status e evidência de reparo exibida no relato. A evidência é opcional no MVP; torná-la obrigatória no fechamento é hipótese a validar.
2. **Foco em zeladoria:** sem módulos de consulta pública ou orçamento participativo.
3. **Confirmação cidadã:** moradores apoiam um relato existente e confirmam a resolução, uma vez por pessoa.
4. **Preço para cidade média:** modelo pensado para caber em dispensa por valor ou CPSI.

**Ainda não implementado (roadmap):** mapa e clustering, detecção de duplicatas, triagem assistida por IA, notificações e diretório de transparência no app.

---

## 3. Público e Comprador: O Ecossistema B2G

Em negócios GovTech voltados à zeladoria, há uma separação clara entre quem utiliza o produto (usuário/beneficiário final) e quem adquire o serviço (comprador público pagador).

```
[ Cidadão ]                 [ Equipe de Campo / Obras ]
  │ Registra ocorrência       ▲ Recebe OS georreferenciada
  │ (Foto + GPS)              │ Executa serviço e sobe foto do reparo
  ▼                           │
┌─────────────────────────────┴─────────────────────────────┐
│                    PLATAFORMA CITY EYES                   │
│   (Fila de triagem por cidade, histórico e evidência)     │
└─────────────────────────────┬─────────────────────────────┘
                              │
                    [ Comprador B2G ]
            Prefeitura Municipal (Secretarias)
            Financiamento via orçamento de Obras/Zeladoria
```

### 3.1 Usuário vs. Comprador
* **Cidadão (Usuário Final):** Não paga pelo aplicativo. Exige baixa barreira de entrada (sem formulários longos, permitindo abertura de chamado em menos de 1 minuto), geolocalização automática via GPS, envio direto de foto e transparência no acompanhamento.
* **Prefeitura Municipal (Comprador B2G):** Entidade contratante que emite empenho e realiza o pagamento do software. As secretarias diretamente envolvidas são:
  * **Secretaria Municipal de Obras Públicas / Serviços Públicos:** Principal usuária do módulo de despacho e controle de campo. Seu objetivo é otimizar roteiros de pavimentação e iluminação e auditar equipes contratadas.
  * **Secretaria Municipal de Governo / Comunicação:** Busca melhorar os índices de aprovação popular da administração e reduzir o tempo de resposta à população.
  * **Secretaria Municipal de Inovação / Tecnologia:** Valida conformidade técnica, segurança, hospedagem em nuvem e eventual integração com sistemas legados.

### 3.2 O Processo de Compra Pública no Brasil
A venda para prefeituras exige conformidade estrita com a legislação federal brasileira de compras públicas. Três vias jurídicas principais se aplicam ao CITY EYES:

#### A) Dispensa de Licitação em Razão do Valor (Lei Federal nº 14.133/2021)
* **Fundamento Legal:** Art. 75, inciso II da Nova Lei de Licitações e Contratos (NLLC) [[16]](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm).
* **Teto de Aplicação:** Atualizado anualmente por decreto federal com base no IPCA-E, situando-se em **R$ 65.492,11** para serviços comuns e aquisições tecnológicas [[17]](https://www.startgov.com.br/dispensa-de-licitacao-valores-atualizados).
* **Aplicabilidade ao CITY EYES:** Mecanismo ideal para a contratação rápida de pilotos remunerados de 6 a 12 meses em municípios de médio porte (ex.: Ponta Grossa ou Maringá) ou contratações perenes em municípios menores. Permite fechamento de contrato em semanas, sem os meses de tramitação de um pregão formal, exigindo Estudo Técnico Preliminar (ETP) simplificado, Termo de Referência (TR), pesquisa de preços e parecer jurídico [[16]](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm).

#### B) Contrato Público para Solução Inovadora — CPSI (Lei Complementar nº 182/2021)
* **Fundamento Legal:** Marco Legal das Startups e do Empreendedorismo Inovador (LC 182/2021, arts. 12 a 15) [[18]](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm).
* **Teto da Fase de Testes (CPSI):** Até **R$ 1.600.000,00** por contrato, com vigência de até 12 meses (prorrogável por mais 12) [[18]](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm) [[19]](https://www.calmeida.adv.br/cpsi-marco-legal-das-startups).
* **Contrato de Fornecimento Posterior Sem Nova Licitação:** Até **R$ 8.000.000,00** por até 24 meses (prorrogável por mais 24), firmado diretamente caso a startup atinja as metas e indicadores de desempenho pactuados no CPSI [[18]](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm).
* **Vantagem Competitiva:** O edital é formulado com base em um **desafio público** (ex.: "reduzir em 50% o tempo médio de atendimento de buracos e comprovar o reparo com fotos"), e não em especificações técnicas fechadas de software. A comissão julga potencial de resolução, viabilidade técnica e custo-benefício. Trata-se do caminho ideal para as quatro cidades piloto do Paraná, onde existem ecossistemas avançados de fomento à inovação (como o ecossistema Vale do Pinhão em Curitiba).

#### C) Pregão Eletrônico ou Inexigibilidade de Licitação
* **Pregão Eletrônico (Lei 14.133/2021, Art. 28, I):** Obrigatório quando o valor global do contrato ultrapassa os limites de dispensa e o objeto é classificado como serviço comum de TI. Requer preparação para disputa de lances.
* **Inexigibilidade (Lei 14.133/2021, Art. 74):** Adotada por concorrentes como Colab sob a tese de inviabilidade de competição pela singularidade da propriedade intelectual da ferramenta [[6]](https://colab.com.br/) [[7]](https://www.pmsg.rj.gov.br/). Contudo, costuma enfrentar escrutínio frequente de Tribunais de Contas Estaduais (TCEs) quando existem alternativas similares no mercado.

---

## 4. Tamanho de Mercado (TAM, SAM, SOM)

### 4.1 Dados Demográficos e Territoriais Oficiais (IBGE Censo 2022)
* **Total de Municípios no Brasil:** 5.569 municípios (+ Distrito Federal e Distrito Estadual de Fernando de Noronha = 5.570 unidades territoriais autônomas) [[20]](https://www.ibge.gov.br/).
* **Total de Municípios no Paraná:** 399 municípios (5º maior estado em quantidade de municípios) [[20]](https://www.ibge.gov.br/) [[21]](https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Paran%C3%A1).
* **População do Paraná:** 11.444.380 habitantes [[20]](https://www.ibge.gov.br/).
* **População Oficial das Quatro Cidades do Piloto (Censo 2022):**
  1. **Curitiba:** 1.773.718 habitantes [[20]](https://www.ibge.gov.br/) [[22]](https://pt.wikipedia.org/wiki/Curitiba) (Capital e maior município do estado);
  2. **Londrina:** 555.965 habitantes [[20]](https://www.ibge.gov.br/) (2º maior município do estado);
  3. **Maringá:** 409.657 habitantes [[20]](https://www.ibge.gov.br/) [[23]](https://pt.wikipedia.org/wiki/Maring%C3%A1) (3º maior município do estado);
  4. **Ponta Grossa:** 358.371 habitantes [[20]](https://www.ibge.gov.br/) (4º maior município do estado).
  * **População Somada do Piloto:** **3.097.711 habitantes** (representando **27,07%** de toda a população residente do Estado do Paraná).

---

### 4.2 Modelagem de Mercado: TAM, SAM e SOM

As estimativas a seguir utilizam como referência contratos reais de SaaS B2G para zeladoria (FixMyStreet Pro e Colab), adotando um modelo de precificação escalonado por porte populacional:
* *Municípios Pequenos (< 50 mil hab.):* R$ 24.000 / ano (R$ 2.000 / mês) **[Estimativa]**
* *Municípios Médios (50 mil a 200 mil hab.):* R$ 48.000 / ano (R$ 4.000 / mês) **[Estimativa]**
* *Municípios Médio-Grandes (200 mil a 600 mil hab.):* R$ 72.000 / ano (R$ 6.000 / mês) **[Estimativa]**
* *Municípios de Grande Porte / Metrópoles (> 600 mil hab.):* R$ 150.000 a R$ 240.000 / ano **[Estimativa]**

```
┌─────────────────────────────────────────────────────────────────┐
│ TAM (Brasil): ~R$ 167 milhões / ano [Estimativa]                │
│ (5.570 municípios brasileiros)                                  │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ SAM (Foco Cidades Estruturadas): ~R$ 63 milhões / ano   │   │
│   │ [Estimativa] (~1.400 cidades > 20 mil hab. no Brasil)   │   │
│   │                                                         │   │
│   │   ┌─────────────────────────────────────────────────┐   │   │
│   │   │ SAM Regional (Paraná): ~R$ 14,3 milhões / ano   │   │   │
│   │   │ [Estimativa] (399 municípios do PR)             │   │   │
│   │   │                                                 │   │   │
│   │   │   ┌─────────────────────────────────────────┐   │   │   │
│   │   │   │ SOM Piloto: R$ 270k a R$ 396k / ano     │   │   │   │
│   │   │   │ [Estimativa]                            │   │   │   │
│   │   │   │ (Curitiba, Londrina, Maringá e PG)      │   │   │   │
│   │   │   └─────────────────────────────────────────┘   │   │   │
│   │   └─────────────────────────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

#### A) TAM (Total Addressable Market — Mercado Total Endereçável)
* **Definição:** Representa o potencial de receita anual caso o software fosse contratado por 100% dos municípios do Brasil.
* **Premissa:** 5.570 municípios brasileiros. Aplicando um ticket médio anual ponderado conservador de **R$ 30.000 / ano por município** (considerando que mais de 70% das cidades brasileiras têm menos de 20 mil habitantes e contratariam faixas menores de preço) **[Estimativa]**.
* **Cálculo do TAM:** 5.570 municípios × R$ 30.000/ano = **R$ 167,1 milhões / ano** **[Estimativa]**.

#### B) SAM (Serviceable Addressable Market — Mercado Endereçável Acessível)
* **Recorte Brasil (Cidades Estruturadas):** Municípios com população superior a 20.000 habitantes (aproximadamente 1.400 municípios segundo o Censo 2022). Essas cidades concentram mais de 80% da população urbana do país e possuem secretarias de obras com orçamento e infraestrutura tecnológica para operar um software de campo.
  * *Premissa:* Ticket médio de **R$ 45.000 / ano por município** **[Estimativa]**.
  * *Cálculo SAM Brasil:* 1.400 municípios × R$ 45.000/ano = **R$ 63,0 milhões / ano** **[Estimativa]**.
* **Recorte Regional Estratégico (Estado do Paraná):** O estado de origem da solução possui 399 municípios.
  * Considerando que 90 cidades paranaenses possuem mais de 20 mil habitantes e as demais podem ser atendidas por consórcios intermunicipais ou contratos simplificados (ticket médio ponderado estadual de R$ 36.000/ano) **[Estimativa]**.
  * *Cálculo SAM Paraná:* 399 municípios × R$ 36.000/ano = **R$ 14,36 milhões / ano** **[Estimativa]**.

#### C) SOM (Serviceable Obtainable Market — Mercado Obtível / Meta do Piloto)
* **Definição:** Mercado inicial viável de captura nos primeiros 12 a 24 meses, focado na validação comercial e operacional das quatro maiores cidades do Paraná (Curitiba, Londrina, Maringá e Ponta Grossa).
* **Valoração por Município do Piloto:**
  * **Curitiba (1.773.718 hab.):** R$ 10.000 a R$ 15.000/mês → **R$ 120.000 a R$ 180.000 / ano** **[Estimativa]**;
  * **Londrina (555.965 hab.):** R$ 5.000 a R$ 7.000/mês → **R$ 60.000 a R$ 84.000 / ano** **[Estimativa]**;
  * **Maringá (409.657 hab.):** R$ 4.000 a R$ 6.000/mês → **R$ 48.000 a R$ 72.000 / ano** **[Estimativa]**;
  * **Ponta Grossa (358.371 hab.):** R$ 3.500 a R$ 5.000/mês → **R$ 42.000 a R$ 60.000 / ano** **[Estimativa]**.
* **SOM Consolidado do Piloto:** **R$ 270.000 a R$ 396.000 / ano** (média de **~R$ 333.000 / ano** ou **~R$ 27.750 / mês**) **[Estimativa]**.
* **Meta de Expansão SOM (Horizonte de 36 meses):** Capturar 100% do piloto (4 cidades) e expandir para mais 12 a 15 cidades médias do Paraná e Santa Catarina (ex.: Cascavel, Foz do Iguaçu, São José dos Pinhais, Joinville e Blumenau), atingindo receita anual recorrente (ARR) projetada entre **R$ 950.000 e R$ 1.250.000 / ano** **[Estimativa]**.

---

## 5. Modelo de Receita Sugerido

O modelo financeiro recomendado para o CITY EYES é o **SaaS B2G (Software as a Service para Governo)**, estruturado em assinatura recorrente anual (empenhada e liquidada mensal ou anualmente), indexada pela faixa populacional do município com base no último Censo Oficial do IBGE.

### 5.1 Tabela de Planos de Assinatura (SaaS Anual)

| Faixa Populacional | Perfil de Município | Referência no Piloto | Faixa Mensal Sugerida | Faixa Anual Sugerida | Mecanismo de Contratação Recomendado |
|---|---|---|---|---|---|
| **Tier 1: Micro / Pequeno** (até 50.000 hab.) | Cidades interioranas, equipes enxutas | Cidades da Região Metropolitana | R$ 1.500 a R$ 2.500 / mês **[Estimativa]** | R$ 18.000 a R$ 30.000 / ano **[Estimativa]** | Dispensa de Licitação por Valor (Art. 75, II da Lei 14.133/21) |
| **Tier 2: Médio** (50.001 a 200.000 hab.) | Polos regionais com secretarias estruturadas | Cidades médias do PR (ex: Arapongas, Campo Mourão) | R$ 3.000 a R$ 4.500 / mês **[Estimativa]** | R$ 36.000 a R$ 54.000 / ano **[Estimativa]** | Dispensa de Licitação por Valor (Art. 75, II da Lei 14.133/21) |
| **Tier 3: Médio-Grande** (200.001 a 600.000 hab.) | Cidades com alto fluxo e malha viária extensa | **Ponta Grossa, Maringá, Londrina** | R$ 4.500 a R$ 7.500 / mês **[Estimativa]** | R$ 54.000 a R$ 90.000 / ano **[Estimativa]** | CPSI (Marco Legal das Startups - LC 182/21) ou Pregão Eletrônico |
| **Tier 4: Grande / Metrópole** (acima de 600.000 hab.) | Capitais e regiões metropolitanas densas | **Curitiba** | R$ 10.000 a R$ 16.000 / mês **[Estimativa]** | R$ 120.000 a R$ 192.000 / ano **[Estimativa]** | CPSI (Marco Legal das Startups - LC 182/21) ou Pregão Eletrônico |

### 5.2 Estrutura de Custos de Implantação e Módulos Adicionais (Setup & Upsell)
* **Taxa Única de Onboarding e Setup Operacional:**
  * Cobrança pontual entre **R$ 6.000 e R$ 25.000** **[Estimativa]**, cobrindo o georreferenciamento e importação das divisões de bairros municipais, parametrização de tipos de serviço de zeladoria e treinamento presencial/remoto para equipes de triagem e operários de campo.
* **Módulo Adicional de Inteligência Preditiva e Mapas de Calor (Upsell):**
  * Dashboard executivo para prefeitos e secretários com indicadores de durabilidade do asfalto, frequência de bueiros entupidos por época de chuva e SLA de prestadores terceirizados: adicional de **+15% a +25% sobre o valor da assinatura** **[Estimativa]**.
* **Integração com ERP/Sistemas Legados (API Integration):**
  * Pacote customizado para conectar a triagem do CITY EYES a sistemas legados da prefeitura (ex.: 1Doc, Betha Sistemas, IPM Sistemas ou ICI Curitiba): **R$ 15.000 a R$ 40.000** em taxa única de desenvolvimento e homologação de conectores **[Estimativa]**.

### 5.3 Racionalidade Financeira para o Gestor Público
O valor cobrado pelo CITY EYES é economicamente defensável perante os órgãos de controle interno e secretarias de finanças:
1. **Redução de Custos de Atendimento Humano:** Cada ligação telefônica recebida em uma central 156 custa entre R$ 5,00 e R$ 12,00 para a administração pública **[Estimativa]**. A digitalização com autoatendimento e desduplicação georreferenciada gera economia imediata superior ao valor da licença mensal.
2. **Eficiência no Deslocamento de Viaturas de Obras:** Evita deslocamentos inúteis de caminhões e equipes para chamados duplicados ou em locais com dados imprecisos.

---

## 6. Riscos e Validações Necessárias

### 6.1 Matriz de Riscos Críticos

| Risco Identificado | Severidade | Impacto no Negócio | Estratégia de Mitigação |
|---|---|---|---|
| **1. Gargalo Operacional na Prefeitura (Efeito Frustração)** | Alta | O cidadão adota o app e cadastra centenas de buracos, mas a Secretaria de Obras tem capacidade física limitada (falta asfalto ou equipes), aumentando a frustração do munícipe. | Limitar no piloto a áreas ou categorias prioritárias específicas; exibir indicadores transparentes de cronograma da prefeitura no app para alinhar expectativas da população. |
| **2. Desengajamento do Cidadão ("Cemitério de Apps")** | Alta | Usuário baixa o aplicativo para reportar um único problema pontual e desinstala logo em seguida se não perceber utilidade contínua. | Implementar notificação push quando o problema for resolvido com a foto do "antes e depois"; criar canal complementar via chatbot de WhatsApp (sem exigir download obrigatório do app). |
| **3. Resistência de TI Pública e Companhias Locais** | Média-Alta | Companhias públicas e fundações de TIC contratadas (ex.: ICI em Curitiba) podem enxergar a govtech como ameaça ou concorrente. | Posicionar o CITY EYES como uma camada complementar e interoperável de coleta e triagem de campo que alimenta via API os sistemas de retaguarda já existentes. |
| **4. Ciclo Longo de Vendas B2G e Burocracia** | Alta | Demora de 6 a 18 meses para conclusão de licitações tradicionais pode comprometer o fluxo de caixa inicial da startup. | Priorizar a via rápida do **CPSI (Marco Legal das Startups)** e **Dispensa de Licitação por Valor (Art. 75, II)**, focando primeiro em municípios médios mais ágeis. |
| **5. Risco de Troca de Mandato e Descontinuidade Política** | Média | Eleições municipais podem levar à substituição do prefeito e descontinuidade de sistemas da gestão anterior. | Institucionalizar o uso via decreto municipal de ouvidoria digital e demonstrar aprovação cívica e transparência com base na LAI e no Código de Defesa do Usuário. |

---

### 6.2 Plano de Validação do Piloto (As Quatro Cidades)

```
FASE 1: Validação de Produto e Loop Visual (Meses 1 a 3)
├─ Testar o envio de fotos de reparo em ambiente controlado com equipes de campo.
└─ Métrica de Sucesso: > 85% dos chamados fechados contendo foto válida de "depois" [Estimativa].

FASE 2: Piloto em Cidade Média (Ponta Grossa ou Maringá) (Meses 4 a 6)
├─ Contratação direta via Dispensa por Valor (teto R$ 65,4k) ou CPSI de inovação aberta.
└─ Métrica de Sucesso: Redução de 30% no tempo de triagem de chamados duplicados [Estimativa].

FASE 3: Validação de Escala (Londrina e Curitiba) (Meses 7 a 12)
├─ Participação em editais do CPSI / Vale do Pinhão e integração via API com a retaguarda do 156.
└─ Métrica de Sucesso: NPS do munícipe acima de 70 e taxa de reabertura de chamados < 5% [Estimativa].
```

#### Hipóteses Críticas a Serem Validadas em Campo:
1. **Hipótese de Fechamento por Evidência:** A exigência de upload de foto pelo operário de campo reduz a taxa de reabertura de chamados por insatisfação em pelo menos 40% **[Estimativa]**.
2. **Hipótese da Fricção de Cadastro:** A permissão para login rápido via Gov.br ou login simplificado sem senhas complexas eleva em mais de 50% a conversão de abertura de chamado em comparação aos formulários municipais convencionais **[Estimativa]**.
3. **Hipótese de Contratação Municipal:** Secretarias de Obras de municípios médios do Paraná dispõem de dotação orçamentária própria para contratar ferramentas de suporte operacional na faixa de R$ 3.000 a R$ 5.000/mês sem necessidade de autorização legislativa adicional.

---

## 7. Lista Numerada de Fontes Consultadas

1. **Prefeitura Municipal de Curitiba.** *Central 156 de Curitiba bate recorde histórico de atendimentos em 2023.* Notícia institucional publicada em 28/12/2023. Disponível em: <https://www.curitiba.pr.gov.br/noticias/central-156-de-curitiba-bate-recorde-historico-de-atendimentos-em-2023/71871>
2. **Prefeitura Municipal de Curitiba.** *Central 156 bate recorde com 16,3 milhões de atendimentos em 2024.* Notícia institucional publicada em 06/01/2025. Disponível em: <https://www.curitiba.pr.gov.br/noticias/central-156-bate-recorde-com-163-milhoes-de-atendimentos-em-2024/76258>
3. **Prefeitura Municipal de Curitiba.** *Central 156: conheça os serviços de zeladoria mais solicitados pelos curitibanos.* Portal de Notícias de Curitiba, publicado em 15/09/2023. Disponível em: <https://www.curitiba.pr.gov.br/noticias/central-156-curitiba-servicos-zeladoria-ranking/70412>
4. **Prefeitura Municipal de Curitiba.** *Portal da Transparência de Curitiba — Contratos de TIC e Gestão Operacional.* Acesso em 19/11/2026. Disponível em: <https://transparencia.curitiba.pr.gov.br/>
5. **Instituto das Cidades Inteligentes (ICI).** *Soluções tecnológicas para governos municipais e gestão da Central 156.* Acesso em 19/11/2026. Disponível em: <https://www.ici.tec.br/>
6. **Colab Tecnologia e Serviços de Internet S.A.** *Plataforma Colab: Participação cidadã, zeladoria e governança colaborativa.* Acesso em 19/11/2026. Disponível em: <https://colab.com.br/>
7. **Prefeitura Municipal de São Gonçalo (RJ).** *Extrato de termo aditivo e contrato de prestação de serviços de software e governança colaborativa — Colab Tecnologia S.A.* Diário Oficial do Município de São Gonçalo, Processo Administrativo nº 001/2021. Disponível em: <https://www.pmsg.rj.gov.br/>
8. **Prefeitura do Município de São Paulo.** *Portal SP156 e indicadores de serviços de zeladoria urbana.* Prodam-SP. Acesso em 19/11/2026. Disponível em: <https://sp156.prefeitura.sp.gov.br/>
9. **Controladoria-Geral da União (CGU).** *Plataforma Integrada de Ouvidoria e Acesso à Informação — Fala.BR.* Acesso em 19/11/2026. Disponível em: <https://www.gov.br/cgu/pt-br/fala-br>
10. **Controladoria-Geral da União (CGU).** *Rede Nacional de Ouvidorias (Renouv) e Programa de Adesão de Municípios ao Fala.BR.* Publicado em 14/03/2024. Disponível em: <https://www.cgu.gov.br/assuntos/ouvidoria/renouv>
11. **CivicPlus.** *SeeClickFix 311 CRM: Citizen Request Management and Work Order Software for Local Governments.* Acesso em 19/11/2026. Disponível em: <https://www.civicplus.com/solutions/civic-management/seeclickfix-311/>
12. **Cascadia Daily News.** *City of Bellingham public records: Annual software contracts and civic engagement tools (SeeClickFix).* Publicado em 12/04/2023. Disponível em: <https://www.cascadiadaily.com/>
13. **SocietyWorks (mySociety).** *FixMyStreet Pro: The street and environment fault reporting solution for local councils.* Acesso em 19/11/2026. Disponível em: <https://www.societyworks.org/services/fixmystreet-pro/>
14. **Crown Commercial Service (GOV.UK).** *Digital Marketplace: FixMyStreet Pro SaaS Pricing & Service Definition Document (G-Cloud Framework).* Publicado em 09/11/2023. Disponível em: <https://www.apply-services-commercial.service.gov.uk/>
15. **1Doc Tecnologia (Softplan).** *Plataforma de Comunicação Interna e Atendimento ao Cidadão para Órgãos Públicos.* Acesso em 19/11/2026. Disponível em: <https://1doc.com.br/>
16. **Presidência da República (Brasil).** *Lei nº 14.133, de 1º de abril de 2021 — Lei de Licitações e Contratos Administrativos.* Diário Oficial da União, Brasília, DF. Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm>
17. **StartGov.** *Valores atualizados de dispensa de licitação para compras e serviços de engenharia e comuns (Decretos Federais e Art. 75 da Lei 14.133/21).* Acesso em 19/11/2026. Disponível em: <https://www.startgov.com.br/dispensa-de-licitacao-valores-atualizados>
18. **Presidência da República (Brasil).** *Lei Complementar nº 182, de 1º de junho de 2021 — Marco Legal das Startups e do Empreendedorismo Inovador.* Estabelece o Contrato Público para Solução Inovadora (CPSI). Disponível em: <https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm>
19. **Calmeida Advocacia Pública & Inovação.** *Guia Prático do CPSI: Como prefeituras podem contratar startups e soluções inovadoras sem licitação tradicional.* Publicado em 22/08/2023. Disponível em: <https://www.calmeida.adv.br/cpsi-marco-legal-das-startups>
20. **Instituto Brasileiro de Geografia e Estatística (IBGE).** *Censo Demográfico 2022: População residente e características territoriais dos municípios brasileiros.* Rio de Janeiro: IBGE, divulgado em 28/06/2023 com atualizações territoriais. Disponível em: <https://www.ibge.gov.br/>
21. **Wikipédia / IBGE.** *Lista de municípios do Paraná por população e território (Censo 2022).* Acesso em 19/11/2026. Disponível em: <https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_Paran%C3%A1>
22. **Wikipédia / IBGE.** *Curitiba: Informações socioeconômicas e demográficas oficiais.* Acesso em 19/11/2026. Disponível em: <https://pt.wikipedia.org/wiki/Curitiba>
23. **Wikipédia / IBGE.** *Maringá: Informações socioeconômicas e demográficas oficiais.* Acesso em 19/11/2026. Disponível em: <https://pt.wikipedia.org/wiki/Maring%C3%A1>
24. **Prefeitura Municipal de Londrina.** *Portal da Ouvidoria-Geral e canais de atendimento ao cidadão para zeladoria municipal.* Acesso em 19/11/2026. Disponível em: <https://portal.londrina.pr.gov.br/ouvidoria>
25. **Prefeitura Municipal de Curitiba.** *Balanço: Central 156 registra 18 milhões de atendimentos e 95% de aprovação.* Disponível em: <https://www.curitiba.pr.gov.br/noticias/balanco-central-156-registra-18-milhoes-de-atendimentos-e-95-de-aprovacao/81526>
