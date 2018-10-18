'use strict';

const router = require('express').Router();
const pokemonRouter = require('./Pokemon/pokemon');
const weatherRouter = require('./Weather/weather');
const spotifyRouter = require('./Spotify/spotifyApi');
const getAll = require('../controllers/widget/getter');
const jwt = require('../controllers/auth/jwtAuth');
const auth = require('./auth/auth');

/*router
    .get('/', jwt.requireAuth, getAll.getWidgets);*/

router.use('/pokemon', pokemonRouter);
router.use('/auth', auth);
router.use('/weather', weatherRouter);
router.use('/spotify', spotifyRouter);

module.exports = router;
