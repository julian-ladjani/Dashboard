'use strict';

const router = require('express').Router();
const pokemonRouter = require('./pokemon');
const weatherRouter = require('./weather');
const spotifyRouter = require('./spotifyApi');
const auth = require('./auth/auth');

router.use('/pokemon', pokemonRouter);
router.use('/auth', auth);
router.use('/weather', weatherRouter);
router.use('/spotify', spotifyRouter);

module.exports = router;