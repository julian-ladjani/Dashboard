'use strict';

const router = require('express').Router();
const jwt = require('../../controllers/auth/jwtAuth');
const widgetSender = require('../../controllers/widget/sender');
const forecastWeatherModel = require('../../models/weather/forecast');
const forecast = require('../../controllers/Weather/forecast');

// Weather Routes

router
    .get('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetsByModel(req, res, forecastWeatherModel, forecast.getWidgetInfo);
    })
    .get('/:uniqueId', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetByUniqueId(req, res, forecastWeatherModel, forecast.getWidgetInfo);
    })
    .post('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetSetterResult(req, res, forecastWeatherModel, forecast.setWidgetParams);
    })
    .post('/:uniqueId/params', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetSetterResult(req, res, forecastWeatherModel, forecast.setWidgetParams);
    });

module.exports = router;
