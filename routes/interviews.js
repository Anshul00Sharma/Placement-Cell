// importing express for router
const express = require("express");
const router = express.Router();

// importing interview controller
const interviewController = require("../controllers/interviews_controller");

// create and fetch routes
router.post("/create-interview", interviewController.createInterview);
router.get("/fetch-interview", interviewController.fetchInterview);

// export router
module.exports = router;
