const Faculty = require('../models/faculty-model');

const addFaculty = async (req, res) => {
    try {
        const faculty = new Faculty(req.body);
        const savedFaculty = await faculty.save();
        res.status(201).json(savedFaculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getFacultyById = async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        res.status(200).json(faculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteFaculty = async (req, res) => {
    try {
        const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedFaculty);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addFaculty, getAllFaculties, getFacultyById, deleteFaculty };
