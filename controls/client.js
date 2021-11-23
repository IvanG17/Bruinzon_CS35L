const client = require('../design/client')
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

// exports.trial = (req, res) => {
//     res.json({message: "hello"}); 
// };