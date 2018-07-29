const express = require('express');

//schema
const User = require('../../Schemas/User.js');
const router = express.Router();

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    User.findById(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .put((req, res) => {
    console.log("REQ>BODYSAYWHAT",req.body)
    const { id } = req.params;
    const updateInfo = req.body;
    User.findByIdAndUpdate({ _id: id }, {$push: {classes: updateInfo}},
      done)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
