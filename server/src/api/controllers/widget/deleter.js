'use strict';
const _ = require('lodash');

async function deleteWidgetParamsByUniqueId(req, uniqueId, model) {
    if (!_.hasIn(req, 'user._id') || uniqueId === undefined || model === undefined)
        return false;
    return model.deleteOne({'user.id': req.user._id, _id: uniqueId}).exec();
}

exports.deleteWidget = async function (req, model) {
    let result = await deleteWidgetParamsByUniqueId(req, req.params.uniqueId, model);
    if (result === false || result.n === 0)
        return {id: req.params.uniqueId, success: false};
    return {id: req.params.uniqueId, success: true};
};