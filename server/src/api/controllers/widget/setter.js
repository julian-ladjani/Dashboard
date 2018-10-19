'use strict';

const widgetGetter = require('./getter');
const schemaGetter = require('../../models/widget/schemaGetter');
const _ = require('lodash');

exports.addWidget = function (req, model) {
    let params = exports.setWidgetParams(req, model);
    if (params === false)
        return {id: false, success: false};
    let newWidget = new model();
    newWidget.params = params;
    newWidget.user.id = req.user._id;
    newWidget.save();
    return {id: newWidget._id, success: true};
};

exports.setParamIfExist = function (paramsObj, paramKey, valueObj, valueKey) {
    if (valueObj === undefined || paramsObj === undefined)
        return paramsObj;
    if (paramKey !== undefined && paramKey !== '') {
        if (valueKey !== undefined && valueKey !== '') {
            if (_.hasIn(valueObj, valueKey))
                _.merge(paramsObj, {[paramKey]: _.get(valueObj, valueKey)});
            else
                return paramsObj;
        }
        else
            _.merge(paramsObj, {[paramKey]: valueObj});
    }
    else {
        if (valueKey !== undefined && valueKey !== '') {
            if (_.hasIn(valueObj, valueKey))
                paramsObj = _.get(valueObj, valueKey);
            else
                return paramsObj;
        }
        else
            paramsObj = valueObj;
    }
    return (paramsObj);
};

exports.setWidgetParams = function (req, model) {
    let paramsObj = {};
    let modelParams = schemaGetter.getModelSchemaParams(model);
    modelParams.forEach(function (modelParam) {
        exports.setParamIfExist(paramsObj, modelParam, req, 'body.' + modelParam);
    });
    return paramsObj;
};


exports.updateWidgetParams = async function (req, model) {
    let params = exports.setWidgetParams(req, model);
    if (params === false)
        return {id: req.params.uniqueId, success: false};
    let widget = await widgetGetter.getWidgetParamsByUniqueId(req, req.params.uniqueId, model);
    if (widget === false)
        return {id: req.params.uniqueId, success: false};
    widget.params = params;
    widget.user.id = req.user._id;
    widget.save();
    return {id: req.params.uniqueId, success: true};
};