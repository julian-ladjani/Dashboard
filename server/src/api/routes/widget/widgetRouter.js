'use strict';

const jwt = require('../../controllers/auth/jwtAuth');
const widgetSender = require('../../controllers/widget/sender');
const widgetConfig = require('../../config/widgets');

function widgetRouter(router, serviceName, widget) {
    let rootPath = "/" + serviceName + '/' + widget.name;
    let model = widget.model;
    let controller = widget.controller;

    router
        .get(rootPath, jwt.requireAuth, function (req, res) {
            widgetSender.sendWidgetsByModel(req, res, model, widget.controller.getWidgetInfo);
        })
        .get(rootPath + '/:uniqueId', jwt.requireAuth, function (req, res) {
            widgetSender.sendWidgetByUniqueId(req, res, model, controller.getWidgetInfo);
        })
        .post(rootPath, jwt.requireAuth, function (req, res) {
            widgetSender.sendWidgetSetterResult(req, res, model, controller.setWidgetParams);
        })
        .post(rootPath + '/:uniqueId/params', jwt.requireAuth, function (req, res) {
            widgetSender.sendWidgetSetterResult(req, res, model, controller.setWidgetParams);
        });
}

function serviceWidgetsRouter(router, service) {
    let widgets = Object.keys(service);

    router
        .get('/' + service.name, jwt.requireAuth, function (req, res) {
            widgetSender.sendWidgetsByService(req, res, service);
        });
    widgets.forEach(function (widget) {
        if (widget !== 'name' && widget !== 'controller') {
            widgetRouter(router, service.name, service[widget]);
        }
    });
}

module.exports = function (router) {
    let services = Object.keys(widgetConfig);

    services.forEach(function (service) {
        serviceWidgetsRouter(router, widgetConfig[service]);
    });
};
