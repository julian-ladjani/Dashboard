'use strict';

const _ = require('lodash');
const widgetConfig = require('../../api/config/widgets');
const swaggerInfoPathGenerator = require('./swaggerInfoPathGenerator');
const swaggerGettersGenerator = require('./swaggerGettersGenerator');
const swaggerDeletersGenerator = require('./swaggerDeletersGenerator');
const swaggerSettersGenerator = require('./swaggerSettersGenerator');
const swaggerRootPathGenerator = require('./swaggerRootPathGenerator');
const swaggerTagGenerator = require('./swaggerTagGenerator');
const swaggerAboutGenerator = require('./swaggerGenerateAbout');


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
                "description": "Auth part of the Dashboard api"
            },
            {
                "name": "About",
                "description": "Epitech Subject required documentation",
            },
            {
                "name": "Widget list",
                "description": "List of widgets id with their parameters infomation",
            },
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
    swaggerTagGenerator(swaggerDocObj.tags);
    _.mergeWith(swaggerDocObj, await swaggerAboutGenerator());
    _.mergeWith(swaggerDocObj, await swaggerRootPathGenerator());
    _.mergeWith(swaggerDocObj, await swaggerInfoPathGenerator());
    await swaggerGettersGenerator(swaggerDocObj);
    await swaggerDeletersGenerator(swaggerDocObj);
    await swaggerSettersGenerator(swaggerDocObj);
    return swaggerDocObj;
}

module.exports = async function (req, res) {
    res.send(await generateSwaggerDoc());
};