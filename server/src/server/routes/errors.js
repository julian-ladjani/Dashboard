'use strict';

module.exports = function (router) {
    router.use((req, res, next) => {
        next({
            success: false,
            status: 404,
            message: 'Route not found',
        });
    });
    router.use((err, req, res, next) => {
        if (err.status === 404) {
            return res.status(404).json(err);
        }

        if (err.status === 500) {
            return res.status(500).json(err);
        }
        next();
    });
};