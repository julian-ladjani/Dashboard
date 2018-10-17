'use strict';

const _ = require('lodash');

exports.getWidgetParamsByUniqueId = async function (req, uniqueId, model) {
    if (!_.hasIn(req, 'user.id') || uniqueId === undefined || model === undefined)
        return false;
    return model.findOne({'user.id': req.user._id, _id: uniqueId}).exec();
};

exports.getWidgetByUniqueId = async function (req, uniqueId, model, infoFunc) {
    if (req === undefined || uniqueId === undefined || model === undefined || infoFunc === undefined)
        return false;
    const widgetParams = await exports.getWidgetParamsByUniqueId(req, model);
    if (widgetParams === false || !_.hasIn(widgetParams, 'params') || !_.hasIn(widgetParams, '_id'))
        return false;
    const infos = await infoFunc(widgetParams.params);
    if (infos === undefined)
        return false;
    return {
        'id': widgetParams._id,
        'params': widgetParams.params,
        'infos': infos,
    };
};

exports.getWidgetsWithModel = async function (req, model, infoFunc) {
    if (req === undefined || infoFunc === undefined || model === undefined)
        return false;
    const widgetParams = await exports.getWidgetParamsByUniqueId(req, model);
    if (widgetParams === false || !_.hasIn(widgetParams, 'params') || !_.hasIn(widgetParams, '_id'))
        return false;
    const infos = await infoFunc(widgetParams.params);
    console.log(infos);
    if (widgetParams === false)
        return false;
    return {
        'id': widgetParams._id,
        'params': widgetParams.params,
        'infos': infos,
    };
};