'use strict';

const router = require('express').Router();
const pokemonRoutes = require('./pokemonApiRoutes');
const googleApiRoutes = require('./googleLoginApiRoutes');
const logoutRoutes = require('./logoutRoutes');

pokemonRoutes(router);
googleApiRoutes(router);
logoutRoutes(router);

module.exports = router;