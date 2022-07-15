const mongoose = require("mongoose");

const MongoDB_URI = "mongodb://localhost/PlacementCell";
mongoose.connect(MongoDB_URI);

const db = mongoose.connection;

db.addListener(
  "error",
  console.error.bind(console, "Error connection to mongodb")
);

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
