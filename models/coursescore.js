//Schema for course scores of particular student
const mongoose = require("mongoose");

// schema for storing all the scores
const courseScoreSchema = new mongoose.Schema(
  {
    dsa: {
      type: Number,
      required: true,
    },
    webd: {
      type: Number,
      required: true,
    },
    react: {
      type: Number,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  },
  {
    timestamps: true,
  }
);

// exporting schema
const CourseScore = mongoose.model("CourseScore", courseScoreSchema);
module.exports = CourseScore;
