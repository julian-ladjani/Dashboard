'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js');
const configAuth = require('../config/auth');
const tokenGenerator = require('./tokenGenerator');

passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, email, password, done) {

        // asynchronous
        process.nextTick(function () {
            User.findOne({'local.email': email}, function (err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done(null, false, { success: false, message: 'Authentication failed. User not found.' });
                if (!user.local.password)
                    return done(null, false, {success: false, message: 'Please make a password in your account.'});
                if (!user.validPassword(password))
                    return done(null, false, { success: false, message: 'Authentication failed. Passwords did not match.' });

                // all is well, return user
                else
                    return done(null, user, {
                        success: true,
                        token: 'JWT ' + tokenGenerator.generateJWT(user)
                    });
            });
        });
    })
);


passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, email, password, done) {

        // asynchronous
        process.nextTick(function () {

            //  Whether we're signing up or connecting an account, we'll need
            //  to know if the email address is in use.
            User.findOne({'local.email': email}, function (err, existingUser) {

                // if there are any errors, return the error
                if (err)
                    return done(err);

                // check to see if there's already a user with that email
                if (!req.body.username)
                    return done(null, false, { success: false, message: 'Missing Credidential.' });
                if (existingUser)
                    return done(null, false, { success: false, message: 'That email is already taken.'});

                //  If we're logged in, we're connecting a new local account.
                if (req.user) {
                    let user = req.user;
                    user.local.username = req.body.username;
                    user.local.email = email;
                    user.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });
                }
                //  We're not logged in, so we're creating a brand new user.
                else {
                    // create the user
                    let newUser = new User();

                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function (err) {
                        if (err)
                            throw err;

                        return done(null, newUser);
                    });
                }

            });
        });

    })
);

require('./initAuth')(User, passport);

module.exports = passport;