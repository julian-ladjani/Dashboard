'use strict';

module.exports = function (router) {
    const passport = require('../controllers/googleLoginApiController');

    router.get('/auth/google',
        passport.authenticate('google', {
            scope:
                ['https://www.googleapis.com/auth/plus.login',
                    'https://www.googleapis.com/auth/plus.profile.emails.read']
        }));
    router.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/fail'
        }));
};