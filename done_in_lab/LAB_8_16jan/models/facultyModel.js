const mongoose = require('mongoose')

const facultySchema = mongoose.Schema(
    {fid : {type : Number, require : true, unique : true},
    Name : {type : String, require : true},
    Dept : {type : String, require : true},
    Phone : {type : String, require : true},
    Experience : {type : Number, require : true},
    createdAt : {type : Date, default: Date.now}}
    )

module.export = mongoose.model('students', facultySchema)