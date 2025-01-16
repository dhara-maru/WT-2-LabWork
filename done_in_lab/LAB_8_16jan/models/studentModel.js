const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    sid : {type : Number, require : true, unique : true},
    Name : {type : String, require : true},
    Age : {type : Number, require : true},
    Dept : {type : String, require : true},
    createdAt : {type : Date, default: Date.now}
 } )

module.export = mongoose.model('faculty', studentSchema)