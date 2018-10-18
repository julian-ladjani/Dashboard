'use strict';

const widgetGetter = require('../../controllers/widget/getter');
const widgetAbout = require('../../controllers/widget/about');
const currentWeatherModel = require('../../models/weather/current');
const forecastWeatherModel = require('../../models/weather/forecast');
const currentWidgetController = require('./current');
const forecastWidgetController = require('./forecast');

exports.widgetGetter = async function (req) {
    let currentWidget = await widgetGetter.getWidgetsByModel(req, currentWeatherModel,
        currentWidgetController.getWidgetInfo);
    let forecastWidget = await widgetGetter.getWidgetsByModel(req, forecastWeatherModel,
        forecastWidgetController.getWidgetInfo);
    if (currentWidget === false)
        return false;
    return {
        'current': currentWidget,
        'forecast': forecastWidget,
    }
};

exports.about = function () {
    let widgets = [];
    widgets.push(widgetAbout.getWidgetAbout('current', 'daily weather', currentWeatherModel));
    widgets.push(widgetAbout.getWidgetAbout('forecast', 'weekly weather', forecastWeatherModel));
    return widgets;
};