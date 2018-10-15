'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TokenBlacklist = mongoose.Schema({
    token : String
});

module.exports = mongoose.model('tokenBlacklist', TokenBlacklist);