const express = require("express");
const router = express.Router();
const authenticate = require('../../authenticate');

//schema
const User = require("../../Schemas/User.js");

//endpoints
router.post("/", authenticate, (req, res) => {
  res.json({
    success: `${req.user.username}, you are logged in!`,
    token: makeToken(req.user),
    user: req.user
  });
});

module.exports = router;
