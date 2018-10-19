'use strict';

const router = require('express').Router();

const pokemonRouter = require('./pokemon/pokemon');
const spotifyRouter = require('./spotify/spotifyApi');
const epitechRouter = require('./epitech/epitech');
const jwt = require('../controllers/auth/jwtAuth');
const auth = require('./auth/auth');

const widgetSender = require('../controllers/widget/sender');
const widgetRouter = require('../routes/widget/widgetRouter');
const widgetAbout = require('../controllers/widget/about');

router
    .get('/', jwt.requireAuth, widgetSender.sendWidgets);

router
    .get('/about.json', widgetAbout);

router.use('/pokemon', pokemonRouter);
router.use('/auth', auth);
widgetRouter(router);
router.use('/spotify', spotifyRouter);
router.use('/epitech', epitechRouter);
module.exports = router;

