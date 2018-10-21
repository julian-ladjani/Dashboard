'use strict';

const router = require('express').Router();

const apiRouter = require('../../api/routes/index');
const swagger = require('../documentation/swaggerGenerator');
const errorRoutes = require('./errors');

router.use('/', apiRouter);

router.get('/swagger', swagger);

router.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

errorRoutes(router);

module.exports = router;