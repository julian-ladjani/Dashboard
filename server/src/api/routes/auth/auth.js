'use strict';

const router = require('express').Router();
const local = require('./localAuth');
const google = require('./googleAuth');
const logout = require('./logout');

router.use('/local', local);
router.use('/google', google);
router.use('/logout', logout);

module.exports = router;