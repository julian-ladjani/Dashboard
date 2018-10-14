'use strict';

const router = require('express').Router();
const pokemonRoutes = require('./pokemon');
const weatherRoutes = require('./weather');
const googleApiRoutes = require('./googleLogin');
const logoutRoutes = require('./logout');

pokemonRoutes(router);
googleApiRoutes(router);
logoutRoutes(router);
weatherRoutes(router);

module.exports = router;