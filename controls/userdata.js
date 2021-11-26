const user = require('../design/userdata');

exports.findUser = (req,res,next,userID) => {
    user.findById(userID).exec((err,userdata) =>{
            if (err || !user) {
                return res.status(400).json({error: "User not found"})
            }
            req.profile = userdata;
            next(); // so this is middleware
        }
    )
}

