'use strict';

const router = require('express').Router();
const jwt = require('../../controllers/auth/jwtAuth');
const widgetSender = require('../../controllers/widget/sender');
const currentWeatherModel = require('../../models/weather/current');
const current = require('../../controllers/Weather/current');

// Weather Routes

router
    .get('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetsByModel(req, res, currentWeatherModel, current.getWidgetInfo);
    })
    .post('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetSetterResult(req, res, currentWeatherModel, current.setWidgetParams);
    });

router
    .get('/:uniqueId', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetByUniqueId(req, res, currentWeatherModel, current.getWidgetInfo);
    });


router
    .post('/:uniqueId/params', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetSetterResult(req, res, currentWeatherModel, current.setWidgetParams);
    });

module.exports = router;
