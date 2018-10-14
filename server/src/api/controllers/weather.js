'use strict';

const Weather = require('weather-js');

exports.get_current = function(req, res) {
    Weather.find({search: 'Nancy, FR', degreeType: 'C'}, function(err, response) {
        if(err) console.log(err);

        res.send("<h1>"+response[0].current.date+"</h1>"+"<h2>"+response[0].current.temperature+"°C</h2>"
            +"<img src='"+response[0].current.imageUrl+"'>"+"<h1>"+JSON.stringify(response[0].current,2)+"</h1>");
    });
};