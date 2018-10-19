'use strict'

const _ = require('lodash');
const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();

exports.getWidgetInfo = function(param) {
    if (!_.hasIn(params, 'type'))
        return false;
    return new Promise(function (resolve, reject) {
        Pokedex.getTypeByName(params.type) // with Promise
            .then(function (response, err) {
                if (err)
                    reject(false);
                reject(response.damage_relations);
            })
    })
};

exports.setWidgetParams = function (req) {
    let params = {};
    widgetSetter.setParamIfExist(params, 'current', req, 'body.type');
    return params;
};