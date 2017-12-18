const express = require('express');
const router = express.Router();
const controller = require('../controller');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(controller.getStores));
router.get('/stores', catchErrors(controller.getStores));
router.get('/stores/:id', catchErrors(controller.getStoreById));
router.get('/stores/:id/edit', catchErrors(controller.editStore));
router.get('/add', catchErrors(controller.createStore));

module.exports = router;
