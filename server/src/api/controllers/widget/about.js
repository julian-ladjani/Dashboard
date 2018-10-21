'use strict';

const schemaGetter = require('../../models/widget/schemaGetter');
const widgetConfig = require('../../config/widgets');
const moment = require('moment');


function getWidgetAbout(widget) {
    let params = schemaGetter.getModelSchemaParamsAbout(widget.model);
    return {
        name: widget.name,
        description: widget.description,
        params: params,
    }
};

function getServiceAbout(service) {
    let widgetArray = [];
    let widgets = Object.keys(service);

    widgets.forEach(function (widget) {
        if (widget !== 'name' && widget !== 'controller')
            widgetArray.push(getWidgetAbout(service[widget]));
    });
    return {
        name: service.name,
        widgets: widgetArray,
    }
}

module.exports.getAbout = async function (req) {
    let services = Object.keys(widgetConfig);
    let serviceArray = [];

    if (req === undefined || req.ip === undefined)
        req = {
            ip: "client host"
        };
    services.forEach(function (service) {
        serviceArray.push(getServiceAbout(widgetConfig[service]));
    });
    return {
        client: {
            host: req.ip
        },
        server: {
            current_time: moment().unix(),
            services: serviceArray,
        }
    }
};

module.exports.sendAbout = async function (req, res) {
    try {
        res.json(await exports.getAbout(req));
    } catch (e) {
        res.json({success: false})
    }
};
