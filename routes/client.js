const express = require('express') 
const router = express.Router() 

const {trial} = require('../controls/client');

router.get('/', trial);
module.exports = router; 