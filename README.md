# PP-Projecto
Projecto para uma disciplina chamada Práticas de Programação na Universidade UNIFACISA. Projecto utilizando Reacção com Redux e NodeJS(Express) e MongoDB.

## Requisitos

* Node
* Docker

## Instalação com Docker-compose

* `git clone https://github.com/Guilhermekmp/React-Node-Project.git`
* `docker-compose build`
* `docker-compose up -d`

## Instalação sem Docker-compose

* `git clone https://github.com/Guilhermekmp/React-Node-Project.git`
* `cd restaurante-back`
* `npm install`
* `cd restaurante`
* `npm install`

## Aplicações em modo de desenvolvimento

* `cd restaurante-back`
* `npm run dev`
* `cd restaurante`
* `npm start`

## Endpoints

* POST/GET `http://url:port/api/v1/products` -> Recebe ou cria um produto
* GET `http://url:port/api/v1/products/ID` -> Recebe um produto
* GET `http://url:port/api/v1/orders`   -> Recebe todas as encomendas
* PUT `http://url:port/api/v1/kitchen`  -> Atualizar o status de todas as encomendas
