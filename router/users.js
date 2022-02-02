const express = require('express');
const { updateUserValidator } = require('../utils/validator');

const router = express.Router();
const {
  updateUser,
  getCurrentUser,
} = require('../controllers/users');

router.get('/api/users/me', getCurrentUser);
router.patch('/api/users/me', updateUserValidator, updateUser);

module.exports = router;
