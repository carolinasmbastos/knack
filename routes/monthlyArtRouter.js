const express = require("express");
const router = express.Router();

let monthlyArtController = require('../controllers/monthlyArtController')

router.get('/plans', monthlyArtController.getPlans);

router.get('/users/:userID/monthlyArt', monthlyArtController.getSubscriptionStatus);

router.post('/subscriptions', monthlyArtController.subscribe)

exports.monthlyArtRouter = router;