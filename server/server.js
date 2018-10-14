'use strict';

const express = require('express');
const passport = require('passport');
const listenerCallback = require('./src/server/callback/startingListener');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const databaseConfig = require('./src/api/config/database')
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const app = express();

const serverRouter = require('./src/server/routes/index');

//mongoose

mongoose.connect(databaseConfig.databaseConfig.address, {
    promiseLibrary: global.Promise,
    useNewUrlParser: true
});

//express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./src/api/controllers/authTokenStrategy')(passport);
app.use(passport.session());
app.use('/', serverRouter);

//server
app.listen(PORT, HOST, listenerCallback.listenCallback(PORT));
