const express = require('express') 
const router = express.Router() 

const {create} = require("../controls/product");
const {signinrequired} = require("../controls/authentication");
const {isValidAuthUser} = require("../controls/authentication"); 
const {isValidAdminUser} = require("../controls/authentication"); 

const {findUser} = require('../controls/userdata');



router.post("/product/create/:userID", signinrequired, isValidAuthUser, isValidAdminUser, create)


router.param('userID',findUser);


module.exports = router; 