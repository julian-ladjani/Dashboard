'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let weatherCurrent = mongoose.Schema({
    user: {
        id: String,
    },
    params: {
        timer: Number,
        city: String,
        country: String,
    }
});

module.exports.getServiceName = function getName() {
    return 'weather'
};

module.exports.getName = function getName() {
    return 'current'
};

module.exports = mongoose.model('weatherCurrent', weatherCurrent);