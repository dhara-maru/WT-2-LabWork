const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: Number, required: true },
    enrollmentNo: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);
