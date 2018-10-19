'use strict';

const _ = require('lodash');

const widgetGlobalParams = {
    user: {
        id: String,
    },
    params: {
        timer: {type: Number, default: 0},
        grid: {
            cols: {type: Number, default: 1},
            rows: {type: Number, default: 1},
            y: {type: Number, default: 0},
            x: {type: Number, default: 0},
        },
    }
};

exports.setModelSchema = function (params) {
    let schema = widgetGlobalParams;
    _.merge(schema, {params: params});
    return schema;
};