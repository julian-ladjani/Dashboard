'use strict';

const _ = require('lodash');
const widgetConfig = require('../../config/widgets');


async function fillSendObj(widgetParams, infoFunc) {
    if (widgetParams === false || !_.hasIn(widgetParams, 'params') ||
        !_.hasIn(widgetParams, '_id') || infoFunc === undefined)
        return false;
    let infos;
    try {
        infos = await infoFunc(widgetParams.params);
    } catch (e) {
        infos = undefined;
    }
    if (infos === undefined)
        return false;
    return {
        'id': widgetParams._id,
        'params': widgetParams.params,
        'infos': infos,
    };
}

exports.getWidgetParamsByUniqueId = async function (req, uniqueId, model) {
    if (!_.hasIn(req, 'user._id') || uniqueId === undefined || model === undefined)
        return false;
    return model.findOne({'user.id': req.user._id, _id: uniqueId}).exec();
};

exports.getWidgetParamsByModel = async function (req, model) {
    if (!_.hasIn(req, 'user._id') || model === undefined)
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

exports.getServiceWidget = async function (req, serviceObj) {
    let services = Object.keys(serviceObj);
    let widgets = {};

    for (let service of services) {
        if (service === 'name' || service === 'controller')
            continue;
        let widgetObj = serviceObj[service];
        let serviceWidgets = await exports.getWidgetsByModel(req, widgetObj.model,
            widgetObj.controller.getWidgetInfo);
        _.merge(widgets, {[widgetObj.name]: serviceWidgets});
    }
    return widgets;
};

exports.getWidgets = async function (req) {
    let services = Object.keys(widgetConfig);
    let widgets = {};
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        let serviceWidgets = await exports.getServiceWidget(req, serviceObj);
        _.merge(widgets, {[serviceObj.name]: serviceWidgets});
    }
    return widgets;
};
