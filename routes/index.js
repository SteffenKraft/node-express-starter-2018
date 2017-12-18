const express = require('express');
const router = express.Router();
const controller = require('../controller');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', controller.homePage);

router.get('/add', catchErrors(controller.createStore));

module.exports = router;
