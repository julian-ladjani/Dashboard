'use strict';

const _ = require('lodash');

const weatherController = require('../Weather/weather');

exports.getWidgets = async function (req) {
    let widgets = {};
    const weatherWidgets = await weatherController.widgetGetter(req);
    _.merge(widgets, {weather : weatherWidgets});
    //widgets.weather = weatherWidgets;
    return widgets;
};