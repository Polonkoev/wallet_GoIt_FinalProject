const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Set email for user"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  token: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
