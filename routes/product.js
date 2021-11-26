const express = require('express') 
const router = express.Router() 

const {create} = require("../controllers/product")



router.post("/product/create", create)


module.exports = router; 