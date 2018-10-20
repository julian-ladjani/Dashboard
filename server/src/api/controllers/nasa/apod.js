'use strict';

const _ = require('lodash');
const nasa = require('nasa-sdk');
const apiKeys = require('../../config/apiKeys');


exports.getWidgetInfo = async function (params) {
    if (!_.hasIn(params, 'hd') || !_.hasIn(params, 'date'))
        return false;
    let hdBool = true;
    if (params.hd === 0)
        hdBool = false;
    nasa.setNasaApiKey(apiKeys.nasa.apiKey);
    let options = {
        hd: hdBool,
        date: params.date,
    };
    return await nasa.APOD
        .fetch(options)
        .then(function (value) {
            return value;
        })
        .catch(function () {
            return false
        });
};