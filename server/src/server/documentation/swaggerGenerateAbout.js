'use strict';

const widgetAbout = require('../../api/controllers/widget/about');

module.exports = async function generateAboutDoc() {
    let swaggerDocObj = {
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
};