'use strict';

let widgets = {
    weather: {
        name: "weather",
        current: {
            name: 'current',
            description: 'Daily weather',
            controller: require('../controllers/weather/current'),
            model: require('../models/weather/current'),
        },
        forecast: {
            name: 'forecast',
            description: 'Weekly weather',
            controller: require('../controllers/weather/forecast'),
            model: require('../models/weather/forecast'),
        },
    },
    pokemon: {
        name: 'pokemon',
        favorite: {
            name:'favorite',
            description: 'My favorite pokemon',
            controller:require('../controllers/pokemon/favorite'),
            model:require('../models/pokemon/favorite'),
        },
        blind: {
            name: 'blind',
            description: 'Blindtest pokemon',
            controller:require('../controllers/pokemon/blind'),
            model:require('../models/pokemon/blind'),
        },
        type: {
            name: 'type',
            description: 'Type of pokemon',
            controller:require('../controllers/pokemon/type'),
            model:require('../models/pokemon/type'),
        }
    }
};

module.exports = widgets;