'use strict';

const _ = require('lodash');
const widgetConfig = require('../../api/config/widgets');

async function generateParamInfoContent(widgetObj) {
    if (widgetObj === undefined)
        return false;
    let paramsInfos = Object.keys(widgetObj);
    for (let paramsInfo of paramsInfos) {
        let paramsInfoObj = widgetObj[paramsInfo];
        if (paramsInfoObj.content !== undefined && typeof paramsInfoObj.content === 'function')
            paramsInfoObj.content = await paramsInfoObj.content();
    }
    return true;
}



async function generateWidgetInfoPathResponseExemple() {
    let services = Object.keys(widgetConfig);
    let widgets = {};
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        let serviceWidgets = await generateWidgetInfoPathServiceResponseExemple(serviceObj);
        _.merge(widgets, {[serviceObj.name]: serviceWidgets});
    }
    return widgets;
}

async function generateWidgetInfoPathServiceResponseExemple(serviceObj) {
    let services = Object.keys(serviceObj);
    let widgets = {};

    for (let service of services) {
        if (service === 'name' || service === 'controller')
            continue;
        let widgetObj = serviceObj[service];
        if (widgetObj.paramsInfo !== undefined) {
            await generateParamInfoContent(widgetObj.paramsInfo);
            _.merge(widgets, {[widgetObj.name]: {paramsInfo: widgetObj.paramsInfo}});
        }
        _.merge(widgets, {[widgetObj.name]: {ids: ["Saved widget ids: String"]}});
    }
    return widgets;
}


module.exports = async function generateWidgetInfoPathDoc() {
    let swaggerDocObj = {
        "paths": {
            "/widgets": {
                "get": {
                    "summary": "Get widgets info",
                    "description": "Get all widgets id and paramsInfo",
                    "tags": [
                        "Widget list"
                    ],
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Widgets Ids and params information",
                            "examples": {
                                "Success": {}
                            }
                        }
                    }
                }
            }
        }
    };
    swaggerDocObj.paths["/widgets"].get.responses["200"].examples["Success"] = await generateWidgetInfoPathResponseExemple();
    return swaggerDocObj;
};