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

## Requisitos Funcionais

RF01 - Inserir Médico <br>
Descrição: Um médico possui nome, crm, nome de usuário e senha. <br>
Ator: Diretor <br>

RF02 - Alterar Médico <br>
Descrição: A alteração permite a mudança do nome, nome de usuário e senha. <br>
Ator: Diretor <br>

RF03 - Buscar Médico <br>
Descrição: A busca é feita com base no Id do médico. <br>
Ator: Diretor/Recepcionista <br>

RF04 - Listar Médicos <br>
Ator: Diretor/Recepcionista <br>

RF05 - Excluir Médico <br>
Ator: Diretor <br>

RF06 - Inserir Paciente <br>
Descrição: Um paciente possui nome, nome de usuário e senha. <br>
Ator: Médico/Recepcionista <br>

RF07 - Alterar Paciente <br>
Descrição: A alteração permite a mudança do nome, nome de usuário e senha. <br>
Ator: Médico/Recepcionista <br>

RF08 - Buscar Paciente <br>
Descrição: A busca é feita com base no Id do paciente. <br>
Ator: Médico/Recepcionista <br>

RF09 - Listar Pacientes <br>
Ator: Médico/Recepcionista <br>

RF10 - Excluir Paciente <br>
Ator: Médico/Recepcionista <br>

RF11 - Inserir Recepcionista <br>
Descrição: Um recepcionista possui nome, nome de usuário e senha. <br>
Ator: Diretor <br>

RF12 - Alterar Recepcionista <br>
Descrição: A alteração permite a mudança do nome, nome de usuário e senha. <br>
Ator: Diretor <br>

RF13 - Buscar Recepcionista <br>
Descrição: A busca é feita com base no Id do recepcionista. <br>
Ator: Diretor <br>

RF14 - Listar Recepcionistas <br>
Ator: Diretor <br>

RF15 - Excluir Recepcionista <br>
Ator: Diretor <br>

RF16 - Inserir Consulta <br>
Descrição: Uma consulta possui titulo, paciente, médico, data e descrição. <br>
Ator: Médico/Recepcionista <br>

RF17 - Alterar Consulta <br>
Descrição: A alteração permite a mudança do titulo e descrição. <br>
Ator: Médico/Recepcionista <br>

RF18 - Buscar Consulta <br>
Descrição: A busca é feita com base no Id da consulta. <br>
Ator: Médico/Recepcionista <br>

RF19 - Listar Consultas <br>
Ator: Médico/Recepcionista <br>

RF20 - Excluir Consulta <br>
Ator: Médico/Recepcionista <br>

RF21 - Inserir Exame <br>
Descrição: Um exame possui titulo, paciente, médico, data, descrição e local do exame. <br>
Ator: Médico/Recepcionista <br>

RF22 - Alterar Exame <br>
Descrição: A alteração permite a mudança do titulo, descrição e local do exame. <br>
Ator: Médico/Recepcionista <br>

RF23 - Buscar Exame <br>
Descrição: A busca é feita com base no Id do exame. <br>
Ator: Médico/Recepcionista <br>

RF24 - Listar Exames <br>
Ator: Médico/Recepcionista <br>

RF25 - Excluir Exame <br>
Ator: Médico/Recepcionista <br>

RF26 - Criação da Pagina de Login <br>
Descrição: Os Médicos, Recepcionistas e pacientes terão acesso a ela através do seu nome de usuário e senha. <br>
Ator: Médico/Recepcionista/Paciente <br>

## Requisitos Não-funcionais

RNF01 - Deve ser acessível via qualquer navegador escolhido pelo usuário

RNF02 - Não deve apresentar erros ao usuário final que estiver usando em tempo real quando o servidor for desativado para possíveis manutenções.

RNF03 - Deve ter confidencialidade, ou seja, apenas usuários que tem permissões de acessar determinadas páginas da aplicação deve acessa-las.

RNF04 - Deve ter integridade, ou seja, os dados que foram adicionados ao banco de dados pela aplicação de uma forma deve ser retornado da mesma forma.
