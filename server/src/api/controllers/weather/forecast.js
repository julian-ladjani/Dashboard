'use strict';

const _ = require('lodash');

const Weather = require('weather-js');

exports.getWidgetInfo = async function (params) {
    if (!_.hasIn(params, 'city') || !_.hasIn(params, 'country'))
        return false;
    return new Promise(function (resolve, reject) {
        Weather.find({search: params.city + "," + params.country, degreeType: 'C'}, function (err, response) {
            if (err)
                reject(false);
            try {
                resolve(response[0].forecast);
            }
            catch (e) {
                resolve(false);
            }
        })
    })
};