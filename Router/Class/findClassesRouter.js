const express = require('express');

//schema
const Class = require('../../Schemas/Class.js');

const router = express.Router();

router.route('/').get((req, res) => {
  Class.find({})
    .then(classes => {
      if (classes.length === 0) {
        res.status(404).json({ error: 'No classes found!' });
      } else {
        res.status(200).json(classes);
      }
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
