'use strict';

const _ = require('lodash');

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();
const pokemon = require('pokemon');

let lang = 'en';
let shiney = 0;

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'shiney') || !_.hasIn(params, 'pokemon') || !_.hasIn(params, 'language'))
        return false;
    lang = pokemon.languages.has(params.language) ? params.language : 'en';
    shiney = params.shiney <= 0 || params.shiney > 1 ? 0 : params.shiney;
    return new Promise(function (resolve, reject) {
    try {pokemon.getId(params.pokemon)}catch(e){resolve(false)}
        Pokedex.getPokemonByName(params.pokemon) // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                const sprites = [response.sprites.front_default, response.sprites.front_shiny];
                try {
                    const tmp = {
                        'name': pokemon.getName(response.game_indices[0].game_index, lang),
                        'sprite': sprites[shiney]
                    };
                    resolve(tmp);
                }
                catch (e) {
                    resolve(false);
                }

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