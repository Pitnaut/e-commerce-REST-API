const express = require('express');
const router = express.Router();
const registerUser = require('../models/auth');

router.post('/', registerUser)

module.exports = router;


