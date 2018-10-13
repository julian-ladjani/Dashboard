'use strict';

const express = require('express');
const listenerCallback = require('./src/server/callback/startingListenerCallback');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const app = express();

const serverRouter = require('./src/server/routes/index');


// App
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', serverRouter);

app.listen(PORT, HOST, listenerCallback.listenCallback(PORT));


