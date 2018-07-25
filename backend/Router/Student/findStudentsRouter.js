const express = require('express');

//schema
const Student = require('../../Schemas/Student.js');

const router = express.Router();

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

module.exports = router;
