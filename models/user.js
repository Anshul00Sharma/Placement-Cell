// importing mongoose
const mongoose = require("mongoose");
// creating user schema for Authentication
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// exporting user schema
const User = mongoose.model("User", userSchema);
module.exports = User;
