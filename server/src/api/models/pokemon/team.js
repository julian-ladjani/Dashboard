'use strict';

const mongoose = require('mongoose');
const schemaSetter = require('../widget/schemaSetter');

let params = {
    team    : {
        0   : {
            name: {type:String, default:'pikachu'}
        },
        1   : {
            name: {type:String, default:'pikachu'}
        },
        2   : {
            name: {type:String, default:'pikachu'}
        },
        3   : {
            name: {type:String, default:'pikachu'}
        },
        4   : {
            name: {type:String, default:'pikachu'}
        },
        5   : {
            name: {type:String, default:'pikachu'}
        }
    }
};
let schema = schemaSetter.setModelSchema(params);
let pokemonTeam = mongoose.Schema(schema);


module.exports = mongoose.model('pokemonTeam', pokemonTeam);