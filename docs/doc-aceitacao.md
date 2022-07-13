# Relatório de Testes de Aceitação

Este documento descreve os Testes de Aceitação criados a partir do [Documento de User Stories](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-userstories.md).

## Descrição

**Código**: Identificação do Teste.

**Descrição**: Descrição dos passos e detalhes do teste a ser executado.

**Especificação**: Informações sobre a função testada e se ela está de acordo com a especificação do caso de uso.

**Resultado**: Resultado do teste, modificações sugeridas ou resultados do teste. No caso de erro ou problema na execução do teste descrever o erro em detalhes e adicionar print's das telas.

### User Story US01 - Manter Consulta

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA01.01** | O usuário deseja cadastrar uma consulta no sistema, então vai à tela de inserir consulta. Então ele preenche todos os campos de modo correto e clica em Salvar/Cadastrar, recebendo uma notificação em tela de sucesso, como "Consulta cadastrada com sucesso".                      | 
| **TA01.02** | O usuário tenta cadastrar uma consulta no sistema sem preencher todos os campos obrigatórios definidos. Então deve ser notificado em tela informando que não foi possível cadastrar a consulta pois há campos obrigatórios em branco.                                                |
| **TA01.03** | Ao editar uma consulta já cadastrada, o usuário preenche todos os campos de modo correto e clica em Editar/Salvar, recebendo uma notificação em tela de sucesso, como "Consulta alterada com sucesso".                                                                               |
| **TA01.04** | Ao editar uma consulta já cadastrada, o usuário deixa algum campo obrigatório em branco. Desse modo, deve surgir uma notificação em tela informando que não é possível salvar a edição feita com campos obrigatórios faltando.                                                       |
| **TA01.05** | Ao realizar uma busca de uma consulta, o sistema retornará os dados do cliente que possui o parâmetro submetido na pesquisa.                                                                                                                                                         |
| **TA01.06** | Ao realizar uma busca de uma consulta não cadastrada ou que não atende aos parâmetros de pesquisa, uma mensagem de aviso deve ser mostrada em tela, informando que "Não há nenhuma consulta no sistema que atenda a esses parâmetros" ou "A consulta não retornou nenhum resultado". |
| **TA01.07** | Ao realizar uma exclusão de uma consulta, o sistema deve retornar uma notificação em tela de sucesso, como "Consulta excluida com sucesso".                                                                                                             

