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
        if (path.startsWith('params.')) {
            let type = model.schema.paths[path].instance;
            if (type === 'Number')
                type = 'Integer';
            array.push({
                name: path.replace('params.', ''),
                type: type,
            })
        }
    });
    return array;
};

exports.getModelSchema = function (model) {
    return Object.entries(model.schema.paths);
};