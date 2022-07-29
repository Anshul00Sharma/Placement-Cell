// import express for router
const express = require("express");
const router = express.Router();

// importing student controller
const studentsController = require("../controllers/students_controller");

// routes for fetch and creating student
router.get("/fetch", studentsController.fetchStudents);
router.post("/create-student", studentsController.createStudent);

// export router
module.exports = router;
