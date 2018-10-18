'use strict';

const forecastWeather = require('../../models/weather/forecast');
const getAll = require('../../controllers/widget/getter');
const _ = require('lodash');

const Weather = require('weather-js');

const getForecastWeather = (params) => {
    if (!_.hasIn(params, 'city') || !_.hasIn(params, 'country'))
        return false;
    return new Promise(function (resolve, reject) {
        Weather.find({search: params.city + "," + params.country, degreeType: 'C'}, function (err, response) {
            if (err)
                reject(false);
            resolve(response[0].forecast);
        })
    })
};

const getWidgetParams = (req) => {
    if (!_.hasIn(req, 'user.id') || !_.hasIn(req, 'params.uniqueId'))
        return false;
    return forecastWeather.findOne({'user.id': req.user._id, _id: req.params.uniqueId}).exec();
};

exports.getWidget = async function (req) {
    const forecastWeather = await getWidgetParams(req);
    const infos = await getForecastWeather(forecastWeather.params);
    if (forecastWeather === false)
        return false;
    return {
        'id': forecastWeather._id,
        'params': forecastWeather.params,
        'infos': infos,
    };
};

exports.sendWidget = async function (req, res) {
    try {
        const widget = await exports.getWidget(req);
        if (widget === false)
            res.json({success: false});
        else
            res.json(widget);
    }
    catch (e) {
        res.json({success: false});
    }
    return true;
};

exports.addWidget = function (req, res) {
    let newForecastWeather = new forecastWeather();
    newForecastWeather.params.city = req.body.city;
    newForecastWeather.params.country = req.body.country;
    newForecastWeather.params.timer = req.body.timer;
    newForecastWeather.user.id = req.user._id;
    newForecastWeather.save();
    res.json({success: true});
};
