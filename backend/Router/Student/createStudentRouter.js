const express = require('express');
const router = express.Router();

//schema
const Student = require('../../Schemas/Student.js');

//endpoints
// This is just for quick checking
router.route('/').get((req, res) => {
  Student.find({})
    .then(students => {
      if (students.length === 0) {
        res.status(404).json({ error: 'No students found!' });
      } else {
        res.status(200).json(students);
      }
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
  const student = req.body;
  Student.create(student)
    .then(student => res.status(201).json('Saved new student'))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
