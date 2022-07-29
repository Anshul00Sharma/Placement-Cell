// importing express for router
const express = require("express");
const router = express.Router();

// importing csv controller
const csvController = require("../controllers/csv_controller");

// route for downloading csv file
router.get("/download", csvController.downloadCSV);

// exporting router
module.exports = router;
