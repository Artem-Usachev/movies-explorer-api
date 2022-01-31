const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser } = require('../controllers/users');
const checkLogin = require('../controllers/login');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), checkLogin);
router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), createUser);

module.exports = router;
