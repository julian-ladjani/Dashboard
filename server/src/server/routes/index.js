'use strict';

const router = require('express').Router();

const apiRouter = require('../../api/routes/index');
const errorRoutes = require('./errors');

router.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

router.use('/', apiRouter);
//errorRoutes(router);
module.exports = router;