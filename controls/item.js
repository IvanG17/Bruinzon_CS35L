const formidable = require('formidable'); 
const lodash =  require('lodash');
const fs = require('fs')
const Item = require('../design/item');
const { errorHandler } = require('../design/error_handling')




exports.del = (req, res) => {
    let itemID = req.item; 
    itemID.remove((err, rem) => {
        if (err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
        
            success : "removed"
        });
    });
};

exports.findItem = (req, res, next, id) => {
    Item.findById(id).exec((err, item) =>{
        if (err){
            return res.status(400).json({
                error: "Error finding item" 
            });
        } else if (!item){
            return res.status(400).json({
                error: "Item does not exist"
            });
        }

        req.item = item;
        next(); 
    });
};

exports.read = (req, res) => {
    req.item.photo = undefined; 
    return res.json(req.item)
}

exports.create = (req, res) => {
    let form = new formidable.IncomingForm() 
    form.keepExtensions = true 

    form.parse(req, (err, fields, files) => {
        if (err){
            //console.log('PHOTO UPLOAD ERROR ----->', err)
            return res.status(400).json({
                error : "Image upload failed"
            })
        }

        // name, description, price, productType, quantity, photo, validShipping
        const {name, description, price, productType, quantity, validShipping} = fields;
        if (!name || !description || !price || !productType || !quantity || !validShipping) {
            return res.status(400).json({
                error : "All required fields have not been filled in"
            })
        }


        let item = new Item(fields) 
        if (files.photo){
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error : "Image size is too big, should be <1MB"
                })
            }
            item.photo.data = fs.readFileSync(files.photo.path)
            item.photo.contentType = files.photo.type
        }

        item.save((err, result) => {
            if (err){
                res.result(400).json({
                    error : errorHandler(err)
                });
            }
            res.json(result)

        })

    });


};



exports.write = (req, res) => {
    let form = new formidable.IncomingForm() 
    form.keepExtensions = true 

    form.parse(req, (err, fields, files) => {
        if (err){
            //console.log('PHOTO UPLOAD ERROR ----->', err)
            return res.status(400).json({
                error : "Image upload failed"
            })
        }

        // name, description, price, productType, quantity, photo, validShipping
        const {name, description, price, productType, quantity, validShipping} = fields;
        if (!name || !description || !price || !productType || !quantity || !validShipping) {
            return res.status(400).json({
                error : "All required fields have not been filled in"
            })
        }


        let item = req.item
        item = lodash.extend(item, fields)

        if (files.photo){
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error : "Image size is too big, should be <1MB"
                })
            }
            item.photo.data = fs.readFileSync(files.photo.path)
            item.photo.contentType = files.photo.type
        }

        item.save((err, result) => {
            if (err){
                res.result(400).json({
                    error : errorHandler(err)
                });
            }
            res.json(result)

        })

    });

};

/*
Sort and return the products based on different parameters
Sort by the popular products: products?sortwith=numberSold&order=desc&max=4
Sort by the newest products: products?sortwith=createdAt&order=desc&max=4
If there are no other parameters, so return all parameters ordered by id
 */

exports.listItems = (req,res) => {

    let order = req.query.order ? req.query.order : 'asc';
    let sortwith = req.query.sortwith ? req.query.sortwith : '_id';
    let max = req.query.max ? parseInt(req.query.max) : 6;

    Item.find()
        .select("-photo") // We don't want to return the photos, huge file size
        .populate('productType')
        .sort([[sortwith, order]])
        .limit(max)
        .exec((err,data) => {
            if (err) {
                return res.status(400).json({error:"Items not found"})
            }
            res.json(data)
        })

}

exports.listRelated = (req,res) => {

    let max = req.query.max ? parseInt(req.query.max) : 4;

    Item.find({_id: { $ne: req.item._id}, productType: req.item.productType})
        .select("-photo")
        .limit(max)
        .populate('productType', '_id name')
        .exec((err,data) => {
            if (err) {
                return res.status(400).json({error:"Items not found"})
            }
            res.json(data)
        })

}

exports.listProductTypes = (req,res) => {

    Item.distinct("productType",{}, (err,data) => {
        if (err) {
            return res.status(400).json({error:"Items not found"})
        }
        res.json(data)
    })

}



