'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
        clientID: '1045572143715-ruevrnkud3ckmeajm03kvm85lcpi7chc.apps.googleusercontent.com',
        clientSecret: 'IkR4AfSBU2uV8-2rPhrG1TTb',
        callbackURL: "http://127.0.0.1.xip.io:8080/auth/google/callback",
        passReqToCallback: true
    },
    function (token, tokenSecret, profile, done) {
        User.findOrCreate({googleId: profile.id}, function (err, user) {
            return done(err, user);
        });
    }
));

exports.authenticate = function() {
    passport.authenticate('google', {
        scope:
            ['https://www.googleapis.com/auth/plus.login',
                'https://www.googleapis.com/auth/plus.profile.emails.read']
    })
};

exports.loginCallback = function() {
    passport.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    })
};
