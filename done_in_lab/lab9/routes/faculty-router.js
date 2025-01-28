const express = require('express');
const router = express.Router();
const { addFaculty, getAllFaculties, getFacultyById, deleteFaculty } = require('../controllers/faculty-controller');

router.post('/create', addFaculty);
router.get('/', getAllFaculties);
router.get('/:id', getFacultyById);
router.delete('/delete/:id', deleteFaculty);

module.exports = router;
