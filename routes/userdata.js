const express = require('express')
const router = express.Router()

const {findUser} = require('../controls/userdata');
const {signinrequired} = require('../controls/authentication'); // Use to restrict access to functions
const {isValidAuthUser} = require('../controls/authentication'); // Use to restrict access to functions, hide other profiles
const {isValidAdminUser} = require('../controls/authentication'); // Use to restrict access to functions to admins


router.param('userID',findUser);
router.get("/userdata/:userID", signinrequired, isValidAuthUser, (req,res) => {
        res.json({
            userdata: req.profile
        })
    }
);

module.exports = router;