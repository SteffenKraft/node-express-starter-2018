const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController');
const userController = require('../controller/userController')
const authController = require('../controller/authController')
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:id', catchErrors(storeController.getStoreById));
router.post('/stores/:id/edit', catchErrors(storeController.editStore));
router.post('/add', catchErrors(storeController.createStore));
router.get('/tags', catchErrors(storeController.getStoresByTag));
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag));

router.get('/user',
    authController.isLoggedIn,
    userController.user
);

router.post('/register',
    userController.validateRegister,
    userController.register,
    authController.login,
);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
