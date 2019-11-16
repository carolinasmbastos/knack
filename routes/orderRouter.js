const express = require("express");
const router = express.Router();

let orderController = require('../controllers/orderController')

//Transaction routes
// Developer: Pratt
// Handle the rent or purchase of an Artwork
router.post('/orders', orderController.createOrder);

router.get('/paymentMethods/:userID', orderController.getPaymentMethods)

exports.orderRouter = router;