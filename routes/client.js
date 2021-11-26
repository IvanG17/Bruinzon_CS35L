const express = require('express') 
const router = express.Router() 

const {signup} = require('../controls/client');
const {signin} = require('../controls/client');
const {signout} = require('../controls/client');
const {signupValidator} = require('../design/validator');

const {trial} = require('../controls/client');

//router.get("/",trial )
router.post('/signout', signout)
router.post('/signup', signupValidator, signup);
router.post('/signin', signin);
module.exports = router; 