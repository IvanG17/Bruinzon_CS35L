const mongoose = require('mongoose')
const crypto = require('crypto') // hash password, library from node.js
const id = require('uuid/v1')

const clientSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true, 
        required : true, 
        maxlength : 64
    },
    email : {
        type : String,
        trim : true, 
        required : true, 
        unique : 64
    },
    password : {
        type : String, 
        required : true, 


    }, 

    profile: {
        type: String, 
        trim : true
    }, 

    hashing : String, 
    role : {
        type : Number, 
        default : 0
    }, 

    history: {
        type : Array, 
        default : []
    }

    
},  {timestamps: true});