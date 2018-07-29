const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    maxlength: 15
  },
  last_name: {
    type: String,
    require: true,
    maxlength: 15
  },
  classes: [{ type: ObjectId, ref: 'Class' }]
});

module.exports = mongoose.model('Student', studentSchema, 'students');
