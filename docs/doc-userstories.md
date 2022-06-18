# Documento Lista de User Stories

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos Funcionais no [Documento de Visão](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-visao.md).

### User Story US01 - Manter Consulta

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir consultas. Uma consulta tem como atributos um título, paciente, doutor, possui uma data e uma descrição. Diagrama de classe disponível [aqui](doc-modelos.md).

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

| **Código**  | **Descrição**                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **TA01.01** | O usuário deseja cadastrar uma consulta no sistema, então vai à tela de inserir consulta. Então ele preenche todos os campos de modo correto e clica em Salvar/Cadastrar, recebendo uma notificação em tela de sucesso, como "Consulta cadastrada com sucesso".                      |
| **TA01.02** | O usuário tenta cadastrar uma consulta no sistema sem preencher todos os campos obrigatórios definidos. Então deve ser notificado em tela informando que não foi possível cadastrar a consulta pois há campos obrigatórios em branco.                                                |
| **TA01.03** | Ao editar uma consulta já cadastrada, o usuário preenche todos os campos de modo correto e clica em Editar/Salvar, recebendo uma notificação em tela de sucesso, como "Consulta alterada com sucesso".                                                                               |
| **TA01.04** | Ao editar uma consulta já cadastrada, o usuário deixa algum campo obrigatório em branco. Desse modo, deve surgir uma notificação em tela informando que não é possível salvar a edição feita com campos obrigatórios faltando.                                                       |
| **TA01.05** | Ao realizar uma busca de uma consulta, o sistema retornará os dados do cliente que possui o parâmetro submetido na pesquisa.                                                                                                                                                         |
| **TA01.06** | Ao realizar uma busca de uma consulta não cadastrada ou que não atende aos parâmetros de pesquisa, uma mensagem de aviso deve ser mostrada em tela, informando que "Não há nenhuma consulta no sistema que atenda a esses parâmetros" ou "A consulta não retornou nenhum resultado". |
| **TA01.07** | Ao realizar uma exclusão de uma consulta, o sistema deve retornar uma notificação em tela de sucesso, como "Consulta excluida com sucesso".                                                                                                                                          |

### User Story US02 - Manter Paciente

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir pacientes. Um paciente tem como atributos um nome, username e password. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF06 | Inserir Paciente      |
| RF07 | Alterar Paciente      |
| RF08 | Buscar Paciente       |
| RF09 | Listar Pacientes      |
| RF10 | Excluir Paciente      |

|                         |               |
| ----------------------- | ------------- |
| **Prioridade**          | Essencial     |
| **Estimativa**          | 8h            |
| **Tempo Gasto (real):** |               |
| **Tamanho Funcional**   | 40            |
| **Analista**            | Rauan         |
| **Desenvolvedor**       | Allan         |
| **Revisor**             | Joan          |
| **Testador**            | Joan          |

**Testes de Aceitação (TA)**

