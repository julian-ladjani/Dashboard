'use strict';

const router = require('express').Router();
const spotify = require('../../controllers/Spotify/spotifyApi');

    // todoList Routes
    router.get('/', spotify.get_search);


module.exports = router;