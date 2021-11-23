const express = require('express') 
const router = express.Router() 

const {signup} = require('../controls/client');

//const {trial} = require('../controls/client');

//router.get("/",trial )

router.post('/signup', signup);
module.exports = router; 