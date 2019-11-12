const express = require("express");
const router = express.Router();

let eventController = require('../controllers/EventController')


//Developer: Carol
// EndPoint to fetch all the events from EventBride 
router.get('/events', eventController.getEvents)

exports.eventRouter = router;