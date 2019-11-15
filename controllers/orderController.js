let orderModel = require("../model/orderModel.js");

exports.createOrder = (req, res) => {
    const purchaseInfo = {
        idCustomer: req.body.idCustomer,
        idArtwork: req.body.idArtwork,
        orderType: req.body.orderType,
        idPaymentMethod: req.body.idPaymentMethod,
        rentalStartDate: req.body.rentalStartDate,
        rentalEndDate: req.body.rentalEndDate
    }

    orderModel.createOrder(purchaseInfo)
    .then(result=>{res.send(result)})
    .catch(err=>{res.send(err)})
}