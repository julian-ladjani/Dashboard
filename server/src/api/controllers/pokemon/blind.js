'use strict';

const _ = require('lodash');

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();
const pokemon = require('pokemon');

const max_generation = [0, 150, 250, 385, 492, 648, 720, 802];
const min_generation = [0, 1, 152, 252, 387, 494, 650, 722];
let rand = 0;
let lang = 'en';
let shiney = 0;
let timer = 5;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkParams(params) {
    if (!_.hasIn(params, 'min_generation') || !_.hasIn(params, 'max_generation') || !_.hasIn(params, 'language')
        || !_.hasIn(params, 'shiney') || !_.hasIn(params, 'time'))
        return false;
    const max_gen = params.max_generation <= 0 || params.max_generation > 7 ? 7 : params.max_generation;
    const min_gen = params.min_generation <= 0 || params.min_generation > 7 ? 1 : params.min_generation;
    rand = max_gen > min_gen ? getRandomInt(min_generation[min_gen], max_generation[max_gen])
        : getRandomInt(min_generation[max_gen] + max_generation[min_gen]);
    lang = pokemon.languages.has(params.language) ? params.language : 'en';
    shiney = params.shiney <= 0 || params.shiney > 1 ? 0 : params.shiney;
    timer = params.time < 0 ? 5 : params.time;
    return true;
}

exports.getWidgetInfo = async function(params) {
        if (!checkParams(params))
            return false;
    return new Promise(function (resolve, reject) {
        Pokedex.getPokemonByName(rand) // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                var sprites = [response.sprites.front_default, response.sprites.front_shiny];
                var tmp = {
                    'pokemon': {
                        name: pokemon.getName(response.game_indices[0].game_index, lang),
                        sprites: sprites[shiney]
                    }, 'time': timer
                };
                resolve(tmp);
            })
    })
};