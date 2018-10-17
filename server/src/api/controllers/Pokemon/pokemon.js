'use strict';

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();
const pokemon = require('pokemon');

exports.auth = function(req,res) {
};

exports.getPokemon = function(req, res) {
    var index = req.params.shiney === undefined ? 0 : req.params.shiney;
    Pokedex.getPokemonByName(req.params.poke) // with Promise
        .then(function(response) {
            var sprites = [response.sprites.front_default, response.sprites.front_shiny];
            var tmp = {'pokemon':{name:pokemon.getName(response.game_indices[0].game_index,req.params.lang),
                    sprites:sprites[index]}};
            res.send(tmp);
        });
};

exports.getBlind = function(req, res) {
    var indexSprite = req.params.shiney === undefined ? 0 : req.params.shiney;
    var indexGen = req.params.gen === undefined ? 802 : req.params.gen;
    var indexLang = req.params.lang === undefined ? 'en' : req.params.lang;
    Pokedex.getPokemonByName(parseInt(Math.random()*indexGen+1)) // with Promise
        .then(function(response) {
            var sprites = [response.sprites.front_default, response.sprites.front_shiny];
            var tmp = {'pokemon':{name:pokemon.getName(response.game_indices[0].game_index, indexLang),
                    sprites:sprites[indexSprite]}, 'time':10};
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