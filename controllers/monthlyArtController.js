let monthlyArtModel = require("../model/monthlyArtModel.js");

exports.getPlans = (req, res) => {
  monthlyArtModel.getPlans()
    .then(plans=>{res.send(plans)})
    .catch(err=>{res.send(err)})
}

exports.subscribe = (req, res) => {
  monthlyArtModel.subscribe(req.body)
    .then(result=>{res.send(result)})
    .catch(err=>{res.send(err)})
}

exports.getSubscriptionStatus = (req, res) => {
  monthlyArtModel.getSubscriptionStatus(req.params.userID)
  .then(result=>{res.send(result)})
  .catch(err=>{res.send(err)})
}