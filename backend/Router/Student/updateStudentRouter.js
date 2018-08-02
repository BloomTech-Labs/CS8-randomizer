const express = require('express');

//schema
const Student = require('../../Schemas/Student.js');

const router = express.Router();

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Student.findById(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const updateInfo = req.body;
    Student.findByIdAndUpdate(id, updateInfo)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
