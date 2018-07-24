const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    maxlength: 25
  },
  num_of_students: {
    type: Number,
    required: true,
  },
  participation: {
    type: Number,
    required: true,
  },
  // user: [{ type: ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Note', noteSchema, 'notes');
