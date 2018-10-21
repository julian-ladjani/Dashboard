'use strict'

const Pokemon = require('./favorite');
const _ = require('lodash');



exports.getWidgetInfo = async function(params) {
    console.log(params);
    if (!_.hasIn(params, 'p1.name') || !_.hasIn(params, 'p2.name') || !_.hasIn(params, 'p3.name') || !_.hasIn(params, 'p4.name')
        || !_.hasIn(params, 'p5.name') || !_.hasIn(params, 'p6.name') || !_.hasIn(params, 'shiny'))
        return false;
    let shiney = params.shiny <= 0 || params.shiny > 1 ? 0 : params.shiny;
    let team;
    try {
        team = [await Pokemon.getWidgetInfo({'pokemon': params.p1.name, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.p2.name, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.p3.name, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.p4.name, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.p5.name, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.p6.name, 'shiny': shiney})];
    }catch (e) {
        return false;
    }
    return new Promise(function (resolve, reject) {
        try {
            resolve(team.concat());
        }
        catch (e) {
            resolve(false);
        }
    })
};