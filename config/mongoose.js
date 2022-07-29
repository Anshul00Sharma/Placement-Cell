// importing mongoose
const mongoose = require("mongoose");
require("dotenv").config();

// mongodb URL
const MongoDB_URI = "mongodb://localhost/PlacementCell";

mongoose
  .connect(process.env.MongoDB_URI || MongoDB_URI)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection"));

const db = mongoose.connection;

// error handling
db.addListener(
  "error",
  console.error.bind(console, "Error connection to mongodb")
);
db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

// exporting db
module.exports = db;
