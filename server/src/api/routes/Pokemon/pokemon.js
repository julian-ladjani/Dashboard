'use strict';

const pokemonApi = require('../../controllers/Pokemon/pokemon');
const router = require('express').Router();

    // todoList Routes
    router
        .get('/blind/:gen', pokemonApi.getRandomPokemon);
    router
        .get('/team/:nbr', pokemonApi.getTeam);
    router
        .get('/type/:type', pokemonApi.getType);

module.exports = router;