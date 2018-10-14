'use strict';

const pokemonApi = require('../controllers/pokemon');
const router = require('express').Router();

    // todoList Routes
    router
        .get('/blind/:gen', pokemonApi.get_random_pokemon);
    router
        .get('/team/:nbr', pokemonApi.get_team);
    router
        .get('/type/:type', pokemonApi.get_type);

module.exports = router;