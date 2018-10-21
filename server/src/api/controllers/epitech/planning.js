'use strict'

const _ = require('lodash');
const request = require('request');
const moment = require('moment');

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'autologin') || params.autologin == null || !_.hasIn(params, 'begin')
        || !_.hasIn(params, 'days') || !_.hasIn(params, 'semester'))
        return false;
    if (Date(params.begin) < Date())
        params.begin = moment().format('YYYY-MM-DD');
    params.days = params.days < 0 ? 0 : params.days;
    let end = moment(params.begin).add(params.days, 'days').format('YYYY-MM-DD');
    if (params.semester.length === 0)
        params.semester.push(0);
    return new Promise(function (resolve, reject) {
        request('https://intra.epitech.eu/' + params.autologin + '/planning/load?start=' + params.begin + '&end='
            + end + '&format=json',
            function (err, responce, body) {
                if (err) {
                    reject(false);
                    return false;
                }
                let intraObj = JSON.parse(body);
                if (intraObj === undefined || intraObj === {}) {
                    reject(false);
                    return(false);
                }
                let planning = Object.values(intraObj).filter(
                    el => params.semester.find(function(x) {
                    return (el.semester === x || el.semester === 0);})
                );
                resolve(planning);
            })
    })
};