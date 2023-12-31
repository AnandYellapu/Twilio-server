// const express = require('express');
// const router = express.Router();
// const userController = require('../controller/userController');
// const authenticateToken = require('../middleware/authenticateToken');


// router.post('/register', userController.register);
// router.post('/login', userController.login);
// router.post('/forgot-password', userController.forgotPassword);
// router.post('/reset-password/:token', userController.resetPassword);
// router.get('/profile', authenticateToken, userController.getProfile);


// module.exports = router;




const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password/:token', userController.resetPassword);
router.get('/activate', userController.activateAccount);
router.get('/profile', authenticateToken, userController.getProfile);

module.exports = router;
