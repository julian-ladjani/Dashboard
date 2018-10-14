'use strict';

module.exports = function(router) {
    const pokemonApi = require('../controllers/pokemon');

    // todoList Routes
    router
        .get('/pokemon', pokemonApi.get_random_pokemon);
};