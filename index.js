//Ele deixa o JS mais rígido, não aceitando práticas ruins.
'use strict';

//Declarar as dependências do arquivo
//Se for uma past nossa ./(Coloca caminho)
//Se não só passar ''(aspas simples);
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Primeira aplicação com Node.Js</h1>');
});

//Definir a porta que o servidor vai escutar
const port = 1234;

//Configurando o servidor para escutar a porta definida.
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});