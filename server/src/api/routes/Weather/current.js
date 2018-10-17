'use strict';

const router = require('express').Router();
const jwt = require('../../controllers/auth/jwtAuth');
const current = require('../../controllers/Weather/current');

// Weather Routes
router
    .get('/:uniqueId', jwt.requireAuth, current.sendWidget);

router
    .get('/', jwt.requireAuth, current.sendWidgets)
    .post('/', jwt.requireAuth, current.addWidget);

/*router
    .post('/:uniqueId/params', jwt.requireAuth, current.setWidgetParamsByUniqueId);*/

module.exports = router;
