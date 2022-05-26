//* external imports
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
