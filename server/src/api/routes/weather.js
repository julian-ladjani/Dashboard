'use strict';

module.exports = function(router) {
    const weather = require('../controllers/weather');

    // Weather Routes
    router
        .get('/weather/current', weather.get_current);
};