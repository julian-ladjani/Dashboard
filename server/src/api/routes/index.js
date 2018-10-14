'use strict';

const router = require('express').Router();
const pokemonRouter = require('./pokemon');
const weatherRouter = require('./weather');
const googleApiRoutes = require('./googleLogin');
const logoutRoutes = require('./logout');

router.use('/pokemon', pokemonRouter);
googleApiRoutes(router);
logoutRoutes(router);
router.use('/weather', weatherRouter);

module.exports = router;