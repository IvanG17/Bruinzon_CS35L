const express = require('express') 
const router = express.Router() 

const {signup} = require('../controls/client');
const {signupValidator} = require('../design/validator')

//const {trial} = require('../controls/client');

//router.get("/",trial )

router.post('/signup', signupValidator, signup);
module.exports = router; 