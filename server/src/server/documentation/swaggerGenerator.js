'use strict';

let swaggerDoc = {
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
            "name": "About",
            "description": "Epitech Subject required documentation",
        },
        {
            "name": "auth",
            "description": "Access to Petstore orders"
        },
        {
            "name": "WidgetList",
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
}