'use strict';

const router = require('express').Router();
const jwt = require('../../controllers/auth/jwtAuth');
const widgetSender = require('../../controllers/widget/sender');
const widgetSetter = require('../../controllers/widget/setter');
const forecastWeatherModel = require('../../models/weather/forecast');
const forecast = require('../../controllers/Weather/forecast');

// Weather Routes

router
    .get('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetsByModel(req, res, forecastWeatherModel, forecast.getWidgetInfo);
    })
    .post('/', jwt.requireAuth, function (req, res) {
        if (widgetSetter.addWidget(req, forecastWeatherModel, forecast.setWidgetParams))
            res.send({success: true});
        else
            res.send({success: false});
    });

router
    .get('/:uniqueId', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetByUniqueId(req, res, forecastWeatherModel, forecast.getWidgetInfo);
    });


router
    .post('/:uniqueId/params', jwt.requireAuth, async function (req, res) {
        if (await widgetSetter.updateWidgetParams(req, forecastWeatherModel, forecast.setWidgetParams))
            res.send({success: true});
        else
            res.send({success: false});
    });

module.exports = router;