| **Código**  | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TA02.01** | INSERIR - Caso de Sucesso: O usuário deseja inserir um Paciente no sistema, então vai à tela de inserir Paciente, preenche todos os campos de maneira correta e com dados válidos e clica em Salvar/Cadastrar, recebendo uma notificação de sucesso na tela, como: "Paciente cadastrado com sucesso!".                                                                                                    |
| **TA02.02** | INSERIR - Caso de Fracasso: O usuário deseja inserir um Paciente no sistema, então vai à tela de inserir Paciente, porém ele esquece e/ou preenche algum ou todos os campos de maneira incorreta e/ou com dados inválidos e clica em Salvar/Cadastrar, recebendo uma notificação em tela de falha no cadastro, como: "ERRO: Um ou mais campos foram preenchidos de maneira incorreta!".                   |
| **TA02.03** | EDITAR - Caso de Sucesso: Ao editar os dados de um paciente já cadastrado, o usuário preenche os campos que deseja editar de maneira correta e válida. Logo, após confirmar a edição, deve surgir uma notificação de sucesso na tela, como: "A edição foi feita e salva com sucesso!".                                                                                                                    |
| **TA02.04** | EDITAR - Caso de Fracasso: Ao editar os dados de um paciente já cadastrado, o usuário deixa algum campo obrigatório em branco ou preenche de maneira incorreta ou com caracteres inválidos. Desse modo, deve surgir uma notificação em tela informando falha no processo de edição, como: "ERRO: Não foi possível concluir a edição, pois algum ou alguns campos foram preenchidos de maneira incorreta." |
| **TA02.05** | BUSCAR - Caso de Sucesso: Ao realizar uma busca de um paciente já cadastrado no sistema, o usuário irá informar alguns dados do paciente que deseja buscar, logo após, surgirá uma tela com o paciente que foi encontrado com os dados informados na hora da busca.                                                                                                                                       |
| **TA02.06** | BUSCAR - Caso de Fracasso: Ao tentar realizar uma busca de um paciente que NÃO está cadastrado no sistema, o usuário irá informar alguns dados do paciente que deseja buscar, logo após, surgirá uma notificação na tela informando falha na busca, como: "ERRO: Não há paciente cadastrado com os dados informados".                                                                                     |
| **TA02.07** | LISTAR - Caso de Sucesso: Após ir na opção de Listar Pacientes, surgirá uma tela com todos os pacientes já cadastrados até o momento.                                                                                                                                                                                                                                                                     |
| **TA02.08** | LISTAR - Caso de Fracasso: Após ir na opção de Listar Pacientes, caso não haja nenhum paciente cadastrado até o momento, surgirá uma notificação na tela informando erro na operação, como: "ERRO: Não há pacientes cadastrado até o momento".                                                                                                                                                            |
| **TA02.09** | EXCLUIR - Caso de Sucesso: O usuário deseja excluir um Paciente do sistema, então após o sistema exibir a lista de pacientes cadastrados, o usúario escolhe o paciente que deseja e clica na opção de "Excluir". Após confirmar a operação, receberá uma notificação de sucesso em tela, como: "Paciente excluído com sucesso!".                                                                          |

### User Story US03 - Manter Exame

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir exames. Um exame tem como atributos um título, paciente, doutor, possui uma data, além de uma descrição e local do exame. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF21 | Inserir Exame         |
| RF22 | Alterar Exame         |
| RF23 | Buscar Exame          |
| RF24 | Listar Exames         |
| RF25 | Excluir Exame         |

|                         |               |
| ----------------------- | ------------- |
| **Prioridade**          | Essencial     |
| **Estimativa**          | 6h            |
| **Tempo Gasto (real):** |               |
| **Tamanho Funcional**   | 40            |
| **Analista**            | Adson         |
| **Desenvolvedor**       | Joan          |
| **Revisor**             | Rauan         |
| **Testador**            | Rauan         |

**Testes de Aceitação (TA)**

| **Código**  | **Descrição**                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TA03.01** | O usuário deseja cadastrar um exame no sistema, então vai à tela de inserir exame. Então ele preenche todos os campos de modo correto e clica em Salvar/Cadastrar, recebendo uma notificação em tela de sucesso, como "Exame cadastrado com sucesso".                        |
| **TA03.02** | O usuário tenta cadastrar um exame no sistema sem preencher todos os campos obrigatórios definidos. Então deve ser notificado em tela informando que não foi possível cadastrar o exame pois há campos obrigatórios em branco.                                               |
| **TA03.03** | Ao editar um exame já cadastrado, o usuário deixa algum campo obrigatório em branco. Desse modo, deve surgir uma notificação em tela informando que não é possível salvar a edição feita com campos obrigatórios faltando.                                                   |
| **TA03.04** | Ao realizar uma busca de um exame não cadastrado ou que não atende aos parâmetros de pesquisa, uma mensagem de aviso deve ser mostrada em tela, informando que "Não há nenhum exame no sistema que atenda a esses parâmetros" ou "A consulta não retornou nenhum resultado". |

### User Story US04 - Manter Médico

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir os médicos. Um médico tem como atributos um nome, um crm, um username, e uma senha. Diagrama de classe disponível [aqui](doc-modelos.md).


| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF06 | Inserir Médico        |
| RF07 | Alterar Médico        |
| RF08 | Buscar Médico         |
| RF09 | Listar Médicos        |
| RF10 | Excluir Médico        |

