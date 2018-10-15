'use strict';

const router = require('express').Router();
const passport = require('../../controllers/auth/localAuth');
const jwt = require('../../controllers/auth/jwtAuth');

router.post('/in', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        res.json(info);
    })(req, res, next);
});

router.post('/up', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        res.json(info);
    })(req, res, next);
});

router.get('/test', jwt.requireAuth, function(req, res) {
    res.send('It worked! User id is: ' + req.user + '.');
});

module.exports = router;