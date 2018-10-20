'use strict';

const widgetGetter = require('./getter');
const schemaGetter = require('../../models/widget/schemaGetter');
const _ = require('lodash');

exports.addWidget = function (req, model) {
    let params = exports.setWidgetParams(req, model, undefined, false);
    if (params === false)
        return {id: false, success: false};
    let newWidget = new model();
    newWidget.params = params;
    newWidget.user.id = req.user._id;
    newWidget.save();
    return {id: newWidget._id, success: true};
};

exports.setParamIfExist = function (paramsObj, paramKey, valueObj, valueKey, params, update) {
    if (paramKey !== undefined && paramKey !== '') {
        if (valueKey !== undefined && valueKey !== '') {
            if (_.hasIn(valueObj, valueKey) && _.get(valueObj, valueKey) !== "" && _.get(valueObj, valueKey) !== '')
                _.merge(paramsObj, {[paramKey]: _.get(valueObj, valueKey)});
            else if (update === true && params !== undefined) {
                _.assignWith(paramsObj, {[paramKey]: params[paramKey]});
            }
            else if (params === undefined && update === false) {
                _.assignWith(paramsObj, {[paramKey]: undefined});
            }
        }
    }
    return (paramsObj);
};

exports.setWidgetParams = function (req, model, params, update) {
    let paramsObj = {};
    let modelParams = schemaGetter.getModelSchemaParams(model);
    modelParams.forEach(function (modelParam) {
        exports.setParamIfExist(paramsObj, modelParam, req, 'body.' + modelParam, params, update);
    });
    return paramsObj;
};

exports.updateWidgetParams = async function (req, model) {
    let widget = await widgetGetter.getWidgetParamsByUniqueId(req, req.params.uniqueId, model);
    if (widget === false)
        return {id: req.params.uniqueId, success: false};
    let params = exports.setWidgetParams(req, model, widget.params, false);
    if (params === false)
        return {id: req.params.uniqueId, success: false};
    widget.params = params;
    widget.user.id = req.user._id;
    widget.save();
    return {id: req.params.uniqueId, success: true};
};

exports.setWidgetGridParams = function (req, model, params, update) {
    let paramsObj = {grid: {}};
    let modelParams = schemaGetter.getModelSchemaParams(model);
    modelParams.forEach(function (modelParam) {
        if (modelParam.startsWith('grid')) {
            exports.setParamIfExist(paramsObj.grid,
                modelParam.replace('grid.', ''), req, 'body.' + modelParam.replace('grid.', ''), params.grid, update);
        }
    });
    return paramsObj;
};

exports.updateWidgetGridParams = async function (req, model) {
    let widget = await widgetGetter.getWidgetParamsByUniqueId(req, req.params.uniqueId, model);
    if (widget === false)
        return {id: req.params.uniqueId, success: false};
    let params = exports.setWidgetGridParams(req, model, widget.params, true);
    if (params === false)
        return {id: req.params.uniqueId, success: false};
    widget.params.grid = params.grid;
    widget.user.id = req.user._id;
    widget.save();
    return {id: req.params.uniqueId, success: true};
};