'use strict';

const _ = require('lodash');
const nasa = require('nasa-sdk');
const apiKeys = require('../../config/apiKeys');

exports.getRoverList = async function () {
    return [
        'Curiosity',
        'Opportunity',
        'Spirit'
    ]
};

exports.getCameraList = async function () {
    return [
        'FHAZ',
        'RHAZ',
        'MAST',
        'CHEMCAM',
        'MAHLI',
        'MARDI',
        'NAVCAM',
        'PANCAM',
        'MINITES'
    ]
};

exports.getWidgetInfo = async function (params) {
    if (!_.hasIn(params, 'martianDay') || !_.hasIn(params, 'rover') || !_.hasIn(params, 'camera') ||
        !_.hasIn(params, 'page'))
        return false;
    if (params.page < 0)
        params.page = 0;
    if (params.sol < 0)
        params.sol = 0;
    nasa.setNasaApiKey(apiKeys.nasa.apiKey);
    let options = {
        sol: params.martianDay,
        page: params.page,
        camera: params.camera.toLowerCase()
    };
    return await nasa.MarsPhotos
        .fetch(params.rover.toLowerCase(), options)
        .then(function (value) {
            return value;
        })
        .catch(function (err) {
            return false
        });
};