'use strict';

const _ = require('lodash');
const swaggerResponseExempleGenerator = require('./swaggerResponseExempleGenerator');
const widgetConfig = require('../../api/config/widgets');


async function generateWidgetGettersUniqueId(widgetObj, swaggerDoc, serviceName) {
    let swaggerDocObj = {
        "paths": {
            ["/" + serviceName + "/" + widgetObj.name + "/{uniqueId}"]: {
                "get": {
                    "tags": [
                        serviceName
                    ],
                    "summary": "Get " + widgetObj.name + " widget by unique id",
                    "description": "Get api widget " + widgetObj.name + " of service " + serviceName + " by unique id",
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Widgets ids, infos and params",
                            "examples": {
                                "Success": {}
                            }
                        }
                    },
                    "parameters": [
                        {
                            "name": "uniqueId",
                            "in": "path",
                            "description": "ID of widget",
                            "required": true,
                            "type": "string",
                        }
                    ],
                    "security": [
                        {
                            "JwtToken": []
                        }
                    ]
                }
            }
        }
    };
    let responseExample = await swaggerResponseExempleGenerator.generateWidgetResponseExemple(widgetObj);
    swaggerDocObj.paths["/" + serviceName + "/" + widgetObj.name + "/{uniqueId}"].get.responses["200"].examples["Success"] =
        responseExample[0];
    _.mergeWith(swaggerDoc, swaggerDocObj);

}

async function generateWidgetGetters(widgetObj, swaggerDoc, serviceName) {
    let swaggerDocObj = {
        "paths": {
            ["/" + serviceName + "/" + widgetObj.name]: {
                "get": {
                    "tags": [
                        serviceName
                    ],
                    "summary": "Get all " + widgetObj.name + " widgets",
                    "description": "Get all api widgets " + widgetObj.name + " of service " + serviceName,
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Widgets ids, infos and params",
                            "examples": {
                                "Success": {}
                            }
                        }
                    },
                    "security": [
                        {
                            "JwtToken": []
                        }
                    ]
                }
            }
        }
    };
    swaggerDocObj.paths["/" + serviceName + "/" + widgetObj.name].get.responses["200"].examples["Success"] =
        await swaggerResponseExempleGenerator.generateWidgetResponseExemple(widgetObj);
    _.mergeWith(swaggerDoc, swaggerDocObj);

}

async function generateServiceGetters(serviceObj, swaggerDoc) {
    let swaggerDocObj = {
        "paths": {
            ["/" + serviceObj.name]: {
                "get": {
                    "tags": [
                        serviceObj.name
                    ],
                    "summary": "Get all widgets of service " + serviceObj.name,
                    "description": "Get all api widgets of service " + serviceObj.name,
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Widgets ids, infos and params",
                            "examples": {
                                "Success": {}
                            }
                        }
                    },
                    "security": [
                        {
                            "JwtToken": []
                        }
                    ]
                }
            }
        }
    };
    swaggerDocObj.paths["/" + serviceObj.name].get.responses["200"].examples["Success"] =
        await swaggerResponseExempleGenerator.generateServiceResponseExemple(serviceObj);
    _.mergeWith(swaggerDoc, swaggerDocObj);
    let widgets = Object.keys(serviceObj);
    for (let widget of widgets) {
        if (widget !== 'name' && widget !== 'controller') {
            let widgetObj = serviceObj[widget];
            await generateWidgetGetters(widgetObj, swaggerDoc, serviceObj.name);
        }
    }
    widgets = Object.keys(serviceObj);
    for (let widget of widgets) {
        if (widget !== 'name' && widget !== 'controller') {
            let widgetObj = serviceObj[widget];
            await generateWidgetGettersUniqueId(widgetObj, swaggerDoc, serviceObj.name);
        }
    }
}

module.exports = async function (swaggerDocObj) {
    let services = Object.keys(widgetConfig);
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        await generateServiceGetters(serviceObj, swaggerDocObj);
    }
};