### User Story US02 - Manter Paciente

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA02.01** | INSERIR - Caso de Sucesso: O usuário deseja inserir um Paciente no sistema, então vai à tela de inserir Paciente, preenche todos os campos de maneira correta e com dados válidos e clica em Salvar/Cadastrar, recebendo uma notificação de sucesso na tela, como: "Paciente cadastrado com sucesso!".                                                                                                    | OK | OK |
| **TA02.02** | INSERIR - Caso de Fracasso: O usuário deseja inserir um Paciente no sistema, então vai à tela de inserir Paciente, porém ele esquece e/ou preenche algum ou todos os campos de maneira incorreta e/ou com dados inválidos e clica em Salvar/Cadastrar, recebendo uma notificação em tela de falha no cadastro, como: "ERRO: Um ou mais campos foram preenchidos de maneira incorreta!".                   | Não | A mensagem foi exibida corretamente, porém, o server quebrou por falta de dados ao tentar cadastrar o paciente |
| **TA02.03** | EDITAR - Caso de Sucesso: Ao editar os dados de um paciente já cadastrado, o usuário preenche os campos que deseja editar de maneira correta e válida. Logo, após confirmar a edição, deve surgir uma notificação de sucesso na tela, como: "A edição foi feita e salva com sucesso!".                                                                                                                    | Não | A edição está sendo feita normalmente, porém a password do paciente está sendo exibida em formato hash ao usuário |
| **TA02.04** | EDITAR - Caso de Fracasso: Ao editar os dados de um paciente já cadastrado, o usuário deixa algum campo obrigatório em branco ou preenche de maneira incorreta ou com caracteres inválidos. Desse modo, deve surgir uma notificação em tela informando falha no processo de edição, como: "ERRO: Não foi possível concluir a edição, pois algum ou alguns campos foram preenchidos de maneira incorreta." | Não | Mesmo sem preencher o campo de email e username a edição foi realizada |
| **TA02.05** | BUSCAR - Caso de Sucesso: Ao realizar uma busca de um paciente já cadastrado no sistema, o usuário irá informar alguns dados do paciente que deseja buscar, logo após, surgirá uma tela com o paciente que foi encontrado com os dados informados na hora da busca.                                                                                                                                       | OK | OK |
| **TA02.06** | BUSCAR - Caso de Fracasso: Ao tentar realizar uma busca de um paciente que NÃO está cadastrado no sistema, o usuário irá informar alguns dados do paciente que deseja buscar, logo após, surgirá uma notificação na tela informando falha na busca, como: "ERRO: Não há paciente cadastrado com os dados informados".                                                                                     |
| **TA02.07** | LISTAR - Caso de Sucesso: Após ir na opção de Listar Pacientes, surgirá uma tela com todos os pacientes já cadastrados até o momento.                                                                                                                                                                                                                                                                     |
| **TA02.08** | LISTAR - Caso de Fracasso: Após ir na opção de Listar Pacientes, caso não haja nenhum paciente cadastrado até o momento, surgirá uma notificação na tela informando erro na operação, como: "ERRO: Não há pacientes cadastrado até o momento".                                                                                                                                                            |
| **TA02.09** | EXCLUIR - Caso de Sucesso: O usuário deseja excluir um Paciente do sistema, então após o sistema exibir a lista de pacientes cadastrados, o usúario escolhe o paciente que deseja e clica na opção de "Excluir". Após confirmar a operação, receberá uma notificação de sucesso em tela, como: "Paciente excluído com sucesso!".                                                                          |

### User Story US03 - Manter Exame

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA03.01** | O usuário deseja cadastrar um exame no sistema, então vai à tela de inserir exame. Então ele preenche todos os campos de modo correto e clica em Salvar/Cadastrar, recebendo uma notificação em tela de sucesso, como "Exame cadastrado com sucesso".                        |
| **TA03.02** | O usuário tenta cadastrar um exame no sistema sem preencher todos os campos obrigatórios definidos. Então deve ser notificado em tela informando que não foi possível cadastrar o exame pois há campos obrigatórios em branco.                                               |
| **TA03.03** | Ao editar um exame já cadastrado, o usuário deixa algum campo obrigatório em branco. Desse modo, deve surgir uma notificação em tela informando que não é possível salvar a edição feita com campos obrigatórios faltando.                                                   |
| **TA03.04** | Ao realizar uma busca de um exame não cadastrado ou que não atende aos parâmetros de pesquisa, uma mensagem de aviso deve ser mostrada em tela, informando que "Não há nenhum exame no sistema que atenda a esses parâmetros" ou "A consulta não retornou nenhum resultado". |

