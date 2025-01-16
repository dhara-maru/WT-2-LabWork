const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {pid : {type : Number, require : true, unique: true},
    name : {type : String, require : true},
    size : {type : String, require : true},
    quantity : {type : Number, require : true},
    price : {type : Number, require : true},
    addedAt : {type : Date, default: Date.now}}
    )

module.export = mongoose.model('products', productSchema)