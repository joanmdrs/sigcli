# Documento Lista de User Stories

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos Funcionais no [Documento de Visão](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-visao.md). 




### User Story US03 - Manter Exame
**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir exames. Um exame tem como atributos um título, paciente, doutor, possui uma data, além de uma descrição e local do exame. O diagrama de classe desse User Story está [aqui](ClassDiagram/DC_exame.png).

| # | Requisitos Envolvidos |
----|---------------------
RF21| Inserir Exame
RF22| Alterar Exame
RF23| Buscar Exame
RF24| Listar Exames
RF25| Excluir Exame

|                           |              |
| ------------------------- | -------------|
| **Prioridade**            | Essencial    |
| **Estimativa**            | 6h           |
| **Tempo Gasto (real):**   |              |
| **Tamanho Funcional**     | **A definir**|
| **Analista**              | Adson        |
| **Desenvolvedor**         | Joan         |
| **Revisor**               | Rauan        |
| **Testador**              | Rauan        |

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** |
| ----------- | --------- |
| **TA03.01** | O usuário deseja cadastrar um exame no sistema, então vai à tela de inserir exame. Então ele preenche todos os campos de modo correto e clica em Salvar/Cadastrar, recebendo uma notificação em tela de sucesso, como "Exame cadastrado com sucesso". |
| **TA03.02** | O usuário tenta cadastrar um exame no sistema sem preencher todos os campos obrigatórios definidos. Então deve ser notificado em tela informando que não foi possível cadastrar o exame pois há campos obrigatórios em branco. |
| **TA03.03** | Ao editar um exame já cadastrado, o usuário deixa algum campo obrigatório em branco. Desse modo, deve surgir uma notificação em tela informando que não é possível salvar a edição feita com campos obrigatórios faltando. |
| **TA03.04** | Ao realizar uma busca de um exame não cadastrado ou que não atende aos parâmetros de pesquisa, uma mensagem de aviso deve ser mostrada em tela, informando que "Não há nenhum exame no sistema que atenda a esses parâmetros" ou "A consulta não retornou nenhum resultado". |
