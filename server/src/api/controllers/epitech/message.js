'use strict';

const _ = require('lodash');
const request = require('request');


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