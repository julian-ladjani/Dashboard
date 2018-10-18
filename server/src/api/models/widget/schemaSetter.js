'use strict';

const _ = require('lodash');

const widgetGlobalParams = {
    user: {
        id: String,
    },
    params: {
        timer: Number,
        grid: {
            cols: { type: String},
            rows: Number,
            y: Number,
            x: Number,
        },
    }
};

exports.setModelSchema = function (params) {
    let schema = widgetGlobalParams;
    _.merge(schema, {params: params});
    return schema;
};