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

exports.getPaymentMethods = (req, res) => {
  let userID = req.params.userID

  orderModel.getPaymentMethds(userID)
    .then(paymentMethods=>{res.send(paymentMethods)})
    .catch(err=>{res.send(err)})
}