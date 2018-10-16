'use strict';

const router = require('express').Router();
const local = require('./localAuth');
const google = require('./googleAuth');
const logout = require('./logout');
const spotify = require('./spotifyAuth');

router.use('/local', local);
router.use('/google', google);
router.use('/logout', logout);
router.use('/spotify', spotify);

module.exports = router;