'use strict';

const _ = require('lodash');
const request = require('request');

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'autologin') || params.autologin == null)
        return false;
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + params.autologin + '/user?format=json',
            function(err, responce, body) {
                if (err) {
                    reject(false);
                    return false;
                }
                let intraObj = JSON.parse(body);
                let user = {
                    'title': intraObj.title,
                    'login': intraObj.login,
                    'picture': intraObj.picture,
                    'credits': intraObj.credits,
                    'gpa': intraObj.gpa,
                    'log': intraObj.nsstat
                };
                resolve(user);
            })
    })
};