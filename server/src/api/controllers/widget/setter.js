'use strict';

const widgetGetter = require('./getter');

exports.addWidget = function (req, model, setterFunc) {
    let params = setterFunc(req);
    if (params === false)
        return false;
    let newWidget = new model();
    newWidget.params = params;
    newWidget.user.id = req.user._id;
    newWidget.params.timer = req.body.timer;
    newWidget.params.grid = req.body.grid;
    newWidget.save();
    return true;
};

exports.updateWidgetParams = async function (req, model, setterFunc) {
    let params = setterFunc;
    if (params === false)
        return false;
    let widget = await widgetGetter.getWidgetParamsByUniqueId(req, req.uniqueId, model);
    widget.params = params;
    widget.user.id = req.user._id;
    widget.params.timer = req.body.timer;
    widget.params.grid = req.body.grid;
    widget.save();
    return true;
};