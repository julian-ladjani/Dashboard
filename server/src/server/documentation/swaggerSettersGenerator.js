'use strict';

const _ = require('lodash');
const swaggerResponseExempleGenerator = require('./swaggerResponseExempleGenerator');
const schemaGetter = require('../../api/models/widget/schemaGetter');
const widgetConfig = require('../../api/config/widgets');


async function generateWidgetSettersUniqueId(widgetObj, swaggerDoc, serviceName) {
    let route = "/" + serviceName + "/" + widgetObj.name + "/{uniqueId}";
    let swaggerDocObj = {
        "paths": {
            [route]: {
                "post": {
                    "tags": [
                        serviceName
                    ],
                    "summary": "Edit " + widgetObj.name + " widget params by unique id",
                    "description": "Edit api widget " + widgetObj.name + " of service " + serviceName + " params by unique id",
                    "produces": [
                        "application/json"
                    ],
                    "consumes": [
                        "application/json",
                    ],
                    "responses": {
                        "200": {
                            "description": "Status of result",
                            "examples": {
                                "Success": {},
                                "Error": {}
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
                        },
                        {
                            "name": "parameters",
                            "in": "body",
                            "description": "Widget parameters",
                            "schema": {
                                "type": "object",
                                "properties": {}
                            },
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
    let modelParams = await schemaGetter.getModelSchemaParamsAbout(widgetObj.model);
    for (let modelParam of modelParams) {
        let type = modelParam.type;
        if (modelParam.type === 'Number')
            type = 'Integer';
        let paramsObj = {
            "type": modelParam.type.toLowerCase(),
        };
        swaggerDocObj.paths[route].post.parameters[1].schema.properties[modelParam.name] = paramsObj;
    }
    swaggerDocObj.paths[route].post.responses["200"].examples["Success"] =
        {id: "Widget Id", success: true};
    swaggerDocObj.paths[route].post.responses["200"].examples["Error"] =
        {id: "Widget Id", success: false};
    _.mergeWith(swaggerDoc, swaggerDocObj);

}

async function generateWidgetSetters(widgetObj, swaggerDoc, serviceName) {
    let route = "/" + serviceName + "/" + widgetObj.name;
    let swaggerDocObj = {
        "paths": {
            [route]: {
                "post": {
                    "tags": [
                        serviceName
                    ],
                    "summary": "Add " + widgetObj.name + " widget",
                    "description": "Add api widget " + widgetObj.name + " of service " + serviceName,
                    "produces": [
                        "application/json"
                    ],
                    "consumes": [
                        "application/json",
                    ],
                    "responses": {
                        "200": {
                            "description": "Status of result",
                            "examples": {
                                "Success": {},
                                "Error": {}
                            }
                        }
                    },
                    "parameters": [
                        {
                            "name": "parameters",
                            "in": "body",
                            "description": "Widget parameters",
                            "schema": {
                                "type": "object",
                                "properties": {}
                            },
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
    let modelParams = await schemaGetter.getModelSchemaParamsAbout(widgetObj.model);
    for (let modelParam of modelParams) {
        let type = modelParam.type;
        if (modelParam.type === 'Number')
            type = 'Integer';
        let paramsObj = {
            "type": modelParam.type.toLowerCase(),
        };
        swaggerDocObj.paths[route].post.parameters[0].schema.properties[modelParam.name] = paramsObj;
    }
    swaggerDocObj.paths[route].post.responses["200"].examples["Success"] =
        {id: "Widget Id", success: true};
    swaggerDocObj.paths[route].post.responses["200"].examples["Error"] =
        {success: false};
    _.mergeWith(swaggerDoc, swaggerDocObj);

}

async function generateServiceSetters(serviceObj, swaggerDoc) {
    let widgets = Object.keys(serviceObj);
    for (let widget of widgets) {
        if (widget !== 'name' && widget !== 'controller') {
            let widgetObj = serviceObj[widget];
            await generateWidgetSetters(widgetObj, swaggerDoc, serviceObj.name);
        }
    }
    widgets = Object.keys(serviceObj);
    for (let widget of widgets) {
        if (widget !== 'name' && widget !== 'controller') {
            let widgetObj = serviceObj[widget];
            await generateWidgetSettersUniqueId(widgetObj, swaggerDoc, serviceObj.name);
        }
    }
}

module.exports = async function (swaggerDocObj) {
    let services = Object.keys(widgetConfig);
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        await generateServiceSetters(serviceObj, swaggerDocObj);
    }
};