### User Story US04 - Manter Médico

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA04.01** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário preenche todos os campos do formulário corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso. | OK | OK
| **TA04.02** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário preenche os dados de maneira incorreta e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente. | A implementação não está de acordo com a especificação do User Story. | Não é retornada a mensagem como especificada em TA04.02.
| **TA04.03** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário seleciona a opção buscar, e prenche o campo de busca corretamente e clica e em Buscar, ao clicar em Buscar, o sistema fará uma busca no banco de dados, se a informação contida no campo de busca corresponder a alguma instância da entidade médico, o sistema deve exibir aquela instância, caso contrário, o sistema deve exibir uma mensagem de aviso. Mensagem: Nada foi encontrado. | A implementação não está de acordo com a especificação do User Story. | Não há mensagem de retorno quando não encontra um médico no banco de dados. 
| **TA04.04** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário seleciona a opção buscar, e prenche o campo de busca de maneira incorreta e clica e em Buscar, ao clicar em Buscar ele é notificado com uma mensagem de aviso. Mensagem: Preencha o campo de busca corretamente. | A implementação não está de acordo com a especificação do User Story. | Sem mensagem de retorno quando preenche o campo incorretamente.
| **TA04.05** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do médico a ser alterado. O usuário realiza a alteração dos campos corretamente e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Médico alterado com sucesso. | OK | OK
| **TA04.06** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do médico a ser alterado. O usuário realiza a alteração dos campos de maneira incorreta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: A operação falhou, o campo “xxxx” não foi preenchido corretamente. | A implementação não está de acordo com a especificação do User Story. | Sem mensagem de retorno ao preencher campo incorretamente durante edição.
| **TA04.07** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir, ao clicar em Excluir, o usuário é notificado com uma pergunta acompanhada de 2 botões de escolha: um botão com a palavra Não e outro com a palavra Sim. Pergunta: Deseja realmente excluir o médico de id: 'xxxx'. Caso o usuário selecione a opção 'Não' ele deve ser notificado com uma mensagem informativa. Mensagem: Nenhuma alteração foi feita. Caso o usuário selecione a opção 'Sim' ele deve ser notificado com uma mensagem de sucesso. Mensagem: Médico excluído com sucesso. | OK | OK
| **TA04.08** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir e ele não tem permissão para Excluir, ao clicar em Excluir, o usuário é notificado com uma mensagem de erro. Mensagem: Você não possui permissão para realizar esta operação. | Não está de acordo pois as permissões de usuários ainda não foram implementadas. | Não implementado. Aguardar a implementação das permissões para atender ao TA04.08.

### User Story US05 - Manter Recepcionista

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA05.01** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário preenche todos os campos do formulário corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.
| **TA05.02** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário preenche os dados de maneira incorreta e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.
| **TA05.03** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário seleciona a opção buscar, e prenche o campo de busca corretamente e clica e em Buscar, ao clicar em Buscar, o sistema fará uma busca no banco de dados, se a informação contida no campo de busca corresponder a alguma instância da entidade recepcionista, o sistema deve exibir aquela instância, caso contrário, o sistema deve exibir uma mensagem de aviso. Mensagem: Nada foi encontrado.
| **TA05.04** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário seleciona a opção buscar, e prenche o campo de busca de maneira incorreta e clica e em Buscar, ao clicar em Buscar ele é notificado com uma mensagem de aviso. Mensagem: Preencha o campo de busca corretamente.
| **TA05.05** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do recepcionista a ser alterado. O usuário realiza a alteração dos campos corretamente e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Recepcionista alterado com sucesso.
| **TA05.06** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do recepcionista a ser alterado. O usuário realiza a alteração dos campos de maneira incorreta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: A operação falhou, o campo “xxxx” não foi preenchido corretamente.
| **TA05.07** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir, ao clicar em Excluir, o usuário é notificado com uma pergunta acompanhada de 2 botões de escolha: um botão com a palavra Não e outro com a palavra Sim. Pergunta: Deseja realmente excluir o recepcionista de id: 'xxxx'. Caso o usuário selecione a opção 'Não' ele deve ser notificado com uma mensagem informativa. Mensagem: Nenhuma alteração foi feita. Caso o usuário selecione a opção 'Sim' ele deve ser notificado com uma mensagem de sucesso. Mensagem: Recepcionista excluído com sucesso. 
| **TA05.08** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir e ele não tem permissão para Excluir, ao clicar em Excluir, o usuário é notificado com uma mensagem de erro. Mensagem: Você não possui permissão para realizar esta operação.

