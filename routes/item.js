const express = require('express') 
const router = express.Router() 

const {create, findItem, read} = require("../controls/item");
const {signinrequired} = require("../controls/authentication");
const {isValidAuthUser} = require("../controls/authentication"); 
const {isValidAdminUser} = require("../controls/authentication"); 

const {findUser} = require('../controls/userdata');

router.get("/item/:itemID", read)
router.post("/item/create/:userID", signinrequired, isValidAuthUser, isValidAdminUser, create)


router.param('userID',findUser);
router.param('itemID', findItem)

module.exports = router; 