'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User = new Schema({
    oauthID: Number,
    name: String,
    created: Date
});

module.exports = mongoose.model('User', User);