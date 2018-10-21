'use strict'

const _ = require('lodash');
const request = require('request');

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'autologin') || params.autologin == null || !_.hasIn(params, 'begin')
        || !_.hasIn(params, 'end') || !_.hasIn(params, 'semester'))
        return false;
    if (Date(params.begin) < Date())
        params.begin = moment().format('YYYY-MM-DD');
    if (Date(params.end) < Date())
        params.end = moment().format('YYYY-MM-DD').add('days', 1);
    if (params.semester.length === 0)
        params.semester.push(0);
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + params.autologin + '/planning/load?start=' + params.begin + '&end='
            + params.end + '&format=json',
            function (err, responce, body) {
                if (err)
                    reject(err);
                console.log(body);
                let json = JSON.parse(body);
                resolve(json);
            })
    })
};