### User Story US06 - Manter Diagnóstico

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA06.01** | O usuário doutor navega até o módulo diagnóstico. Estando no módulo de diagnóstico, o usuário preenche todos os campos do formulário corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.
| **TA06.02** | O usuário doutor navega até o módulo diagnóstico. Estando no módulo de diagnóstico, o usuário preenche os dados de maneira incorreta e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.
| **TA06.03** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, o usuário seleciona a opção buscar, e prenche o campo de busca corretamente, ao clicar em Buscar, o sistema fará uma busca no banco de dados, se a informação contida no campo de busca corresponder a alguma instância da entidade consulta, o sistema deve exibir aquela instância com diagnóstico, caso contrário, o sistema mostra uma instância sem diagnóstico.
| **TA06.04** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico.
| **TA06.05** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do diagnóstico a ser alterado. O usuário realiza a alteração dos campos de maneira incorreta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: A operação falhou, o campo “xxxx” não foi preenchido corretamente.
| **TA06.06** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do diagnóstico a ser alterado. O usuário realiza a alteração dos campos de maneira Correta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Atualização realizada com sucesso.

### User Story US07 - Manter Prontuário
**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA07.01** | O usuário preenche o campo do CPF corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Prontuário cadastrado com sucesso.
| **TA07.02** | O usuário não preenche o campo do CPF e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: É necessário informar um CPF de Paciente.
| **TA07.03** | O usuário clica no input de buscar, e prenche o campo de busca com um CPF cadastrado no sistema, ao clicar no botão Buscar, o sistema deve exibir aquela instância de prontuário.
| **TA07.04** | O usuário clica no input de buscar, e prenche o campo de busca com um CPF não cadastrado no sistema, ao clicar no botão Buscar, o sistema deve exibir a mensagem "Nenhum prontuário para este CPF".
| **TA07.05** | Na página de prontuários, uma lista com todos os prontuários deve ser exibida, com os botões de editar e excluir.
| **TA07.07** | Ao clicar no botão de Excluir, será mostrado um alerta com opção de confirmar a exclusão ou cancelar; se confirmado, o prontuário será deletado do banco de dados.


### User Story US08 - Manter Pagamento

**Testes de Aceitação (TA)**

| **Código**  | **Descrição** | **Especificação** | **Resultado**
| ----------- | ------ | --------- | -------- |
| **TA08.01** | INSERIR - Caso de Sucesso: O usuário deseja inserir um Pagamento no sistema, então vai ao menu de Pagamentos, seleciona se trata-se de um pagamento de consulta ou exame. Escolhe o método de pagamento. Preenche todos os campos de maneira correta e com dados válidos e clica em Salvar/Cadastrar, recebendo uma notificação de sucesso na tela, como: "Pagamento cadastrado com sucesso!".                                                                                                    |
| **TA08.02** | INSERIR - Caso de Fracasso: O usuário deseja inserir um Pagamento no sistema, então vai ao menu de inserir Pagamento, porém ele esquece, preenche algum ou todos os campos de maneira incorreta e/ou com dados inválidos e clica em Salvar/Cadastrar, recebendo uma notificação em tela de falha no cadastro, como: "ERRO: Um ou mais campos foram preenchidos de maneira incorreta!".                   |
| **TA08.03** | LISTAR - Caso de Sucesso: Após rolat até a opção de Listar Pagamentos, surgirá uma tela com todos os pagamentos já cadastrados até o momento.                                                                                                                                                                                                                                                                     |
| **TA08.04** | LISTAR - Caso de Fracasso: Após rolar até a opção de Listar Pagamentos, caso não haja nenhum pagamento cadastrado até o momento, surgirá uma notificação na tela informando erro na operação, como: "ERRO: Não há pagamentos cadastrados até o momento".                                                |

### Relatório de Bugs e Providências
| Teste | Providência |
| ----- | ----------- |
| TA02.02 | Concertar implementação do server para que ele não quebre ao usuário não preencher todos os campos na hora da inserção de um paciente. |
| TA02.03 | Mudar exibição do password do paciente na parte da edição |
| TA02.04 | Não permitir a atualização sem os campos chave do paciente preenchidos (CPF, username, password e name) |
| TA04.02 | Implementar mensagem para o usuário como especificado no TA. |
| TA04.03 | Implementar mensagem para o usuário como especificado no TA. |
| TA04.04 | Implementar mensagem para o usuário como especificado no TA. |
| TA04.06 | Implementar mensagem para o usuário como especificado no TA. |
| TA04.08 | Aguardar implementação das permissões dos usuários |