|                         |               |
| ----------------------- | ------------- |
| **Prioridade**          | Essencial     |
| **Estimativa**          | 8h            |
| **Tempo Gasto (real):** | 12h           |
| **Tamanho Funcional**   | 20            |
| **Analista**            | Joan          |
| **Desenvolvedor**       | Adson         |
| **Revisor**             | Allan         |
| **Testador**            | Allan         |


**Testes de Aceitação (TA)**

| **Código**  | **Descrição**                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TA04.01** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário preenche todos os campos do formulário corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.
| **TA04.02** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário preenche os dados de maneira incorreta e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.
| **TA04.03** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário seleciona a opção buscar, e prenche o campo de busca corretamente e clica e em Buscar, ao clicar em Buscar, o sistema fará uma busca no banco de dados, se a informação contida no campo de busca corresponder a alguma instância da entidade médico, o sistema deve exibir aquela instância, caso contrário, o sistema deve exibir uma mensagem de aviso. Mensagem: Nada foi encontrado.
| **TA04.04** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário seleciona a opção buscar, e prenche o campo de busca de maneira incorreta e clica e em Buscar, ao clicar em Buscar ele é notificado com uma mensagem de aviso. Mensagem: Preencha o campo de busca corretamente.
| **TA04.05** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do médico a ser alterado. O usuário realiza a alteração dos campos corretamente e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Médico alterado com sucesso.
| **TA04.06** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do médico a ser alterado. O usuário realiza a alteração dos campos de maneira incorreta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: A operação falhou, o campo “xxxx” não foi preenchido corretamente.
| **TA04.07** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir, ao clicar em Excluir, o usuário é notificado com uma pergunta acompanhada de 2 botões de escolha: um botão com a palavra Não e outro com a palavra Sim. Pergunta: Deseja realmente excluir o médico de id: 'xxxx'. Caso o usuário selecione a opção 'Não' ele deve ser notificado com uma mensagem informativa. Mensagem: Nenhuma alteração foi feita. Caso o usuário selecione a opção 'Sim' ele deve ser notificado com uma mensagem de sucesso. Mensagem: Médico excluído com sucesso. 
| **TA04.08** | O usuário recepcionista/administrador navega até o módulo médico. Estando no módulo de médico, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do médico pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir e ele não tem permissão para Excluir, ao clicar em Excluir, o usuário é notificado com uma mensagem de erro. Mensagem: Você não possui permissão para realizar esta operação.

### User Story US05 - Manter Recepcionista

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir os recepcionistas. Um recepcionista tem como atributos um nome, um cpf, um telefone, um email, um username e uma senha. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF11 | Inserir Recepcionista |
| RF12 | Alterar Recepcionista |
| RF13 | Buscar Recepcionista  |
| RF14 | Listar Recepcionista  |
| RF15 | Excluir Recepcionista |


|                         |               |
| ----------------------- | ------------- |
| **Prioridade**          | Essencial     |
| **Estimativa**          | 8h            |
| **Tempo Gasto (real):** | (A preencher) |
| **Tamanho Funcional**   | 20            |
| **Analista**            | Allan         |
| **Desenvolvedor**       | Joan          |
| **Revisor**             | Rauan         |
| **Testador**            | Rauan         |


**Testes de Aceitação (TA)**

