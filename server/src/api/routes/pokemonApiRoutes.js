'use strict';

module.exports = function(router) {
    const pokemonApi = require('../controllers/pokemonApiController');

    // todoList Routes
    router
        .get('/pokemon', pokemonApi.get_random_pokemon);
};