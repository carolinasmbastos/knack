const express = require("express");
const router = express.Router();

let orderController = require('../controllers/orderController')

//Transaction routes
// Developer: Pratt
// Handle the rent or purchase of an Artwork
router.post('/orders', orderController.createOrder);

exports.orderRouter = router;