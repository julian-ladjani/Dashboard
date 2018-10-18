'use strict';

const widgetGetter = require('./getter');
const _ = require('lodash');

exports.sendWidgetByUniqueId = async function (req, res, model, infoFunc) {
    if (!_.hasIn(req, 'params.uniqueId')) {
        res.json({success: false});
        return false
    }
    try {
        const widget = await widgetGetter.getWidgetByUniqueId(req, req.params.uniqueId,
            model, infoFunc);
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

exports.sendWidgetsByModel = async function (req, res, model, infoFunc) {
    try {
        const widgets = await widgetGetter.getWidgetsByModel(req, model, infoFunc);
        if (widgets === false)
            res.json({success: false});
        else
            res.json(widgets);
    }
    catch (e) {
        res.json({success: false});
    }
    return true;
};