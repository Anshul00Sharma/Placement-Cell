// importing express for router
const express = require("express");
const router = express.Router();

// controller for joblisting
const jobController = require("../controllers/job_listing_controller");

router.get("/", jobController.fetchJob);

// exporting router
module.exports = router;
