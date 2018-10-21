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
    if (!_.hasIn(params, 'autologin') || params.autologin == null || !_.hasIn(params, 'partner'))
        return false;
    if (params.partner <= 0)
        params.partner = 3;
    const login = await getLogin(params.autologin);
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + params.autologin + '/user/'+login+'/partner?format=json',
            function (err, responce, body) {
                if (err)
                    reject(err);
                let json = JSON.parse(body).partners.slice(0, params.partner);
                resolve(json);
            })
    })
};