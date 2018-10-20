'use strict';

const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const Spotify = require('../../models/auth/Spotify');

passport.use(
    new SpotifyStrategy(
        {
            clientID: 'a60af4905a4842ce94f1a87675295318',
            clientSecret: 'b4b4680a3f6a40efbf31fb161d058116',
            callbackURL: 'http://127.0.0.1.xip.io:8080/auth/spotify/callback'
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            User.findOne({ 'spotify.id': profile.id }, function(err, user) {
                if (err) {
                    console.error(err);
                    return done(err);
                }

                if (user) {
                    if (!user.spotify.token) {
                        user.spotify.token = accessToken;

                        user.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                    }

                    return done(null, user);
                } else {
                    let newUser = new User();
                    newUser.spotify.id = profile.id;
                    newUser.spotify.token = accessToken;
                    newUser.spotify.email = profile.email;

                    newUser.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        }
    )
);

module.exports = passport;