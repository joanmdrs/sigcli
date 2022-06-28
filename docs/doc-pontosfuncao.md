# Documento Cálculos dos Pontos de Função

## Descrição

Este documento descreve como se deu o cálculo dos pontos de função dos User Stories criados a partir da Lista de Requisitos Funcionais no [Documento de Visão](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-visao.md).

### User Story US01 - Manter Consulta

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir consultas. Uma consulta tem como atributos um título, paciente, doutor, possui uma data e uma descrição. Diagrama de classe disponível [aqui](doc-modelos.md).

| # | Requisitos Envolvidos |
----|---------------------
RF16| Inserir Consulta
RF17| Alterar Consulta
RF18| Buscar Consulta
RF19| Listar Consultas
RF20| Excluir Consulta

#### Cálculo
|#                | Valores |
|-----------------|---------|
|RLR              | Consulta
|DERS             | (titulo, data e descrição)
|ALI              | (Consulta, Paciente, Médico)
|EE               | (Inserir Consulta, Alterar Consulta, Deletar Consulta) 
|CE               | (Buscar Consulta, Listar Consultas)
|ALR              | (Consulta, Paciente, Médico)
|Complexidade Funcional das funções de dados | Baixa
|Complexidade Funcional das funções de Transação | Baixa
|
```
3 ALI * 7 = 21
3 EE * 3 = 9
2 CE * 3 = 6
PF = 21+9+6 = 36
```

### User Story US02 - Manter Paciente

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir pacientes. Um paciente tem como atributos um nome, username e password. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF06 | Inserir Paciente      |
| RF07 | Alterar Paciente      |
| RF08 | Buscar Paciente       |
| RF09 | Listar Pacientes      |
| RF10 | Excluir Paciente      |

#### Cálculo                              

### User Story US03 - Manter Exame

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir exames. Um exame tem como atributos um título, paciente, doutor, possui uma data, além de uma descrição e local do exame. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF21 | Inserir Exame         |
| RF22 | Alterar Exame         |
| RF23 | Buscar Exame          |
| RF24 | Listar Exames         |
| RF25 | Excluir Exame         |

#### Cálculo


### User Story US04 - Manter Médico

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir os médicos. Um médico tem como atributos um nome, um crm, um username, e uma senha. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF06 | Inserir Médico        |
| RF07 | Alterar Médico        |
| RF08 | Buscar Médico         |
| RF09 | Listar Médicos        |
| RF10 | Excluir Médico        |

#### Cálculo


### User Story US05 - Manter Recepcionista

**Descrição:** O sistema deve possuir uma área para inserir, alterar, buscar, listar e excluir os recepcionistas. Um recepcionista tem como atributos um nome, um cpf, um telefone, um email, um username e uma senha. Diagrama de classe disponível [aqui](doc-modelos.md).

| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF11 | Inserir Recepcionista |
| RF12 | Alterar Recepcionista |
| RF13 | Buscar Recepcionista  |
| RF14 | Listar Recepcionista  |
| RF15 | Excluir Recepcionista |

#### Cálculo
|#                | Valores |
|-----------------|---------|
|RLR              | Recepcionista
|DERS             | (nome, cpf, telefone e email)
|ALI              | (Recepcionista)
|EE               | (Inserir Recepcionista, Alterar Recepcionista, Deletar Recepcionista) 
|CE               | (Buscar Recepcionista, Listar Recepcionistas)
|ALR              | (Recepcionista)
|Complexidade Funcional das funções de dados | Baixa
|Complexidade Funcional das funções de Transação | Baixa
|
```
1 ALI * 7 = 7
3 EE * 3 = 9
2 CE * 3 = 6
PF = 7+9+6 = 22
```


### User Story US06 - Manter Diagnóstico

**Descrição:** O sistema deve possuir uma área para inserir, alterar e buscar os diagósticos. Um diagnóstico tem como atributos um paciente, um médico, um problema encontrado e uma descrição. Diagrama de classe disponível [aqui](doc-modelos.md).


| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF16 | Inserir Diagnóstico   |
| RF17 | Alterar Diagnóstico   |
| RF18 | Buscar Diagnóstico    |

#### Cálculo


### User Story US07 - Manter Prontuário

**Descrição:** O sistema deve possuir uma área para inserir, alterar e buscar os prontuários. Um prontuário tem como atributos um histórico de consultas, histórico de exames e o CPF do Paciente. Diagrama de classe disponível [aqui](doc-modelos.md#medicalrecord).


| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF27 | Inserir Prontuário   |
| RF28 | Alterar Prontuário   |
| RF29 | Buscar Prontuário    |
| RF30 | Excluir Prontuário   |
| RF31 | Listar Prontuário   |

#### Cálculo


### User Story US08 - Manter Pagamento

**Descrição:** O sistema deve possuir uma área para inserir, alterar e buscar os pagamentos. Um pagamento tem como atributos: Uma consulta ou exame, um paciente, um médico, um valor, um método de pagamento e uma data de pagamento. Diagrama de classe disponível [aqui](doc-modelos.md).


| #    | Requisitos Envolvidos |
| ---- | --------------------- |
| RF32 | Inserir Pagamento     |
| RF33 | Listar Pagamento      |
 
#### Cálculo
           