'use strict';

const currentWeatherModel = require('../../models/weather/current');
const getAll = require('../../controllers/general/getAll');
const _ = require('lodash');

const Weather = require('weather-js');

const getCurrentWeather = (params) => {
    if (!_.hasIn(params, 'city') || !_.hasIn(params, 'country'))
        return false;
    return new Promise(function (resolve, reject) {
        Weather.find({search: params.city + "," + params.country, degreeType: 'C'}, function (err, response) {
            if (err)
                reject(false);
            resolve(response[0].current);
        })
    })
};

exports.sendWidget = async function (req, res) {
    if (!_.hasIn(req, 'params.uniqueId')) {
        res.json({success: false});
        return false
    }
    try {
        const widget = await getAll.getWidgetByUniqueId(req, req.params.uniqueId,
            currentWeatherModel, getCurrentWeather);
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

exports.sendWidgets = async function (req, res) {
    try {
        const widget = await getAll.getWidgetsWithModel(req, currentWeatherModel, getCurrentWeather);
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
    let newCurrentWeather = new currentWeatherModel();
    newCurrentWeather.params.city = req.body.city;
    newCurrentWeather.params.country = req.body.country;
    newCurrentWeather.params.timer = req.body.timer;
    newCurrentWeather.user.id = req.user._id;
    newCurrentWeather.save();
    res.json({success: true});
};