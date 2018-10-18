'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    city: String,
    country: String,
};
let schema = schemaSetter.setModelSchema(params);
let weatherForecast = mongoose.Schema(schema);
module.exports = mongoose.model('weatherForecast', weatherForecast);