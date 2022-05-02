## Dicionário de Dados

### Recepcionist
|   Tabela   | Recepcionist  |
| ---------- | ------------- |
| Descrição  | Armazena as informações da recepcionista que realiza o cadastro das consultas|

|  Nome         | Descrição                                                    | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ------------------------------------------------------------ | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD                               | INT          | ---     | PK / Identity         |
| name          | representa o nome do(a) recepcionista                        | VARCHAR      | 255     | Not Null              |
| username      | representa o nome de usuário do(a) recepcionista no sistema  | VARCHAR      | 50      | Unique / Not Null     |
| password      | representa a senha de usuário do(a) recepcionista no sistema | VARCHAR      | 50      | Not Null              |

### Patient
|   Tabela   | Patient                                                                         |
| ---------- | --------------------------------------------------------------------------------|
| Descrição  | Armazena as informações do(a) paciente que participa de uma consulta.           |

|  Nome         | Descrição                                                    | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ------------------------------------------------------------ | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD                               | INT          | ---     | PK / Identity         |
| name          | representa o nome do(a) paciente                             | VARCHAR      | 255     | Not Null              |
| username      | representa o nome de usuário do(a) paciente no sistema       | VARCHAR      | 50      | Unique / Not Null     |
| password      | representa a senha de usuário do(a) paciente no sistema      | VARCHAR      | 50      | Not Null              |

### Doctor
|   Tabela   | Doctor                                                                          |
| ---------- | --------------------------------------------------------------------------------|
| Descrição  | Armazena as informações do(a) médico(a) que participa de uma consulta.          |

|  Nome         | Descrição                                                    | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ------------------------------------------------------------ | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD                               | INT          | ---     | PK / Identity         |
| name          | representa o nome do(a) paciente                             | VARCHAR      | 255     | Not Null              |
| crm           | representa o registro do médico                              | VARCHAR      | 4       | Unique / Not Null     |
| username      | representa o nome de usuário do(a) médico(a) no sistema      | VARCHAR      | 50      | Unique / Not Null     |
| password      | representa a senha de usuário do(a) médico(a) no sistema     | VARCHAR      | 50      | Not Null              |

### Appointment
|   Tabela   | Appoinment                                                                        |
| ---------- | --------------------------------------------------------------------------------- |
| Descrição  | Armazena as informações da consulta médica                                        |

|  Nome         | Descrição                                                    | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ------------------------------------------------------------ | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD                               | INT          | ---     | PK / Identity         |
| title         | representa o título da consulta (O ASSUNTO)                  | VARCHAR      | 50      | Not Null              |
| date          | representa a data da consulta                                | DATE         | ---     | Not Null              |
| description   | representa a descrição da consulta, os detalhes              | VARCHAR      | 500     | Not Null              |
| patient       | representa o id do(a) paciente que participou da consulta    | INT          | ---     | FK                    |
| doctor        | representa o id do médico(a) que participou da consulta      | INT          | ---     | FK                    |

### Exam
|   Tabela   | Exam                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do exame que o paciente deve realizar.                    |

|  Nome         | Descrição                                                    | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ------------------------------------------------------------ | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD                               | INT          | ---     | PK / Identity         |
| title         | representa o nome do exame                                   | VARCHAR      | 50      | Not Null              |
| date          | representa a data de realização do exame                     | DATE         | ---     | Not Null              |
| description   | representa a descrição do exame, os detalhes                 | VARCHAR      | 500     | Not Null              |
| patient       | representa o id do(a) paciente que realizou o exame          | INT          | ---     | FK                    |
| doctor        | representa o id do médico(a) que solicitou o exame           | INT          | ---     | FK                    |
| exam_place    | representa o local que o exame foi realizado                 | VARCHAR      | 255     | Not Null              |




