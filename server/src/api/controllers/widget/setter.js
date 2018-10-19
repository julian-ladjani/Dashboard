'use strict';

const widgetGetter = require('./getter');
const _ = require('lodash');

exports.addWidget = function (req, model, setterFunc) {
    let params = setterFunc(req);
    if (params === false)
        return {id: false, success: false};
    let newWidget = new model();
    newWidget.params = params;
    newWidget.user.id = req.user._id;
    newWidget.params.timer = req.body.timer;
    newWidget.params.grid = req.body.grid;
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

exports.updateWidgetParams = async function (req, model, setterFunc) {
    let params = setterFunc(req);
    if (params === false)
        return {id: req.params.uniqueId, success: false};
    let widget = await widgetGetter.getWidgetParamsByUniqueId(req, req.params.uniqueId, model);
    if (widget === false)
        return {id: req.params.uniqueId, success: false};
    widget.params = params;
    widget.user.id = req.user._id;
    widget.params.timer = req.body.timer;
    widget.params.grid = req.body.grid;
    widget.save();
    return {id: req.params.uniqueId, success: true};
};