'use strict';

const router = require('express').Router();
const pokemonRoutes = require('./pokemon');
const googleApiRoutes = require('./googleLogin');
const logoutRoutes = require('./logout');

pokemonRoutes(router);
googleApiRoutes(router);
logoutRoutes(router);

module.exports = router;