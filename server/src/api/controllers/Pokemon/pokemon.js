'use strict';

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();

exports.getRandomPokemon = function(req, res) {
    var gen = req.params.gen;
    Pokedex.getPokemonByName(parseInt(Math.random()*gen+1)) // with Promise
        .then(function(response) {
            var tmp = {form:[response.forms[0]],sprites:[response.sprites]};
            res.send(JSON.stringify(tmp));
        });
};

exports.getTeam = function(req, res) {
    var tmp = {0:[{"name": "bulbasaur"}],
        1:[{"name": "bulbasaur"}],
        2:[{"name": "bulbasaur"}],
        3:[{"name": "bulbasaur"}],
        4:[{"name": "bulbasaur"}],
        5:[{"name": "bulbasaur"}]};
    res.send(JSON.stringify(tmp));
};

exports.getType = function(req, res) {
    Pokedex.getTypeByName(req.params.type) // with Promise
        .then(function(response) {
            res.send(response.damage_relations);
        })
};