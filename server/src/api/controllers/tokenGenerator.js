const jwt = require('jsonwebtoken');
const config = require('../config/auth');

exports.generateJWT = function(user) {
    let token = jwt.sign(user.toJSON(), config.jwt.secretToken, {
        expiresIn: 10080 // in seconds
    });
    return token
};