const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents, getStudentById, deleteStudent } = require('../controllers/student-controller');

router.post('/create', addStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.delete('/delete/:id', deleteStudent);

module.exports = router;
