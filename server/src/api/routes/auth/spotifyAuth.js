'use strict';

const router = require('express').Router();
const passport = require('../../controllers/Spotify/spotifyAuth');


router.get('/', passport.authenticate('spotify'), function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
});

router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        console.log(req);
        res.redirect('/');
    }
);

module.exports = router;