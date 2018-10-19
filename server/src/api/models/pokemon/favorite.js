'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    pokemon: {type:String, default:'pikachu'},
    language: {type:String, default:'en'},
    shiney: {type:Number, default: 0}
};
let schema = schemaSetter.setModelSchema(params);
let pokemonFavorite = mongoose.Schema(schema);


module.exports = mongoose.model('pokemonFavorite', pokemonFavorite);