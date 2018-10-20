'use strict';

const _ = require('lodash');
const request = require('request');

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

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'auth') || !_.hasIn(params, 'login'))
        return false;
    let login = await getLogin(params.autologin);
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + params.auth + '/user/' + login + '/notes?format=json'
            , function (err, responce, body) {
            if (err)
                reject(err);
            resolve(responce);
        })
    })
    };