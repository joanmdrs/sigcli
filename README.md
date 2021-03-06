# Produto para gestão de clínica médica

<img width="300" height="auto" src="./assets/img/image-readme.svg" >

## Sobre o projeto
Este projeto está sendo desenvolvido durante o curso da disciplina Engenharia de Software II ministrada pelo professor Taciano 
no curso de Bacharelado em Sistemas da Informação, pela Universidade Federal do Rio Grande do Norte / CERES - Caicó/RN. 

## Desenvolvedores 

* [Adson Santos](https://github.com/adson-matheus)
* [Allan Almeida](https://github.com/allangbr)
* [Joan Medeiros](https://github.com/joanmdrs)
* [Rauan Meirelles](https://github.com/rauan-meirelles)
* [Wesley Morais](https://github.com/WesleyVitor)

## Protótipo

[![Figma](https://img.shields.io/static/v1?label=Figma&message=Protótipo&color=e75524&style=for-the-badge&logo=figma)](https://www.figma.com/file/yQ4LBk7t10rKTwZchIPjFX/prot%C3%B3tipo---sigcli?node-id=0%3A1)

## Tecnologias utilizadas 

* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
* ![CSS](https://img.shields.io/badge/CSS-1E90FF?&style=for-the-badge&logo=css3&logoColor=white)
* ![React.JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
* ![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
* ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-00000F?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Prisma](https://img.shields.io/badge/Prisma-8A2BE2?style=for-the-badge&logo=prisma&logoColor=white)

## Documentação 

* [Documento de Visão](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-visao.md)
* [Modelo de Dados](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-modelos.md)
* [Plano de Iteração e Release](https://github.com/joanmdrs/sigcli/blob/main/docs/doc-iteracao.md)

## Dependência

[![node-current](https://img.shields.io/node/v/next?label=Node&color=%23339933&style=for-the-badge&logo=node-dot-js)](https://nodejs.org/en/)

## Instalação

Nesta seção você encontra o tutorial de execução do projeto

1. A primeira ação a se tomar é realizar o clone do projeto na sua máquina com o comando:

```console
git clone https://github.com/joanmdrs/sigcli.git
```

### Preparando o Prisma ORM 

2. Dentro da pasta "server", crie o arquivo .env e defina o DATABASEURL da seguinte forma:
 
```console
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb?schema=public"
```

### Executando o Banco de Dados com Docker

3. Criando a network
```console
docker network create -d bridge imd-network
```

4. Criando o container do PostgreSQL 
```console
docker run --name postgres-server -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v $HOME/dev/docker/volumes/postgres/postgresql:/var/lib/postgresql -v $HOME/dev/docker/volumes/postgres/postgresql_data:/var/lib/postgresql/data --network=imd-network -d postgres:latest
```

5. Criando o container do PgAdmin
```console
docker run --name pgadmin-server -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=admin@admin.com" -e "PGADMIN_DEFAULT_PASSWORD=pgadmin" --network=imd-network -d dpage/pgadmin4:latest
```

6. Abrindo o PgAdmin no Browser
```console
localhost:15432
```

7. Instale o docker compose [link](https://docs.docker.com/compose/install/)

8. Rodando as aplicações

```console
docker-compose up

```

## Tutoriais 

### CRUD - Tutorial em inglês
* [CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 1]](https://www.youtube.com/watch?v=T8mqZZ0r-RA)
* [CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 2]](https://www.youtube.com/watch?v=3YrOOia3-mo&list=WL&index=26)
* [CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 3]](https://www.youtube.com/watch?v=_S2GKnFpdtE)

### CRUD - Tutorial em português
* [Crud utilizando React Js, Node e MySQL (simples) pt.1](https://youtu.be/e0He6sCiQT8)
* [Crud utilizando React Js, Node e MySQL (simples) pt.2](https://youtu.be/5_9rvyT9cg4)
* [Crud utilizando React Js, Node e MySQL (simples) pt.3](https://youtu.be/vzPsUWLprAw)

### Tutorial Prisma 
* [Prisma ORM Tutorial for Beginners | CRUD, CreateMany, Associations...](https://www.youtube.com/watch?v=E37-33M6Ypk)


