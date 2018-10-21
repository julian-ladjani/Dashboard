'use strict'

const Pokemon = require('./favorite');
const _ = require('lodash');



exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'pokemon1') || !_.hasIn(params, 'pokemon2') || !_.hasIn(params, 'pokemon3')
        || !_.hasIn(params, 'pokemon4') || !_.hasIn(params, 'pokemon5') || !_.hasIn(params, 'pokemon6')
        || !_.hasIn(params, 'shiny'))
        return false;
    let shiney = params.shiny <= 0 || params.shiny > 1 ? 0 : params.shiny;
    let team;
    try {
        team = [await Pokemon.getWidgetInfo({'pokemon': params.pokemon1, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.pokemon2, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.pokemon3, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.pokemon4, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.pokemon5, 'shiny': shiney}),
            await Pokemon.getWidgetInfo({'pokemon': params.pokemon6, 'shiny': shiney})];
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