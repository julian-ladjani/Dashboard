'use strict';

const router = require('express').Router();
const pokemonRouter = require('./pokemon');
const weatherRouter = require('./weather');
const googleApiRoutes = require('./googleLogin');
const logoutRoutes = require('./logout');
const localAuth = require('./localAuth');

router.use('/pokemon', pokemonRouter);
googleApiRoutes(router);
logoutRoutes(router);
router.use('/', localAuth);
router.use('/weather', weatherRouter);

module.exports = router;