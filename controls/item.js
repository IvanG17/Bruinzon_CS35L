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