'use strict';

const widgetGetter = require('./getter');
const widgetSetter = require('./setter');
const widgetDeletter = require('./deleter');
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
            res.json({id: req.params.uniqueId, success: false});
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

exports.sendWidgets = async function (req, res) {
    try {
        const widgetsObj = await widgetGetter.getWidgets(req);
        if (widgetsObj === false)
            res.json({success: false});
        else
            res.json(widgetsObj);
    }
    catch (e) {
        res.json({success: false});
    }
    return true;
};

exports.sendWidgetsId = async function (req, res) {
    try {
        const widgetsObj = await widgetGetter.getWidgetsId(req);
        if (widgetsObj === false)
            res.json({success: false});
        else
            res.json(widgetsObj);
    }
    catch (e) {
        res.json({success: false});
    }
    return true;
};

exports.sendWidgetsByService = async function (req, res, serviceObj) {
    try {
        const widgetsObj = await widgetGetter.getServiceWidget(req, serviceObj);
        if (widgetsObj === false)
            res.json({success: false});
        else
            res.json(widgetsObj);
    }
    catch (e) {
        res.json({success: false});
    }
    return true;
};

exports.sendWidgetSetterResult = async function (req, res, model) {
    let widgetSetterFunc;
    if (_.hasIn(req, 'params.uniqueId'))
        widgetSetterFunc = widgetSetter.updateWidgetParams;
    else
        widgetSetterFunc = widgetSetter.addWidget;
    try {
        const result = await widgetSetterFunc(req, model);
        res.json(result);
    }
    catch (e) {
        res.json({id: false, success: false});
    }
    return true;
};

exports.sendWidgetGridSetterResult = async function (req, res, model) {
    let widgetSetterFunc;
    if (_.hasIn(req, 'params.uniqueId'))
        widgetSetterFunc = widgetSetter.updateWidgetGridParams;
    else
        return false;
    try {
        const result = await widgetSetterFunc(req, model);
        res.json(result);
    }
    catch (e) {
        res.json({id: false, success: false});
    }
    return true;
};

exports.sendWidgetDeleterResult = async function (req, res, model) {
    if (!_.hasIn(req, 'params.uniqueId')) {
        res.json({success: false});
        return false;
    }
    try {
        const result = await widgetDeletter.deleteWidget(req, model);
        res.json(result);
    }
    catch (e) {
        res.json({success: false});
        return false;
    }
    return true;
};