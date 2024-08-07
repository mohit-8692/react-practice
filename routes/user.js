const express = require('express');
const router = express.Router();

const {registerUser} = require('../contorllers/userControllers');

router.post('/register',registerUser);
module.exports = router;

