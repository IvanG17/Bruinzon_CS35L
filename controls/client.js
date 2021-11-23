const client = require('../design/client')

exports.signup = (req, res) => {
    console.log("req.body", req.body)
    const customer = new client(req.body)
    customer.save((err, customer) => {
        if (err){
            return res.status(400).json({error});
        }
        res.json({
            customer
        });
    })
};