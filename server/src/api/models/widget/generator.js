'use strict';
const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

module.exports = function (modelName, widgetParams) {
    if (widgetParams === undefined || modelName === undefined)
        return false;
    let schema = schemaSetter.setModelSchema(widgetParams);
    let weatherCurrent = mongoose.Schema(schema);
    return mongoose.model(modelName, weatherCurrent);
};