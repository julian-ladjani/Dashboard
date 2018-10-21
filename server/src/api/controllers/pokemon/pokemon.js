'use strict'

const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();

exports.getWidgetInfo = async function() {
    return new Promise(function (resolve, reject) {
        Pokedex.resource('api/v2/pokemon') // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                try {
                    let tmp = [];
                    for(let i = 0; i < 802; i++)
                        tmp.push(response.results[i].name);
                    resolve(tmp);
                }
                catch (e) {
                    resolve(false);
                }

            }).catch(function () {
            reject(false);})
    })
};