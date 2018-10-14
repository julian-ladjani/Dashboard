'use strict';

const router = require('express').Router();
const passport = require('../controllers/localAuth');

router.post('/auth/local/in', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        res.json(info);
    })(req, res, next);
});

router.post('/auth/local/up', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        res.json(info);
    })(req, res, next);
});

router.get('/auth/local/test', passport.authenticate('jwt', { session: false }), function(req, res) {
    res.send('It worked! User id is: ' + req.user + '.');
});

module.exports = router;