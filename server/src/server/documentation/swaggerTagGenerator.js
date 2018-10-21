'use strict';

const widgetConfig = require('../../api/config/widgets');


module.exports = async function generateSwaggerDocTags(tagObjArray) {
    let services = Object.keys(widgetConfig);
    for (let service of services) {
        let serviceObj = widgetConfig[service];
        let descr = "Widgets getters, setters and deleters of widgets in " + serviceObj.name + " service";
        let tagObj = {
            name: serviceObj.name,
            description: descr,
        };
        tagObjArray.push(tagObj);
    }
    return tagObjArray;
};