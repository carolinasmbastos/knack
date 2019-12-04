const express = require("express");
const router = express.Router();

let periodController = require("../controllers/periodController");

// Developer: Pratt
// Fetch all timeline periods and their date range for use in the timeline filter compoenent
router.get("/periods", periodController.getTimelinePeriods);

exports.periodRouter = router;
