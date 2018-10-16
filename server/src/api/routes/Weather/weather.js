'use strict';

const router = require('express').Router();
const weather = require('../../controllers/Weather/weather');
    // Weather Routes
    router
        .get('/current/:land/:city', weather.get_current);
    router
        .get('/forecast/:land/:city', weather.get_forecast);
    router
        .get('/test', weather.get_test);
module.exports = router;

