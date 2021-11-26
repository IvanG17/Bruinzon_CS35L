const product = require('../design/product');
const { errorHandler } = require('../design/error_handling')


exports.create = (req, res) => {
    const prod = new product(req.body)
    prod.save((err, name) =>{
        if (err){
            return res.status(400).json({
                error: errorHandler(err)
            });


        }
        res.json({name});

    })
}
