const jwt = require('jsonwebtoken');
const passport = require('passport');
const jwtBlacklist = require('../../models/jwtBlacklist');
const config = require('../../config/auth');

exports.generateJWT = function (user) {
    return jwt.sign(user.toJSON(), config.jwt.secretToken, {
        expiresIn: 10080 // in seconds
    });
};

exports.blacklistToken = function(req) {
    let token = req.header('Authorization').slice(4);
    jwtBlacklist.findOne({token: token}).lean().exec((err, result) => {
        if (!err && !result) {
            let blacklistedToken = new jwtBlacklist;
            blacklistedToken.token = token;
            blacklistedToken.save();
        }
    })
};

exports.requireAuth = function (req, res, next) {
    passport.authenticate('jwt', {session: false}, function (error, decryptToken, jwtError) {
        if (typeof (jwtError) === 'object') {
            if (jwtError.name === "TokenExpiredError")
                jwtBlacklist.deleteOne({token: req.header('Authorization').slice(4)}).lean().exec();
            return res.json({
                obj: jwtError,
                field: 'Authorization',
                messages: [
                    jwtError.message
                ]
            });
        } else if (!error) {
            let token = req.header('Authorization').slice(4);
            jwtBlacklist.findOne({token: token}).lean().exec((err, result) => {
                if (!err && !result) {
                    req.user = decryptToken;
                    return next();
                } else if (!err && result) res.json({
                    field: 'Authorization',
                    messages: [
                        'token is in black list'
                    ]
                });
                else general.response(res, err);
            });
        }
    })(req, res, next);
};