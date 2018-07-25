const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    maxlength: 25
  },
  num_of_students: {
    type: Number,
  },
  participation: {
    type: Number,
  },
  students: [{ type: ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Class', classSchema, 'classes');
