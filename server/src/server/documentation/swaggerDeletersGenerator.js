'use strict';

const _ = require('lodash');
const swaggerResponseExempleGenerator = require('./swaggerResponseExempleGenerator');
const widgetConfig = require('../../api/config/widgets');

async function generateWidgetDeleters(widgetObj, swaggerDoc, serviceName) {
    let swaggerDocObj = {
        "paths": {
            ["/" + serviceName + "/" + widgetObj.name + "/{uniqueId}"]: {
                "delete": {
                    "tags": [
                        serviceName
                    ],
                    "summary": "Delete " + widgetObj.name + " widget by unique id",
                    "description": "Delete api widget " + widgetObj.name + " of service " + serviceName + " by unique id",
                    "produces": [
                        "application/json"
                    ],
                    "responses": {
                        "200": {
                            "description": "Widget deletion success status",
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
    swaggerDocObj.paths["/" + serviceName + "/" + widgetObj.name + "/{uniqueId}"].delete.responses["200"].examples["Success"] =
        {success: true};
    swaggerDocObj.paths["/" + serviceName + "/" + widgetObj.name + "/{uniqueId}"].delete.responses["200"].examples["Error"] =
        {success: false};
    _.mergeWith(swaggerDoc, swaggerDocObj);

}

async function generateServiceDeleters(serviceObj, swaggerDoc) {
    let widgets = Object.keys(serviceObj);
    for (let widget of widgets) {
        if (widget !== 'name' && widget !== 'controller') {
            let widgetObj = serviceObj[widget];
            await generateWidgetDeleters(widgetObj, swaggerDoc, serviceObj.name);
        }
    }
}

module.exports = async function (swaggerDocObj) {
    let services = Object.keys(widgetConfig);
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        await generateServiceDeleters(serviceObj, swaggerDocObj);
    }
};