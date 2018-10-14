'use strict';

const Weather = require('weather-js');

exports.get_current = function(req, res) {
    Weather.find({search: req.params.city+","+req.params.land, degreeType: 'C'}, function(err, response) {
        if(err) console.log(err);
        res.send(JSON.stringify(response[0].current, 4));
    });
};

exports.get_forecast = function(req, res) {
    Weather.find({search: req.params.city+","+req.params.land, degreeType: 'C'}, function(err, response) {
        if(err) console.log(err);
        res.send(JSON.stringify(response[0].forecast, 4));
    });
};

exports.get_test = function(req, res) {
    Weather.find({search: 'Nancy, FR', degreeType: 'C'}, function(err, response) {
        if(err) console.log(err);

        res.send(JSON.stringify(response, 4));
    });
};