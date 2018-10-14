'use strict';

const router = require('express').Router();
const pokemonRoutes = require('./pokemon');
const googleApiRoutes = require('./googleLogin');
const logoutRoutes = require('./logout');
const localAuth = require('./localAuth');

pokemonRoutes(router);
googleApiRoutes(router);
logoutRoutes(router);
router.use('/', localAuth);

module.exports = router;