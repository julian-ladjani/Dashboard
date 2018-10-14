'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User.js');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: '1045572143715-ruevrnkud3ckmeajm03kvm85lcpi7chc.apps.googleusercontent.com',
        clientSecret: 'IkR4AfSBU2uV8-2rPhrG1TTb',
        callbackURL: "http://127.0.0.1.xip.io:8080/auth/google/callback",
        passReqToCallback: true
    },
    function (request, accessToken, refreshToken, profile, done) {
        User.findOne({oauthID: profile.id}, function (err, user) {
            if (err) {
                console.log(err);  // handle errors!
            }
            if (!err && user !== null) {
                done(null, user);
            } else {
                user = new User({
                    oauthID: profile.id,
                    name: profile.displayName,
                    created: Date.now()
                });
                user.save(function (err) {
                    if (err) {
                        console.log(err);  // handle errors!
                    } else {
                        console.log("saving user ...");
                        done(null, user);
                    }
                });
            }
        });
    }
));

module.exports = passport;