'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    generation: String,
    language: String,
    shiney: String,
    time: String,
};
let schema = schemaSetter.setModelSchema(params);
let pokemonBlind = mongoose.Schema(schema);


module.exports = mongoose.model('pokemonBlind', pokemonBlind);