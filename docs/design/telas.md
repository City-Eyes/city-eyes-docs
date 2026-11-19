# Telas e fluxos do app

App mobile Expo/React Native, com piloto em Curitiba, Londrina, Maringá e Ponta Grossa. A consulta pública é realizada sem conta. Relatar e operar exigem login com conta Replit no app nativo; na versão web publicada o login não está disponível.

## Inventário de telas

| Tela | Rota | Quem acessa | Status |
| --- | --- | --- | --- |
| Relatos (aba 1, lista de cidades) | / (tabs/index) | público | implementada |
| Publicar (aba 2, ícone +, escolher cidade) | /publish | público; envio exige login | implementada |
| Prometeu cumpriu (aba 3) | /prometeu-cumpriu | público | implementada (placeholder: Em breve) |
| Cidade | /city/[cityId] | público; bloco "Área da prefeitura" só para operador autorizado | implementada |
| Detalhe público do relato | /city/[cityId]/report/[reportId] | público; apoio e confirmação de resolução exigem login | implementada |
| Novo relato | /city/[cityId]/report/new | cidadão logado; foto obrigatória | implementada |
| Fila municipal de triagem | /city/[cityId]/queue | operador ou admin da cidade | implementada |
| Atendimento do relato | /city/[cityId]/queue/[reportId] | operador ou admin da cidade | implementada |
| Entrar | /auth | público | implementada |

## Barra de abas

Três ícones sem rótulo, alinhados na horizontal: lista (Relatos), + central (Publicar; se já houver cidade aberta, vai direto ao formulário) e selo (Prometeu cumpriu). A barra aparece nas três telas raiz; telas internas (cidade, relato, fila) abrem por cima, sem a barra.

## Fluxos principais

### Consulta pública
1. Relatos > selecionar cidade.
2. Selecionar relato da lista.
3. Detalhe com situação, histórico público e contagem de apoios.

### Relatar problema
1. Publicar (+) > selecionar cidade.
2. Preencher formulário (título, descrição, categoria, local, foto da câmera ou galeria, consentimento público).
3. Envio do relato; coordenada precisa estar dentro da cidade.

### Apoiar e confirmar
1. Cidadão logado apoia uma vez por relato.
2. Confirma a resolução depois que o relato fica resolvido.

### Triagem da prefeitura
1. Cidade > Área da prefeitura.
2. Fila (filtro por situação, ordenação por data).
3. Atendimento do relato selecionado.
4. Muda situação com nota pública e nota interna.
5. Histórico atualizado após salvar.

### Situações e transições permitidas
- Aberto -> Em análise ou Em andamento.
- Em análise -> Em andamento ou Resolvido.
- Em andamento -> Resolvido.
- Resolvido é final.
- Ao resolver, a evidência do reparo entra no histórico público.
- Nota interna nunca aparece na consulta pública.

### Isolamento
- Operador só vê a fila da própria cidade.

## Roteiro de demo (5 minutos)

1. Abrir o app na aba Relatos: piloto em quatro cidades do Paraná.
2. Curitiba > relato demonstrativo > detalhe público (consulta sem conta).
3. Aba + : escolher cidade e mostrar o formulário (foto, local, consentimento). Não enviar ao vivo.
4. Com a conta de operador: Curitiba > Área da prefeitura > Abrir fila municipal de triagem.
5. Abrir atendimento > mudar para Em análise com nota pública > Salvar > mostrar "Atualização salva" e o histórico.
6. Voltar ao detalhe público e mostrar que a nota pública aparece e a interna não.
7. Aba Prometeu cumpriu: próxima etapa (candidatos, planos de governo, ações que cumprem promessas). Fechar com o roadmap: mapa, triagem assistida por IA, duplicatas — tudo como próximo passo, não existente hoje.

### Plano B
Se a rede ou o login falharem, usar o ambiente local no simulador iOS com sessão de teste, ou os prints do deck. Login e operação só funcionam no app nativo, não na web publicada.

## Limites conhecidos

- Login web indisponível.
- Confirmação de resolução aceita antes de o relato estar resolvido (defeito aberto, issue City-Eyes/city-eyes-code#31).
- Prometeu cumpriu ainda sem dados.
- Mapa, IA e duplicatas não existem no app.
