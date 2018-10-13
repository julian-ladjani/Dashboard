'use strict';

module.exports = function(router) {
    const googleLoginApi = require('../controllers/googleLoginApiController');

    router.get('/auth/google', googleLoginApi.authenticate);
    router.get('/auth/google/callback', googleLoginApi.loginCallback);
};