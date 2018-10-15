'use strict';

const passport = require('../controllers/spotifyAuth');
const router = require('express').Router();
const spotify = require('../controllers/spotifyApi');

    // todoList Routes
    router.get('/auth', passport.authenticate('spotify'), function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
    });

    router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);


module.exports = router;