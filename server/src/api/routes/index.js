'use strict';

const router = require('express').Router();
const jwt = require('../controllers/auth/jwtAuth');
const auth = require('./auth/auth');

const widgetSender = require('../controllers/widget/sender');
const widgetRouter = require('../routes/widget/widgetRouter');
const widgetAbout = require('../controllers/widget/about');

router
    .get('/', jwt.requireAuth, widgetSender.sendWidgets);

router
    .get('/about.json', widgetAbout);

router.use('/auth', auth);
widgetRouter(router);
module.exports = router;

