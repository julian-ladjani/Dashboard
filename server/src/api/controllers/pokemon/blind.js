'use strict';

const _ = require('lodash');

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();
const pokemon = require('pokemon');

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'genreration') || !_.hasIn(params, 'language') || !_.hasIn(params, 'shiney')
        || !_.hasIn(params, 'time'))
        return false;
    return new Promise(function (resolve, reject) {
        Pokedex.getPokemonByName(parseInt(Math.random() * params.generation + 1)) // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                var sprites = [response.sprites.front_default, response.sprites.front_shiny];
                var tmp = {
                    'pokemon': {
                        name: pokemon.getName(response.game_indices[0].game_index, params.language),
                        sprites: sprites[params.shiney]
                    }, 'time': params.time
                };
                resolve(tmp);
            });
    })
};

exports.setWidgetParams = function(req) {
    if (!_.hasIn(req, 'body.generation') || !_.hasIn(req, 'body.language') || !_.hasIn(req, 'body.shiney')
        || !_.hasIn(req, 'body.timer'))
        return false;
    return {
        generation: req.body.generation,
        language: req.body.language,
        shiney: req.body.shiney,
        time: req.body.time,
    }
};