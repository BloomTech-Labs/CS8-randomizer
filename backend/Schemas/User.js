const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
    unique: true
  },
  classes: [
    {
      type: ObjectId,
      ref: "Class"
    }
  ],
  subscription: {
    type: String,
    default: "trial"
  }
});

// userSchema.pre('update', function(next) {
//   this.findOne({"_id":this.getUpdate().$set._id},function(err, doc){
//     if(doc.password != this.getUpdate().$set.password){
//       this.getUpdate().$set.password = bcrypt.hashSync(this.getUpdate().$set.password, 10);
//     }
//     next();
//   })
// });

userSchema.pre("save", function(next) {
  // Do this before any call of save() method
  bcrypt.hash(this.password, 10).then(hash => {
    this.password = hash;
    next();
  });
});

userSchema.methods.verifyPassword = function(guess, callback) {
  bcrypt.compare(guess, this.password, function(err, isValid) {
    if (err) {
      return callback(err);
    }
    callback(null, isValid);
  });
};

module.exports = mongoose.model("User", userSchema, "users");
