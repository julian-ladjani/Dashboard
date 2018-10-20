'use strict'

const request = require('request');

exports.getLogin = function(req, res) {
    request('https://intra.epitech.eu/auth-903de501f139b854ec9a5d39acda40649574d60e', function(err, responce, body) {
        if (err) {
            return false;
        }
        res.send(body);
    });
};

exports.getProfile = function (req, res) {
    request('https://intra.epitech.eu/user/lucas.depret@epitech.eu/notes?format=json', function(err, responce, body) {
        if (err) {
            return false;
        }
        res.send(body);
    });
};