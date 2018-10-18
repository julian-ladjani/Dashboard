'use strict';

const router = require('express').Router();
const jwt = require('../../controllers/auth/jwtAuth');
const widgetSender = require('../../controllers/widget/sender');
const widgetSetter = require('../../controllers/widget/setter');
const currentWeatherModel = require('../../models/weather/current');
const current = require('../../controllers/Weather/current');

// Weather Routes

router
    .get('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetsByModel(req, res, currentWeatherModel, current.getWidgetInfo);
    })
    .post('/', jwt.requireAuth, function (req, res) {
        if (widgetSetter.addWidget(req, currentWeatherModel, current.setWidgetParams))
            res.send({success: true});
        else
            res.send({success: false});
    });

router
    .get('/:uniqueId', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetByUniqueId(req, res, currentWeatherModel, current.getWidgetInfo);
    });


router
    .post('/:uniqueId/params', jwt.requireAuth, async function (req, res) {
        if (await widgetSetter.updateWidgetParams(req, currentWeatherModel, current.setWidgetParams))
            res.send({success: true});
        else
            res.send({success: false});
    });

module.exports = router;
