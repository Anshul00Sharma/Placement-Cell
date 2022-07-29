const mongoose = require("mongoose");
require("dotenv").config();

const MongoDB_URI = "mongodb://localhost/PlacementCell";
MongoDB_URII =
  "mongodb+srv://Sharma:n5L7GC4r9jgRb9gO@cluster0.rrarjfe.mongodb.net/PlacementCell?retryWrites=true&w=majority";

mongoose
  .connect(MongoDB_URII)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection"));

const db = mongoose.connection;

db.addListener(
  "error",
  console.error.bind(console, "Error connection to mongodb")
);

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
