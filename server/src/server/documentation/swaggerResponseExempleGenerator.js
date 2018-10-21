'use strict';

const _ = require('lodash');
const schemaGetter = require('../../api/models/widget/schemaGetter');
const widgetConfig = require('../../api/config/widgets');

module.exports.generateWidgetResponseExemple = async function (widgetObj) {
    let widget = [{
        id: "String",
        params: {},
        info: "Widget Info Object"
    }];
    let paramsObj = {};
    let modelParams = await schemaGetter.getModelSchemaParamsAbout(widgetObj.model);
    for (let modelParam of modelParams) {
        _.merge(paramsObj, {[modelParam.name]: modelParam.type});
    }
    widget[0].params = paramsObj;
    return widget;
};

module.exports.generateServiceResponseExemple = async function (serviceObj) {
    let widgets = Object.keys(serviceObj);
    let widgetsObj = {};
    for (let widget of widgets) {
        let widgetObj = serviceObj[widget];
        if (widget !== 'name' && widget !== 'controller') {
            let widgetExample = await exports.generateWidgetResponseExemple(widgetObj);
            _.merge(widgetsObj, {[widgetObj.name]: widgetExample});
        }
    }
    return widgetsObj;
};

module.exports.generateRootPathResponseExemple = async function generateRootPathResponseExemple() {
    let services = Object.keys(widgetConfig);
    let servicesObj = {};
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        let serviceWidgets = await  exports.generateServiceResponseExemple(serviceObj);
        _.merge(servicesObj, {[serviceObj.name]: serviceWidgets});
    }
    return servicesObj;
};