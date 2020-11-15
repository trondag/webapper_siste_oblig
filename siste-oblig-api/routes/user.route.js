var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller')

router.get('/', UserController.getUsers)
router.post('/', UserController.createUser)
router.get('/login', UserController.loginUser)

module.exports = router;