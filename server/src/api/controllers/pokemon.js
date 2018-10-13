'use strict';

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();

exports.get_random_pokemon = function(req, res) {
    Pokedex.getPokemonByName(parseInt(Math.random()*801+1)) // with Promise
        .then(function(response) {
            res.send("<img src='"+response.sprites.front_shiny+"'>"+"<h1>"+response.forms[0].name+"</h1>");
        })
};