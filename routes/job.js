const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job_listing_controller");

router.get("/", jobController.fetchJob);

module.exports = router;
