'use strict';

let widgets = {
    weather: {
        name: "weather",
        current: {
            name: 'current',
            description: 'Daily Weather',
            controller: require('../controllers/Weather/current'),
            model: require('../models/weather/current'),
        },
        forecast: {
            name: 'forecast',
            description: 'Weekly Weather',
            controller: require('../controllers/Weather/forecast'),
            model: require('../models/weather/forecast'),
        },
    }
};

module.exports = widgets;