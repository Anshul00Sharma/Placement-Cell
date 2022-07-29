// importing express for router
const express = require("express");
const router = express.Router();
// importing controller for inteview schedule
const interviewScheduleController = require("../controllers/interviewScheduling_controller");

// routes for fetching , adding and updating schedule
router.get(
  "/schedule-interview/:id",
  interviewScheduleController.scheduleInterview
);
router.post("/adding-student/:id", interviewScheduleController.addStudent);
router.post("/updating-result/:id", interviewScheduleController.updateResult);

// export router
module.exports = router;
