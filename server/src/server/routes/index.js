'use strict';

const router = require('express').Router();

const apiRouter = require('../../api/routes/index');
const errorRoutes = require('./errors');

router.use('/', apiRouter);

router.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

errorRoutes(router);

module.exports = router;