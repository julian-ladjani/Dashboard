'use strict';

const _ = require('lodash');

async function fillSendObj(widgetParams, infoFunc) {
    if (widgetParams === false || !_.hasIn(widgetParams, 'params') ||
        !_.hasIn(widgetParams, '_id') || infoFunc === undefined)
        return false;
    const infos = await infoFunc(widgetParams.params);
    if (infos === undefined)
        return false;
    return {
        'id': widgetParams._id,
        'params': widgetParams.params,
        'infos': infos,
    };
}

exports.getWidgetParamsByUniqueId = async function (req, uniqueId, model) {
    if (!_.hasIn(req, 'user.id') || uniqueId === undefined || model === undefined)
        return false;
    return model.findOne({'user.id': req.user._id, _id: uniqueId}).exec();
};

exports.getWidgetParamsByModel = async function (req, model) {
    if (!_.hasIn(req, 'user.id') || model === undefined)
        return false;
    return model.find({'user.id': req.user._id}).exec();
};

exports.getWidgetByUniqueId = async function (req, uniqueId, model, infoFunc) {
    const widgetParams = await exports.getWidgetParamsByUniqueId(req, uniqueId, model);
    const widgetObj = await fillSendObj(widgetParams, infoFunc);
    if (widgetObj === false)
        return false;
    return widgetObj;
};

exports.getWidgetsByModel = async function (req, model, infoFunc) {
    const widgetsParams = await exports.getWidgetParamsByModel(req, model);
    let widgetObjArray = Array();
    for (let i = 0; i < widgetsParams.length; i++) {
        let widgetParams = widgetsParams[i];
        let widgetObj = await fillSendObj(widgetParams, infoFunc);
        if (widgetObj === false)
            continue;
        widgetObjArray.push(widgetObj);
    }
    if (typeof widgetObjArray === "undefined" || widgetObjArray === null ||
        widgetObjArray.length === null || widgetObjArray.length <= 0)
        return false;
    return widgetObjArray
};