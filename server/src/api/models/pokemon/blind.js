'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    max_generation: {type:Number, default:7},
    min_generation: {type:Number, default: 1},
    language: {type:String, default: 'en'},
    shiney: {type:Number, default: 0},
    time: {type:Number, default: 5},
};
let schema = schemaSetter.setModelSchema(params);
let pokemonBlind = mongoose.Schema(schema);


module.exports = mongoose.model('pokemonBlind', pokemonBlind);