## Documento de Modelos

Neste documento temos o modelo Conceitual (UML) ou de Dados (Entidade-Relacionamento). Temos também a descrição das entidades e o dicionário de dados.

## Modelo Conceitual

```mermaid
classDiagram
    
    class Recepcionist{
        -Int id
        -String name
        -String cpf
        -String phone
        -String email
        -String username
        -String password

        +insertRecepcionist() void
        +getRecepcionist() Recepcionist
        +updateRecepcionist() Recepcionist
        +deleteRecepcionist() Recepcionist
        +listRecepcionist() List~Recepcionist~
    }

    class Appointment{
        -Int id
        -String title
        -Patient patient
        -Doctor doctor
        -Date date
        -String description
        
        +insertAppointment() void
        +getAppointment() Appointment
        +updateAppointment() Appointment
        +deleteAppointment() Appointment
        +listAppointment() List~Appointment~
    }

    class Exam{
        -Int id
        -String title
        -Patient patient
        -Doctor doctor
        -Date date
        -String description

        +insertExam() void
        +getExam() Exam
        +updateExam() Exam
        +deleteExam() Exam
        +listExam() List~Exam~
    }
    
    class Payament{
        -Int id
        -String type
        -Int id_attendance
        -Patient patient
        -Float value
        -String payment_method
        -Date payament_date

        +insertPayament() void
        +listPayament() List~Payament~
    }
    
    class MedicalRecord{
        -Int id
        -List~Appointment~ appointment_historic
        -List~Exam~ exam_historic
        -Patient patient

        +insertMedicalRecord() void
        +getMedicalRecord() MedicalRecord
        +updateMedicalRecord() MedicalRecord
        +deleteMedicalRecord() MedicalRecord
        +listMedicalRecord() List~MedicalRecord~
    }
    
    class Diagnosis{
        -Int id
        -Doctor doctor
        -Patient patient
        -Appointment appointment
        -String description
        -String Illness

        +insertDiagnosis() void
        +getDiagnosis() Diagnosis
        +updateDiagnosis() Diagnosis
        +listMedicalRecord() List~Diagnosis~
    }

    class Doctor{
        -Int id
        -String name
        -String crm
        -String phone
        -String email
        -String username
        -String password

        +insertDoctor() void
        +getDoctor() Doctor
        +updateDoctor() Doctor
        +deleteDoctor() Doctor
        +listDoctor() List~Doctor~
    }

    class Patient{
        -Int id
        -String name
        -String cpf
        -String phone
        -String email
        -String username
        -String password

        +insertPatient() void
        +getPatient() Patient
        +updatePatient() Patient
        +deletePatient() Patient
        +listPatient() List~Patient~
    }
    
    Recepcionist "1" -->  "0..*" Appointment: Marca
    Recepcionist "1" -->  "0..*" Exam: Marca
    Doctor  --*  Appointment:Realiza
    Doctor  --*  Exam: Realiza
    Doctor  --*  Diagnosis: Fornece
    Patient  --*  Appointment: Participa
    Patient  --*  Exam: Participa
    Patient  "1" -->  "0..*"  Payament: Contém
    Patient  "1" -->  "1"  MedicalRecord: Contém
    Patient  "1" -->  "1"  Diagnosis: Contém
   

```

## Descrição das Entidades

| Entidade      | Descrição                                               |
|---------------|---------------------------------------------------------|
| Recepcionist  | Entidade concreta que representa um(a) recepcionista    |
| Patient       | Entidade que representa o(a) Paciente                   |
| Doctor        | Entidade que representa o(a) Médico(a)                  |
| Appointment   | Entidade que representa a consulta                      |
| Exam          | Entidade que representa o exame                         |
| Payament      | Entidade que representa o pagamento de consultas/exames |
| MedicalRecord | Entidade que representa o prontuário do paciente        |
| Diagnosis     | Entidade que representa o diagnóstico do paciente       |

## Modelo de Dados (Entidade-Relacionamento)

```mermaid
erDiagram
    Recepcionist ||--o{ Appointment : register
    Recepcionist ||--o{ Exam : register
    Doctor ||--o{ Appointment : conducts
    Patient ||--o{ Appointment : participates
    Patient ||--o{ Exam : participates
    Patient ||--o{ Payament : have
    Patient ||--o{ MedicalRecord : have
    MedicalRecord ||--o{ Appointment : have
    MedicalRecord ||--o{ Exam : have
    Doctor ||--o{ Exam : requests
```
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
| cpf           | representa o cpf do(a) paciente                              | VARCHAR      | 11      | Unique / Not Null     |
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
| patient       | representa o id do(a) paciente que participou da consulta    | VARCHAR      | 11      | FK                    |
| doctor        | representa o id do médico(a) que participou da consulta      | INT          | ---     | FK                    |

### Exam
|   Tabela   | Exam                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do exame que o paciente deve realizar.                    |

|  Nome         | Descrição                                                    | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ------------------------------------------------------------ | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD                               | INT          | ---     | PK / Identity         |
| title         | representa o nome do exame                                   | VARCHAR      | 50      | Not Null              |
| description   | representa a descrição do exame, os detalhes                 | VARCHAR      | 500     | Not Null              |
| patient       | representa o cpf do(a) paciente que realizou o exame         | VARCHAR      | 11      | FK                    |
| doctor        | representa o crm do médico(a) que solicitou o exame          | INT          | ---     | FK                    |

### Payament
|   Tabela   | Payament                                                                               |
| ---------- | -------------------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do pagamento que o paciente deve realizar.                     |

|  Nome           | Descrição                                                              | Tipo de Dado | Tamanho | Restrições de Domínio |
| --------------- | ---------------------------------------------------------------------- | ------------ | ------- | --------------------- |
| id              | identificador gerado pelo SGBD                                         | INT          | ---     | PK / Identity         |
| type            | representa se é pagamento de consulta ou exame                         | VARCHAR      | 8       | Not Null              |
| id_attendance   | representa o id da consulta ou do exame a qual o pagamento se refere   | VARCHAR      | 500     | Not Null              |
| patient         | representa o cpf do(a) paciente que realizou o pagamento               | VARCHAR      | 11      | FK                    |
| value           | representa o valor que o paciente deve pagar                           | FLOAT        | ---     | Not Null              |
| payament_method | representa o metodo de pagamento que o paciente utilizou               | VARCHAR      | 20      | Not Null              |
| payament_date   | representa a data do pagamento                                         | DATE         | ---     | Not Null              |

### MedicalRecord
|   Tabela   | MedicalRecord                                                                          |
| ---------- | -------------------------------------------------------------------------------------- |
| Descrição  | Armazena as informações do prontuário do paciente                                      |

|  Nome                | Descrição                                                              | Tipo de Dado | Tamanho | Restrições de Domínio |
| -------------------- | ---------------------------------------------------------------------- | ------------ | ------- | --------------------- |
| id                   | identificador gerado pelo SGBD                                         | INT          | ---     | PK / Identity         |
| appointment_historic | representa o histórico de consultas do paciente                        | APPOINTMENT  | ---     | FK                    |
| exam_historic        | representa o histórico de exames do paciente                           | EXAM         | ---     | FK                    |
| patient              | representa o cpf do(a) paciente                                        | VARCHAR      | 11      | FK                    |

