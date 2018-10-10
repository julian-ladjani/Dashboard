'use strict';

const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const app = express();

// App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./src/api/routes/pokemonApiRoutes'); //importing route
routes(app);


app.get('/', (req, res) => {
    res.status(200).send('Hello world\n');
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


