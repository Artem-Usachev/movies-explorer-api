const router = require('express').Router();
const { signinValidator, signupValidator } = require('../utils/validator');
const { createUser } = require('../controllers/users');
const checkLogin = require('../controllers/login');

router.post('/api/signin', signinValidator, checkLogin);
router.post('/api/signup', signupValidator, createUser);

module.exports = router;
