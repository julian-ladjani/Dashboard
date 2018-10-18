'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../../models/auth/User.js');
const configAuth = require('../../config/auth');

passport.use(new GoogleStrategy({

        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,
        passReqToCallback: true

    },
    function (req, token, refreshToken, profile, done) {


        process.nextTick(function () {
            if (!req.user) {

                User.findOne({'google.id': profile.id}, function (err, user) {
                    if (err)
                        return done(err);

                    if (user) {

                        if (!user.google.token) {
                            user.google.token = token;
                            user.google.name = profile.displayName;
                            user.google.email = profile.emails[0].value;

                            user.save(function (err) {
                                if (err)
                                    throw err;
                                return done(null, user);
                            });
                        }

                        return done(null, user);
                    } else {
                        let newUser = new User();

                        newUser.google.id = profile.id;
                        newUser.google.token = token;
                        newUser.google.name = profile.displayName;
                        newUser.google.email = profile.emails[0].value;
                        newUser.local.email = profile.emails[0].value;
                        newUser.local.username = profile.displayName;

                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });

            } else {

                let user = req.user;

                user.google.id = profile.id;
                user.google.token = token;
                user.google.name = profile.displayName;
                user.google.email = profile.emails[0].value;

                user.save(function (err) {
                    if (err)
                        throw err;
                    return done(null, user);
                });

            }

        });
    })
);

require('./initAuth')(User, passport);

module.exports = passport;