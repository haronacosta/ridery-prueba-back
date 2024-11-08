const express = require('express');

const router = express.Router();

const { login, register, me } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const validateAuth = require('../middlewares/validateAuth');

router.post('/login', validateAuth(), login);

router.post('/register', validateAuth(true), register);

router.get('/me', authMiddleware, me);

module.exports = router;
