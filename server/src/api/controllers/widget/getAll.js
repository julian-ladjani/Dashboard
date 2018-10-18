'use strict';

const _ = require('lodash');

const widgetAbout = require('./about');
const weatherController = require('../Weather/weather');
const moment = require('moment');

exports.getWidgets = async function (req) {
    let widgets = {};
    const weatherWidgets = await weatherController.widgetGetter(req);
    _.merge(widgets, {weather: weatherWidgets});
    //widgets.weather = weatherWidgets;
    return widgets;
};

exports.getAbouts = async function (req) {
    let services = [];
    services.push(widgetAbout.getServiceAbout('weather', weatherController.about));
    return {
        client: {
            host: req.ip
        },
        server: {
            current_time: moment().unix(),
            services: services,
        }
    }
};