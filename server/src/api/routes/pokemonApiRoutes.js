'use strict';

module.exports = function(app) {
    const pokemonApi = require('../controllers/pokemonApiController');

    // todoList Routes
    app.route('/pokemon')
        .get(pokemonApi.get_random_pokemon);

};