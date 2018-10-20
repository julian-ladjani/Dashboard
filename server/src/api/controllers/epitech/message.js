'use strict';

const _ = require('lodash');
const request = require('request');

//auth-903de501f139b854ec9a5d39acda40649574d60e

async function getLogin(autologin) {
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + autologin + '/user?format=json',
            function (err, responce, body) {
                if (err)
                    reject(err);
                resolve(JSON.parse(body).login);
            })
    })
}

async function getMessage(autologin, message) {
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + autologin + '/user/notification/'+message+'?format=json',
            function (err, responce, body) {
                if (err)
                    reject(err);
                resolve(body);
            })
    })
}

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'autologin') || !_.hasIn(params, 'message') || params.autologin == null)
        return false;
    if (params.message !== 'coming' && params.message !== 'message'
        && params.message !== 'alert' && params.message !== 'missed')
        params.message = 'message';
    let json = await getMessage(params.autologin, params.message);
    return new Promise(function (resolve, reject) {
            resolve(JSON.parse(json));
        })
    };