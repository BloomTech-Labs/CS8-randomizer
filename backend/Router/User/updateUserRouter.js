const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require('jsonwebtoken');

const secret = 'no size limit on tokens';

function makeToken(user) {
  const timestamp = new Date().getTime();
  const payload = {
    sub: user._id,
    username: user.username,
    iat: timestamp
  };

  const options = { expiresIn: '300000' }; // 300,000 milliseconds or 5 minutes
  return jwt.sign(payload, secret, options);
}

//schema
const User = require("../../Schemas/User.js");

router
  .route("/:id")
  // .get((req, res) => {
  //   const { id } = req.params;
  //   User.findById(id)
  //     .then(response => {
  //       res.json(response);
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // })
  .put((req, res) => {
    const { id } = req.params;
    const updateInfo = req.body;
    console.log("UPDATE_INFO:", updateInfo)

    User.findOneAndUpdate(
      { _id: id },
      {
        username: updateInfo.username,
        password: updateInfo.password
      }
    )
      .then(response => {
        
        response.save()
        // const token = makeToken(response);
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
