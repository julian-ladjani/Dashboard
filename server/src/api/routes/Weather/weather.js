'use strict';

const router = require('express').Router();
const weather = require('../../controllers/Weather/weather');
const currentRouter = require('./current');
const forecastRouter = require('./forecast');
const jwt = require('../../controllers/auth/jwtAuth');

// Weather Routes
/*router
    .get('/', jwt.requireAuth, function (req, res) {
        res.json(weather.getWidgets(req, res));
    });*/


router.use('/current', currentRouter);
//router.use('/forecast', forecastRouter);

module.exports = router;

