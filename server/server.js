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
const cors = require('cors');

const serverRouter = require('./src/server/routes/index');

//mongoose

/*mongoose.connect(databaseConfig.databaseConfig.address, {
    promiseLibrary: global.Promise,
    useNewUrlParser: true
});*/

mongoose.connect(databaseConfig.databaseConfig.address);
mongoose.connection.once('open', function() {
    app.emit('ready');
});

//express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./src/api/controllers/auth/authTokenStrategy')(passport);
app.use(passport.session());
app.use('/', serverRouter);
app.use(cors());

app.on('ready', function() {
    app.listen(PORT, HOST, listenerCallback.listenCallback(PORT));
});
