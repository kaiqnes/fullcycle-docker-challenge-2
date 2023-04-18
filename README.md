<h1>Full Cycle Challenge - Integrated environment with NGINX, NodeJS and MySQL</h1>
This challenge aims to create an integrated environment dockerized, orchestrated by a docker-compose file that receiving a request, adds a new registry in the DB and returns the updated selection from same table.

<h2>Challenge Requirements</h2>
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

1. Create a docker-compose.yml file to manage the NGINX, NodeJS app and MySQL;

2. The NGINX will provide a reverse proxy to NodeJS application, so when we access nginx default page, it will be redirected to NodeJS app;

3. The App will receive the request, register a new line inside the DB and returns the following response:

```
<h1>Full Cycle Rocks!</h1>

- List with data stored in people's DB table;
```

<h2>Technologies</h2>

This project was developed using the following technologies:

- Docker
- NGINX
- NodeJS
- MySQL

<h2>Requirements</h2>

To run this project, you must have the following installed on your machine:

- Docker

<h2>How to Use</h2>

Clone this repo

Execute the following commands to:

Start the application
```
docker-compose up -d
```

Call the endpoint from NGINX passing a name using query param "name" -> It will saves the informed name in the DB
```
curl http://localhost:8080\?name\={{SOME_NAME}}
```

OR just call the endpoint without nome name -> It will generate a random name to be stored in the DB
```
curl http://localhost:8080
```

Stop the application
```
docker-compose down
```
