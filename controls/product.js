const Product = require('../design/product');
const { errorHandler } = require('../design/error_handling')


exports.create = (req, res) => {
    const product = new Product(req.body)
    product.save((err, name) =>{
        if (err){
            return res.status(400).json({
                error: errorHandler(err)
            });


        }
        res.json({name});

    })
}


exports.findProduct = (req, res, next, objID) => {
    Product.findById(objID).exec((err, prod) => {
        if (err){
            return res.status(400).json({
                error : errorHandler(err)
            });
        } else if (!prod){
            return res.status(400).json({
                error: "Does not exist"
            }); 
        }
        req.product = prod; 
        next();
    });
}


exports.read = (req, res) => {
    return res.json(req.product)
}