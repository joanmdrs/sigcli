# Documento Lista de User Stories

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos Funcionais no [Documento de Visão](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-visao.md). 

### User Story US01 - Manter Consulta
**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir consultas. Uma consulta tem como atributos um título, paciente, doutor, possui uma data e uma descrição. O diagrama de classe desse User Story está [aqui](ClassDiagram/DC_consulta.png).

| # | Requisitos Envolvidos |
----|---------------------
RF16| Inserir Consulta
RF17| Alterar Consulta
RF18| Buscar Consulta
RF19| Listar Consultas
RF20| Excluir Consulta

|                           |              |
| ------------------------- | -------------|
| **Prioridade**            | Essencial    |
| **Estimativa**            | 8h           |
| **Tempo Gasto (real):**   |              |
| **Tamanho Funcional**     | 40           |
| **Analista**              | Allan        |
| **Desenvolvedor**         | Rauan        |
| **Revisor**               | Adson        |
| **Testador**              | Adson        |

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** |
| ----------- | --------- |
| **TA01.01** | O usuário deseja cadastrar uma consulta no sistema, então vai à tela de inserir consulta. Então ele preenche todos os campos de modo correto e clica em Salvar/Cadastrar, recebendo uma notificação em tela de sucesso, como "Consulta cadastrada com sucesso". |
| **TA01.02** | O usuário tenta cadastrar uma consulta no sistema sem preencher todos os campos obrigatórios definidos. Então deve ser notificado em tela informando que não foi possível cadastrar a consulta pois há campos obrigatórios em branco. |
| **TA01.03** | Ao editar uma consulta já cadastrada, o usuário preenche todos os campos de modo correto e clica em Editar/Salvar, recebendo uma notificação em tela de sucesso, como "Consulta alterada com sucesso". |
| **TA01.04** | Ao editar uma consulta já cadastrada, o usuário deixa algum campo obrigatório em branco. Desse modo, deve surgir uma notificação em tela informando que não é possível salvar a edição feita com campos obrigatórios faltando. |
| **TA01.05** | Ao realizar uma busca de uma consulta, o sistema retornará os dados do cliente que possui o parâmetro submetido na pesquisa. |
| **TA01.06** | Ao realizar uma busca de uma consulta não cadastrada ou que não atende aos parâmetros de pesquisa, uma mensagem de aviso deve ser mostrada em tela, informando que "Não há nenhuma consulta no sistema que atenda a esses parâmetros" ou "A consulta não retornou nenhum resultado". |
| **TA01.07** | Ao realizar uma exclusão de uma consulta, o sistema deve retornar uma notificação em tela de sucesso, como "Consulta excluida com sucesso". |
