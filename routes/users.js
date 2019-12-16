const express = require('express');
const router = express.Router();

const usersController = require('../controllers/userController');

/* GET users listing. */
router.get('/users', usersController)

module.exports = router;
