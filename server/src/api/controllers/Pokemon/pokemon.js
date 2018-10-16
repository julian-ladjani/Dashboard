'use strict';

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();
const pokemon = require('pokemon');

exports.auth = function(req,res) {
};

exports.getPokemon = function(req, res) {
    Pokedex.getPokemonByName(req.params.poke) // with Promise
        .then(function(response) {
            var tmp = {'pokemon':{name:pokemon.getName(response.game_indices[0].game_index,req.params.lang),
                    sprites:[response.sprites]}};
            res.send(tmp);
        });
};

exports.getBlind = function(req, res) {
    Pokedex.getPokemonByName(parseInt(Math.random()*req.params.gen+1)) // with Promise
        .then(function(response) {
            var tmp = {'pokemon':{name:pokemon.getName(response.game_indices[0].game_index,req.params.lang),
                    sprites:[response.sprites]}, 'time':10};
            res.send(tmp);
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