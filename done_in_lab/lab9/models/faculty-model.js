const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    experience: { type: Number, required: true },
    designation: { type: String, required: true },
    salary: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Faculty', facultySchema);
