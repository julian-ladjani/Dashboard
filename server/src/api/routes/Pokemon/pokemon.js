'use strict';

const pokemonApi = require('../../controllers/Pokemon/pokemon');
const jwt = require('../../controllers/auth/jwtAuth');
const router = require('express').Router();

    // todoList Routes
    router
        .get('/blind/:lang/((:gen)?/(:shiney)?)?', pokemonApi.getBlind);
    router
        .get('/name/:poke/((:lang)?/(:shiney)?)?', pokemonApi.getPokemon);
    router
        .get('/team/:nbr', pokemonApi.getTeam);
    router
        .get('/type/:type', pokemonApi.getType);

module.exports = router;