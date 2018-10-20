'use strict';

const _ = require('lodash');

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();

let shiney = 0;

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'shiny') || !_.hasIn(params, 'pokemon'))
        return false;
    shiney = params.shiny <= 0 || params.shiny > 1 ? 0 : params.shiny;
    return new Promise(function (resolve, reject) {
        Pokedex.getPokemonByName(params.pokemon.toLowerCase()) // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                const sprites = [response.sprites.front_default, response.sprites.front_shiny];
                try {
                    const tmp = {
                        'name': response.forms[0].name,
                        'sprite': sprites[shiney]
                    };
                    resolve(tmp);
                }
                catch (e) {
                    console.log(e);
                    resolve(false);
                }

            })
            .catch(function () {
                reject(false);
            })
    })
};