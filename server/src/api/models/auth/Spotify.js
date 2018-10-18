'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Spotify = mongoose.Schema({
    user             : {
        id           : String
    },
    spotify          : {
        id           : String,
        token        : String,
        email        : String
    }

});

module.exports = mongoose.model('Spotify', Spotify);