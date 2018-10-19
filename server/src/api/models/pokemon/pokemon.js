'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pokemon = mongoose.Schema({
    user             : {
        id           : String
    },
    pokemon          : {
        blind        : {
            time        : String,
            generation  : String,
            show        : Boolean
        },
        team         : {
            current  : String,
            team     : Array,
            show     : Boolean
        },
        type         : {
            current  : String,
            show     : Boolean
        },
    }

});

module.exports = mongoose.model('Pokemon', Pokemon);