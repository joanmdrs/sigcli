# Documento de Visão

Documento construído a partido do Modelo BSI - Doc 001 - Documento de Visão que pode ser encontrado no link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Equipe e Definição de Papéis

| Membro          | Papel    | E-mail                         |
| --------------- | -------- | ------------------------------ |
| Allan Almeida   | Analista | allan.oliveira.110@ufrn.edu.br |
| Adson Santos    | Analista | adson.matheus.016@ufrn.edu.br  |
| Joan Medeiros   | Gerente  | joan.medeiros.130@ufrn.edu.br  |
| Rauan Meirelles | Analista | rauan.araujo.711@ufrn.edu.br   |
| Wesley Morais   | Analista | wesleydemorais@outlook.com.br  |

## Matriz de Competências

| Membro          | Competências                                                                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Allan Almeida   | Full-Stack Developer - Python, C, Java, JavaScript, HTML, CSS, React.Js, Node.Js, MySQL, PostgreSQL, Express.Js, API REST, Django   |
| Adson Santos    | Full-Stack Developer - Python, Django, Dart, Flutter, HTML, CSS, JavaScript, Bootstrap                                              |
| Joan Medeiros   | Front-End Developer - HTML, CSS, JavaScript, TypeScript, React.Js, Node.Js, Express.Js, Next.Js, MySQL, NoSQL, Scrum, XP, UX/Design |
| Rauan Meirelles | Back-End Developer - Python, C, HTML, CSS, JavaScript, Next.Js, MySQL                                                               |
| Wesley Morais   | Full-Stack Developer - HTML, CSS, JavaScript, SAAS, JavaScript, React.Js, Node.Js, Python, Django, Ruby, TypeScript, C, Next.Js     |

## Descrição do Projeto

<p align="justify">É sabido que a organização é um dos principais fatores que garantem o bom funcionamento de qualquer estabelecimento, e quando esta questão envolve dados, a mesma se torna 
uma tarefa ainda mais complexa e importante. Dessa forma, a implantação de um sistema que permita a persistência desses dados e realizar interações com estes, configura uma possível solução para este dilema. E foi com esse pensamento que este projeto surgiu, buscando entregar um software capaz de realizar o gerenciamento dos serviços de uma clínica médica, agregando deste a parte de consultas até o controle dos seus clientes (pacientes) e dos seus prestadores de serviços (médicos) ...</p>

## Perfis dos Usuários

O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

Perfil        | Descrição                                                                                                                                             |
------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
Administrador | Este usuário tem acesso a todas as entidades e funcionalidades do sistema, além de ter acesso à base de dados.
Recepcionista | Este usuário tem acesso acesso a todas as funcionalidades de CRUD relativas às entidades: consulta, paciente, médico e exame.
Paciente      | Este usuário pode consultar as informações do seu próprio perfil, assim como visualizar o registro das suas consultas e exames. 
Médico        | Este usuário pode consultar as informações do seu próprio perfil, assim como visualizar o registro das suas consultas. Além disso, o médico tem acesso as funções de CRUD relativas a entidade Exame.

## Requisitos Funcionais

