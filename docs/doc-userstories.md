# Documento Lista de User Stories

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos Funcionais no [Documento de Visão](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-visao.md). 

### User Story US02 - Manter Paciente
**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir pacientes. Um paciente tem como atributos um nome, username e password. O diagrama de classe desse User Story está [aqui](ClassDiagram/DC_paceinte.png).

| # | Requisitos Envolvidos |
----|---------------------
RF06| Inserir Paciente
RF07| Alterar Paciente
RF08| Buscar Paciente
RF09| Listar Pacientes
RF10| Excluir Paciente

|                           |              |
| ------------------------- | -------------|
| **Prioridade**            | Essencial    |
| **Estimativa**            | 8h           |
| **Tempo Gasto (real):**   |              |
| **Tamanho Funcional**     | **A definir**|
| **Analista**              | Rauan        |
| **Desenvolvedor**         | Allan        |
| **Revisor**               | Joan         |
| **Testador**              | Joan         |

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** |
| ----------- | --------- |
| **TA02.01** | INSERIR - Caso de Sucesso: O usuário deseja inserir um Paciente no sistema, então vai à tela de inserir Paciente, preenche todos os campos de maneira correta e com dados válidos e clica em Salvar/Cadastrar, recebendo uma notificação de sucesso na tela, como: "Paciente cadastrado com sucesso!". |
| **TA02.02** | INSERIR - Caso de Fracasso: O usuário deseja inserir um Paciente no sistema, então vai à tela de inserir Paciente, porém ele esquece e/ou preenche algum ou todos os campos de maneira incorreta e/ou com dados inválidos e clica em Salvar/Cadastrar, recebendo uma notificação em tela de falha no cadastro, como: "ERRO: Um ou mais campos foram preenchidos de maneira incorreta!". |
| **TA02.03** | EDITAR - Caso de Sucesso: Ao editar os dados de um paciente já cadastrado, o usuário preenche os campos que deseja editar de maneira correta e válida. Logo, após confirmar a edição, deve surgir uma notificação de sucesso na tela, como: "A edição foi feita e salva com sucesso!". |
| **TA02.04** | EDITAR - Caso de Fracasso: Ao editar os dados de um paciente já cadastrado, o usuário deixa algum campo obrigatório em branco ou preenche de maneira incorreta ou com caracteres inválidos. Desse modo, deve surgir uma notificação em tela informando falha no processo de edição, como: "ERRO: Não foi possível concluir a edição, pois algum ou alguns campos foram preenchidos de maneira incorreta." |
| **TA02.05** | BUSCAR - Caso de Sucesso: Ao realizar uma busca de um paciente já cadastrado no sistema, o usuário irá informar alguns dados do paciente que deseja buscar, logo após, surgirá uma tela com o paciente que foi encontrado com os dados informados na hora da busca. |
| **TA02.06** | BUSCAR - Caso de Fracasso: Ao tentar realizar uma busca de um paciente que NÃO está cadastrado no sistema, o usuário irá informar alguns dados do paciente que deseja buscar, logo após, surgirá uma notificação na tela informando falha na busca, como: "ERRO: Não há paciente cadastrado com os dados informados". |
| **TA02.07** | LISTAR - Caso de Sucesso: Após ir na opção de Listar Pacientes, surgirá uma tela com todos os pacientes já cadastrados até o momento. |
| **TA02.08** | LISTAR - Caso de Fracasso: Após ir na opção de Listar Pacientes, caso não haja nenhum paciente cadastrado até o momento, surgirá uma notificação na tela informando erro na operação, como: "ERRO: Não há pacientes cadastrado até o momento". |
| **TA02.09** | EXCLUIR - Caso de Sucesso: O usuário deseja excluir um Paciente do sistema, então após o sistema exibir a lista de pacientes cadastrados, o usúario escolhe o paciente que deseja e clica na opção de "Excluir". Após confirmar a operação, receberá uma notificação de sucesso em tela, como: "Paciente excluído com sucesso!". |