| **Código**  | **Descrição**                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TA04.01** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário preenche todos os campos do formulário corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.
| **TA04.02** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário preenche os dados de maneira incorreta e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.
| **TA04.03** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário seleciona a opção buscar, e prenche o campo de busca corretamente e clica e em Buscar, ao clicar em Buscar, o sistema fará uma busca no banco de dados, se a informação contida no campo de busca corresponder a alguma instância da entidade recepcionista, o sistema deve exibir aquela instância, caso contrário, o sistema deve exibir uma mensagem de aviso. Mensagem: Nada foi encontrado.
| **TA04.04** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário seleciona a opção buscar, e prenche o campo de busca de maneira incorreta e clica e em Buscar, ao clicar em Buscar ele é notificado com uma mensagem de aviso. Mensagem: Preencha o campo de busca corretamente.
| **TA04.05** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do recepcionista a ser alterado. O usuário realiza a alteração dos campos corretamente e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Recepcionista alterado com sucesso.
| **TA04.06** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do recepcionista a ser alterado. O usuário realiza a alteração dos campos de maneira incorreta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: A operação falhou, o campo “xxxx” não foi preenchido corretamente.
| **TA04.07** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir, ao clicar em Excluir, o usuário é notificado com uma pergunta acompanhada de 2 botões de escolha: um botão com a palavra Não e outro com a palavra Sim. Pergunta: Deseja realmente excluir o recepcionista de id: 'xxxx'. Caso o usuário selecione a opção 'Não' ele deve ser notificado com uma mensagem informativa. Mensagem: Nenhuma alteração foi feita. Caso o usuário selecione a opção 'Sim' ele deve ser notificado com uma mensagem de sucesso. Mensagem: Recepcionista excluído com sucesso. 
| **TA04.08** | O usuário administrador navega até o módulo recepcionista. Estando no módulo de recepcionista, o usuário faz uma busca e recebe como resposta uma tabela contendo todas as informações do recepcionista pesquisado, além de dois botões, um de editar e outro de excluir. O usuário seleciona o botão Excluir e ele não tem permissão para Excluir, ao clicar em Excluir, o usuário é notificado com uma mensagem de erro. Mensagem: Você não possui permissão para realizar esta operação.

### User Story US05 - Manter Diagnóstico

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar e excluir os diagósticos. Um diagnóstico tem como atributos um paciente, um médico, um problema encontrado, e uma descrição. Diagrama de classe disponível [aqui](doc-class-diagram.md).



| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF06 | Inserir Diagnósico        |
| RF07 | Alterar Diagnósico        |
| RF08 | Buscar Diagnósico         |
| RF09 | Excluir Diagnósico        |


|                         |               |
| ----------------------- | ------------- |
| **Prioridade**          | Essencial     |
| **Estimativa**          | 8h            |
| **Tempo Gasto (real):** |               |
| **Tamanho Funcional**   | 37            |
| **Analista**            | Wesley        |
| **Desenvolvedor**       | Wesley        |
| **Revisor**             | Allan         |
| **Testador**            | Allan         |



**Testes de Aceitação (TA)**

| **Código**  | **Descrição**                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TA04.01** | O usuário doutor navega até o módulo diagnóstico. Estando no módulo de diagnóstico, o usuário preenche todos os campos do formulário corretamente e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.
| **TA04.02** | O usuário doutor navega até o módulo diagnóstico. Estando no módulo de diagnóstico, o usuário preenche os dados de maneira incorreta e clica no botão Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.
| **TA04.03** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, o usuário seleciona a opção buscar, e prenche o campo de busca corretamente, ao clicar em Buscar, o sistema fará uma busca no banco de dados, se a informação contida no campo de busca corresponder a alguma instância da entidade consulta, o sistema deve exibir aquela instância com diagnóstico, caso contrário, o sistema mostra uma instância sem diagnóstico.
| **TA04.04** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico.
| **TA04.05** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do diagnóstico a ser alterado. O usuário realiza a alteração dos campos de maneira incorreta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de erro. Mensagem: A operação falhou, o campo “xxxx” não foi preenchido corretamente.
| **TA04.06** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico. O usuário seleciona o botão de editar, e os campos do formulário são preenchidos com os dados do diagnóstico a ser alterado. O usuário realiza a alteração dos campos de maneira Correta e clica em Salvar, ao clicar em Salvar ele é notificado com uma mensagem de sucesso. Mensagem: Atualização realizada com sucesso.
| **TA04.07** | O usuário doutor navega até o módulo consulta. Estando no módulo de consulta, caso tenha um diagnóstico ele vai poder clicar e será mandado para uma página com o diagnóstico daquela consulta. Ainda terá nessa página dois botões de editar e deletar diagnóstico. O usuário seleciona o botão Excluir, ao clicar em Excluir, o usuário é notificado com uma pergunta acompanhada de 2 botões de escolha: um botão com a palavra Não e outro com a palavra Sim. Pergunta: Deseja realmente excluir o diagnóstico de id: 'xxxx'. Caso o usuário selecione a opção 'Não' ele deve ser notificado com uma mensagem informativa. Mensagem: Nenhuma alteração foi feita. Caso o usuário selecione a opção 'Sim' ele deve ser notificado com uma mensagem de sucesso. Mensagem: Diangnóstico excluído com sucesso. 
