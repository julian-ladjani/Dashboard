'use strict';

const _ = require('lodash');
const widgetAbout = require('../../api/controllers/widget/about');
const schemaGetter = require('../../api/models/widget/schemaGetter');
const widgetConfig = require('../../api/config/widgets');

async function generateAboutDoc() {
    let swaggerDocObj = {
        "tags": [
            {
                "name": "About",
                "description": "Epitech Subject required documentation",
            },
        ],
        "paths": {
            "/about.json": {
                "get": {
                    "tags": [
                        "About"
                    ],
                    "summary": "About documentation",
                    "description": "List of service, widgets and their params",
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Login response",
                            "examples": {
                                "Success": {}
                            }
                        }
                    }
                }
            }
        }
    };
    swaggerDocObj.paths["/about.json"].get.responses["200"].examples["Success"] = await widgetAbout.getAbout();
    return swaggerDocObj;
}

async function generateWidgetResponseExemple(widgetObj) {
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
}

async function generateServiceResponseExemple(serviceObj) {
    let widgets = Object.keys(serviceObj);
    let widgetsObj = {};
    for (let widget of widgets) {
        let widgetObj = serviceObj[widget];
        if (widget !== 'name' && widget !== 'controller') {
            let widgetExample = await generateWidgetResponseExemple(widgetObj);
            _.merge(widgetsObj, {[widgetObj.name]: widgetExample});
        }
    }
    return widgetsObj;
}

async function generateRootPathResponseExemple() {
    let services = Object.keys(widgetConfig);
    let servicesObj = {};
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        let serviceWidgets = await generateServiceResponseExemple(serviceObj);
        _.merge(servicesObj, {[serviceObj.name]: serviceWidgets});
    }
    return servicesObj;
}

async function generateRootPathDoc() {
    let swaggerDocObj = {
        "paths": {
            "/": {
                "get": {
                    "tags": [
                        "Widget list"
                    ],
                    "summary": "Get all",
                    "description": "Get all api widgets",
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Login response",
                            "examples": {
                                "Success": {}
                            }
                        }
                    }
                }
            }
        }
    };
    swaggerDocObj.paths["/"].get.responses["200"].examples["Success"] = await generateRootPathResponseExemple();
    return swaggerDocObj;
}

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

exports.getWidgetsId = async function (req) {
    let services = Object.keys(widgetConfig);
    let widgets = {};
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        let serviceWidgets = await exports.getServiceWidgetId(req, serviceObj);
        _.merge(widgets, {[serviceObj.name]: serviceWidgets});
    }
    return widgets;
};


async function generateWidgetInfoPathDoc() {
    let swaggerDocObj = {
        "paths": {
            "/widgets": {
                "get": {
                    "tags": [
                        "Widget infos"
                    ],
                    "summary": "Get all",
                    "description": "Get all widgets id and paramsInfo",
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Login response",
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
}

async function generateSwaggerDoc() {
    let swaggerDocObj = {
        "swagger": "2.0",
        "info": {
            "description": "Dashboard widget getter and setter api",
            "version": "1.0.0",
            "title": "Dashboard",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
                "email": "julian.ladjani@epitech.eu"
            },
            "license": {
                "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        },
        "host": "127.0.0.1.xip.io:8080",
        "basePath": "/",
        "tags": [
            {
                "name": "Auth",
                "description": "Access to Petstore orders"
            },
            {
                "name": "Widget list",
                "description": "List of widgets id with their parameters infomation",
            }
        ],
        "schemes": [
            "https",
            "http"
        ],
        "securityDefinitions": {
            "JwtToken": {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header"
            }
        },
        "paths": {
            "/auth/local/in": {
                "post": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Login",
                    "description": "Dashboard login path",
                    "consumes": [
                        "application/x-www-form-urlencoded"
                    ],
                    "produces": [
                        "application/json"
                    ],
                    "parameters": [
                        {
                            "name": "email",
                            "in": "formData",
                            "description": "Email of user",
                            "type": "string",
                            "required": true
                        },
                        {
                            "name": "password",
                            "in": "formData",
                            "type": "string",
                            "description": "Password of user",
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Login response",
                            "examples": {
                                "Successful logged": {
                                    "success": true,
                                    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
                                },
                                "Missing credentials": {
                                    "success": false,
                                    "message": "Missing credentials"
                                }
                            }
                        }
                    },
                },
            },
            "/auth/local/up": {
                "post": {
                    "tags": [
                        "Auth"
                    ],
                    "summary": "Register",
                    "description": "Dashboard register path",
                    "consumes": [
                        "application/x-www-form-urlencoded"
                    ],
                    "produces": [
                        "application/json"
                    ],
                    "parameters": [
                        {
                            "name": "email",
                            "in": "formData",
                            "description": "Email of user",
                            "type": "string",
                            "required": true
                        },
                        {
                            "name": "password",
                            "in": "formData",
                            "type": "string",
                            "description": "Password of user",
                            "required": true
                        },
                        {
                            "name": "username",
                            "in": "formData",
                            "type": "string",
                            "description": "Name of user",
                            "required": true
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Login response",
                            "examples": {
                                "Successful registered": {
                                    "success": true,
                                },
                                "Missing credentials": {
                                    "success": false,
                                    "message": "Missing credentials"
                                }
                            }
                        }
                    },
                },
            },
        }
    };
    _.mergeWith(swaggerDocObj, await generateAboutDoc());
    _.mergeWith(swaggerDocObj, await generateRootPathDoc());
    _.mergeWith(swaggerDocObj, await generateWidgetInfoPathDoc());
    return swaggerDocObj;
}

module.exports = async function (req, res) {
    res.send(await generateSwaggerDoc());
};