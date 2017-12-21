const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController');
const userController = require('../controller/userController')
const authController = require('../controller/authController')
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/api', catchErrors(storeController.getStores));
router.get('/api/stores', catchErrors(storeController.getStores));
router.get('/api/stores/:id', catchErrors(storeController.getStoreById));
router.post('/api/stores/:id/edit', catchErrors(storeController.editStore));
router.post('/api/add', catchErrors(storeController.createStore));
router.get('/api/tags', catchErrors(storeController.getStoresByTag));
router.get('/api/tags/:tag', catchErrors(storeController.getStoresByTag));
router.get('/api/searchStores', catchErrors(storeController.searchStores));

router.get('/api/user',
    authController.isLoggedIn,
    userController.user
);

router.post('/api/user',
    authController.isLoggedIn,
    catchErrors(userController.updateUser)
);

router.post('/api/register',
    userController.validateRegister,
    userController.register,
    authController.login,
);
router.post('/api/login', authController.login);
router.get('/api/logout', authController.logout);

module.exports = router;
