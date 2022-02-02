const router = require('express').Router();
const { signinValidator, signupValidator } = require('../utils/validator');
const { createUser } = require('../controllers/users');
const checkLogin = require('../controllers/login');

router.post('/signin', signinValidator, checkLogin);
router.post('/signup', signupValidator, createUser);

module.exports = router;
