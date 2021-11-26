const client = require('../design/client');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { errorHandler } = require('../design/error_handling')

exports.signup = (req, res) => {
    console.log("req.body", req.body)
    const customer = new client(req.body)
    customer.save((err, customer) => {
        if (err){
            //return res.status(400).json({err});
            //console.log("fail")
           // return res.status(400).json({err: errorHandler(err)});
           return res.status(400).json({err});
        }
        res.json({
            customer
        });
    });
};

exports.trial = (req, res) => {
    res.json({message: "hello"});
};

exports.signin = (req, res) => {
    const {email, password} = req.body
    client.findOne({email}, (err, customer) => {
        if (err || !customer){
            return res.status(400).json({
                error: 'User with email do not exist.'
            });
        }

        if (!customer.compare(password)){
            return res.status(401).json({error : "Wrong password"})
        }
    

        const token = jwt.sign({_id: customer._id}, process.env.JWT_ID);
        res.cookie('token', token, {expire: new Date() + 9999})

        const {_id, name, email, role} = customer;
        return res.json({token, customer: {_id, email , name , role}});
    });
};

exports.signout = (req,res) => {
    res.clearCookie('token');
    res.json({message:'User successfully signed out'});
};