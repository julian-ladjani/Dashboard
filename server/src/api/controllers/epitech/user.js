'use strict';

const _ = require('lodash');
const request = require('request');

//auth-903de501f139b854ec9a5d39acda40649574d60e
exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'auth') || !_.hasIn(params, 'login'))
        return false;
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + params.auth + '/user/' + params.login + '/notes?format=json'
            , function (err, responce, body) {
            if (err)
                reject(err);
            console.log(body);
            resolve(responce);
        })
    })
    };