Requisito                         | Descrição   | Ator       |
--------------------------------- | ----------- | ---------- |
RF01 - Inserir Médico             | Um médico possui nome, crm, nome de usuário e senha. | Administrador/Recepcionista
RF02 - Alterar Médico             | A alteração permite a mudança do nome, nome de usuário e senha. | Administrador/Recepcionista
RF03 - Buscar Médico              | A busca é feita com base no Id do médico. | Administrador/Recepcionista
RF04 - Listar Médicos             | Lista todos as instâncias de médico  | Administrador/Recepcionista
RF05 - Excluir Médico             | A exclusão é feita com base no Id do médico | Administrador/Recepcionista
RF06 - Inserir Paciente           | Um paciente possui nome, nome de usuário e senha. | Administrador/Recepcionista
RF07 - Alterar Paciente           | A alteração permite a mudança do nome, nome de usuário e senha. | Administrador/Recepcionista
RF08 - Buscar Paciente            | A busca é feita com base no Id do paciente. | Administrador/Médico/Recepcionista 
RF09 - Listar Pacientes           | Lista todos as instâncias de paciente | Administrador/Médico/Recepcionista
RF10 - Excluir Paciente           | A exclusão é feita com base no Id do paciente | Administrador/Recepcionista
RF11 - Inserir Recepcionista      | Um recepcionista possui nome, nome de usuário e senha. | Administrador
RF12 - Alterar Recepcionista      | A alteração permite a mudança do nome, nome de usuário e senha. | Administrador 
RF13 - Buscar Recepcionista       | A busca é feita com base no Id do recepcionista. | Administrador 
RF14 - Listar Recepcionistas      | Lista todos as instâncias de recepcionista | Administrador
RF15 - Excluir Recepcionista      | A exclusão é feita com base no Id do(a) recepcionista | Administrador 
RF16 - Inserir Consulta           | Uma consulta possui titulo, paciente, médico, data e descrição. | Administrador/Recepcionista 
RF17 - Alterar Consulta           | A alteração permite a mudança do titulo e descrição. | Administrador/Médico/Recepcionista
RF18 - Buscar Consulta            | A busca é feita com base no Id da consulta. | Administrador/Médico/Recepcionista
RF19 - Listar Consultas           | Lista todas as instâncias de consulta | Administrador/Médico/Recepcionista
RF20 - Excluir Consulta           | A exclusão é feita com base no Id da consulta | Administrador/Recepcionista 
RF21 - Inserir Exame              | Um exame possui titulo, paciente, médico, data, descrição e local do exame. | Administrador/Médico/Recepcionista
RF22 - Alterar Exame              | A alteração permite a mudança do titulo, descrição e local do exame. | Administrador/Médico/Recepcionista 
RF23 - Buscar Exame               | A busca é feita com base no Id do exame. | Administrador/Médico/Recepcionista
RF24 - Listar Exames              | Lista todas as instâncias de exame | Administrador/Médico/Recepcionista 
RF25 - Excluir Exame              | A exclusão é feita com base no Id do exame | Administrador/Médico/Recepcionista 
RF26 - Criação da Pagina de Login | Os Médicos, Recepcionistas e pacientes terão acesso a ela através do seu nome de usuário e senha. | Médico/Recepcionista/Paciente

## Requisitos Não-funcionais

Requisito | Descrição  
--------- | -----------
RNF01 | Deve ser acessível via qualquer navegador escolhido pelo usuário
RNF02 | Não deve apresentar erros ao usuário final que estiver usando em tempo real quando o servidor for desativado para possíveis manutenções.
RNF03 | Deve ter confidencialidade, ou seja, apenas usuários que tem permissões de acessar determinadas páginas da aplicação deve acessa-las.
RNF04 | Deve ter integridade, ou seja, os dados que foram adicionados ao banco de dados pela aplicação de uma forma deve ser retornado da mesma forma.

## Riscos do Sistema

Data       | Risco                                      | Prioridade  | Responsável  | Status    | Solução
-----------|--------------------------------------------|-------------|--------------| ----------|---------------------------------------------------
02/05/2022 | Falta de conhecimento das tecnologias      | Alta        | Todos        | Resolvido | Praticar tutoriais, assistir aulas sobre o assunto
02/05/2022 | Má Divisão de Tarefas                      | Média       | Gerente      | Vigente   | Analisar cada tarefa e componente, acompanhar os integrantes nas tarefas e ajudá-los se necessário
02/05/2022 | Atrasos na entrega de tarefas              | Alta        | Todos        | Vigente   | Realizar as tarefas previamente, com antecedência. Dedicar-se um pouco ao projeto todos os dias
02/05/2022 | Não acompanhar o ritmo exigente do cliente | Alta        | Gerente      | Vigente   | Entender exatamente o que o cliente quer a cada iteração, ser realista entre o que entregar e o tempo disponível dos integrantes da equipe

