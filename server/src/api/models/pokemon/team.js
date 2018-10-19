'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    team    : {
        0   : {
            name: String,
            script: String,
        },
        1   : {
            name: String,
            script: String,
        },
        2   : {
            name: String,
            script: String,
        },
        3   : {
            name: String,
            script: String,
        },
        4   : {
            name: String,
            script: String,
        },
        5   : {
            name: String,
            script: String,
        }
    }
};
let schema = schemaSetter.setModelSchema(params);
let pokemonTeam = mongoose.Schema(schema);


module.exports = mongoose.model('pokemonTeam', pokemonTeam);