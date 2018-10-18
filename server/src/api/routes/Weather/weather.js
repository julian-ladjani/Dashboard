'use strict';

const router = require('express').Router();
const weather = require('../../controllers/Weather/weather');
const currentRouter = require('./current');
const forecastRouter = require('./forecast');
const jwt = require('../../controllers/auth/jwtAuth');
const widgetSender = require('../../controllers/widget/sender');

// Weather Routes
router
    .get('/', jwt.requireAuth, function (req, res) {
        widgetSender.sendWidgetsByService(req, res, weather.widgetGetter);
    });

router.use('/current', currentRouter);
router.use('/forecast', forecastRouter);

module.exports = router;

