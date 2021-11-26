const express = require('express')
const router = express.Router()

const {findUser} = require('../controls/userdata');
const {signinrequired} = require('../controls/authentication'); // Use to restrict access to functions

router.param('userID',findUser);
router.get("/userdata/:userID", signinrequired, (req,res) => {
        res.json({
            userdata: req.profile
        })
    }
);

module.exports = router;