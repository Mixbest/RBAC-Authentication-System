const express = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const router = express.Router();

// Admin-only route
router.get('/admin', authenticate, authorize(['Admin']), (req, res) => {
  res.send('Welcome Admin');
});

// User and Admin route
router.get('/user', authenticate, authorize(['User', 'Admin']), (req, res) => {
  res.send('Welcome User');
});

module.exports = router;
