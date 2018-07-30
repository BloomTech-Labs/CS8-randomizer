const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
// const uuidv4 = require("uuid/v4");

const subSchema = new mongoose.Schema({
  first_name: {
    type: String,
    maxlength: 25
  },
  last_name: {
    type: String,
    maxlength: 25
  }
});

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      maxlength: 25
    },
    num_of_students: {
      type: Number
    },
    participation: {
      type: Number
    },
    students: [subSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Class", classSchema, "classes");
