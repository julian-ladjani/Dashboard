'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    current : String
};
let schema = schemaSetter.setModelSchema(params);
let pokemonType = mongoose.Schema(schema);


module.exports = mongoose.model('pokemonType', pokemonType);