'use strict'

const _ = require('lodash');
const request = require('request');
const moment = require('moment');

function checkNumber(input) {
    try {
        const array = JSON.parse(input);
        return array.every(x => typeof x === 'number');
    } catch(e) {
        return false;
    }
}

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'autologin') || params.autologin == null || !_.hasIn(params, 'begin')
        || !_.hasIn(params, 'days') || !_.hasIn(params, 'semester'))
        return false;
    if (Date(params.begin) < Date())
        params.begin = moment().format('YYYY-MM-DD');
    params.days = params.days < 0 ? 0 : params.days;
    let end = moment(params.begin).add(params.days, 'days').format('YYYY-MM-DD');
    let semester = params.semester.split(',');
    if (!checkNumber(semester))
        semester = [];
    if (semester.length === 0)
        semester.push(0);
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
                let planning = Object.values(intraObj).filter(function(el) {
                    try {
                        if (semester.find((x) => (el.semester === x || el.semester === 0)) !== undefined)
                            return el;
                    }
                    catch (e) {
                        reject(false);
                    }
                });
                resolve(planning);
            })
    })
};