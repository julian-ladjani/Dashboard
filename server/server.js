'use strict';

const express = require('express');
const fs = require('fs');
var PokeApi = require('pokedex-promise-v2');
var Pokedex = new PokeApi();

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello world\n');
});

app.get('/about.json', (req, res) => {
  res.header('Content-Type','text/html');
  res.status(200).send("lol");
});

app.get('/poketest', (req, res) => {
  res.header('Content-Type','text/html');
  Pokedex.getPokemonByName(parseInt(Math.random()*801+1)) // with Promise
    .then(function(response) {
      res.status(200).send("<img src='"+response.sprites.front_shiny+"'>"+"<h1>"+response.forms[0].name+"</h1>");
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
