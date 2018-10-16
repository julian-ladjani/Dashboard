'use strict';


const router = require('express').Router();
const passport = require('../../controllers/auth/googleAuth');

router.get('/',
    passport.authenticate('google', {
        scope:
            ['https://www.googleapis.com/auth/plus.login',
                'https://www.googleapis.com/auth/plus.profile.emails.read']
    }));
router.get('/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router;