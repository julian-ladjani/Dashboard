'use strict';

exports.getModelSchemaKeys = function (model) {
    return Object.keys(model.schema.paths)
};

exports.getModelSchemaParams = function (model) {
    let array = [];
    model.schema.eachPath(function (path) {
        if (path.startsWith('params.'))
            array.push(path.replace('params.', ''))
    });
    return array;
};

exports.getModelSchemaParamsAbout = function (model) {
    let array = [];
    model.schema.eachPath(function (path) {
        if (path.startsWith('params.'))
            array.push({
                name: path.replace('params.', ''),
                type: model.schema.paths[path].instance,
            })
    });
    return array;
};

exports.getModelSchema = function (model) {
    return Object.entries(model.schema.paths);
};