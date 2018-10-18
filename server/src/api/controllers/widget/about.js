'use strict';

const schemaGetter = require('../../models/widget/schemaGetter');

exports.getWidgetAbout = function (name, descr, model) {
    let params = schemaGetter.getModelSchemaParamsAbout(model);
    return {
        name: name,
        description: descr,
        params: params,
    }
};

exports.getServiceAbout = function (name, aboutFunc) {
    let widgets = aboutFunc();
    return {
        name: name,
        widgets: widgets,
    }
};
