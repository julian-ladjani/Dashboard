'use strict';

const router = require('express').Router();
const pokemonRouter = require('./Pokemon/pokemon');
const weatherRouter = require('./Weather/weather');
const spotifyRouter = require('./Spotify/spotifyApi');
const epitechRouter = require('./Epitech/epitech');
const widgetSender = require('../controllers/widget/sender');
const jwt = require('../controllers/auth/jwtAuth');
const auth = require('./auth/auth');

router
    .get('/', jwt.requireAuth, widgetSender.sendWidgets);
router.use('/pokemon', pokemonRouter);
router.use('/auth', auth);
router.use('/weather', weatherRouter);
router.use('/spotify', spotifyRouter);
router.use('/epitech', epitechRouter);
module.exports = router;

