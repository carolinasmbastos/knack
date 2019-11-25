let periodModel = require("../model/periodModel.js");

exports.getTimelinePeriods = (req, res) => {
  periodModel
    .getTimelinePeriods()
    .then(timelines => {
      res.send(timelines);
    })
    .catch(err => {
      res.send(err);
    });
};
