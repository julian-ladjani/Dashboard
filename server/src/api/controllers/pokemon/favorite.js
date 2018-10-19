'use strict';

const _ = require('lodash');

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();
const pokemon = require('pokemon');

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'shiney') || !_.hasIn(params, 'pokemon') || !_.hasIn(params, 'language'))
        return false;
    return new Promise(function (resolve, reject) {
        Pokedex.getPokemonByName(params.pokemon) // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                var sprites = [response.sprites.front_default, response.sprites.front_shiny];
                var tmp = {
                    'pokemon': {
                        name: pokemon.getName(response.game_indices[0].game_index, params.language),
                        sprites: sprites[params.shiney]
                    }
                };
                reject(tmp);
            })
    })
};

exports.setWidgetParams = function(req) {
    let params = {};
    widgetSetter.setParamIfExist(params, 'pokemon', req, 'body.pokemon');
    widgetSetter.setParamIfExist(params, 'language', req, 'body.language');
    widgetSetter.setParamIfExist(params, 'shiney', req, 'body.shiney');
    return params;
};