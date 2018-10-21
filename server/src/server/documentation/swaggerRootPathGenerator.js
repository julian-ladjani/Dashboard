'use strict';

const swaggerResponseExempleGenerator = require('./swaggerResponseExempleGenerator');


module.exports = async function generateRootPathDoc() {
    let swaggerDocObj = {
        "paths": {
            "/": {
                "get": {
                    "tags": [
                        "Widget list"
                    ],
                    "summary": "Get all widgets",
                    "description": "Get all api widgets",
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
    swaggerDocObj.paths["/"].get.responses["200"].examples["Success"] = await swaggerResponseExempleGenerator.generateRootPathResponseExemple();
    return swaggerDocObj;
}