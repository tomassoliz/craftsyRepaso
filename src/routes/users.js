const express = require('express');
const router = express.Router();

const { register, login, profile } = require('../controllers/usersController');

/* /users */

router
    .get('/register', register)
    .get('/login', login)
    .get('/profile', profile)

module.exports = router;
