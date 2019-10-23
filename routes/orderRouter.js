const express = require("express");
const router = express.Router();

let transactionModel = require("../model/transactionModel.js");

//Transaction routes
// Developer: Pratt
// Handle the rent or purchase of an Artwork
router.post('/placeOrder', (req, res) => {
    const purchaseInfo = {
        idCustomer: req.body.idCustomer,
        idArtwork: req.body.idArtwork,
        orderType: req.body.orderType,
        idPaymentMethod: req.body.idPaymentMethod,
        rentalStartDate: req.body.rentalStartDate,
        rentalEndDate: req.body.rentalEndDate
    }

    transactionModel.placeOrder(purchaseInfo)
    .then(result=>{res.send(result)})
    .catch(err=>{res.send(err)})
});

exports.orderRouter = router;