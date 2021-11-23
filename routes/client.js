const express = require('express') 
const router = express.Router() 

const {signup} = require('../controls/client');

router.post('/signup', signup);
module.exports = router; 