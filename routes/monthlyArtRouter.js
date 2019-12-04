const express = require("express");
const router = express.Router();

let monthlyArtController = require('../controllers/monthlyArtController')

// Developer: Pratt
// Endpoint to fetch all available Subscription Plans
router.get('/plans', monthlyArtController.getPlans);

// Developer: Pratt
// Endpoint to fetch Subscribed Plans details
router.get('/users/:userID/monthlyArt', monthlyArtController.getSubscriptionStatus);

// Developer: Pratt
// Endpoint to Subscribe a user to a Plan
router.post('/subscriptions', monthlyArtController.subscribe)

exports.monthlyArtRouter = router;