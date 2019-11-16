const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");
const mysql = require('mysql')

exports.getPlans = () => {
  let sqlQuery = `SELECT * FROM Plan`
  return query(cp, sqlQuery);
}

exports.subscribe = (info) => {
  let sqlQuery = `INSERT INTO Subscription (
    idCustomer, 
    idPlan, 
    idPaymentMethod, 
    startDate, 
    endDate
  ) VALUES (
    ${mysql.escape(info.idCustomer)},
    ${mysql.escape(info.idPlan)},
    ${mysql.escape(info.idPaymentMethod)},
    ${mysql.escape(new Date(info.startDate))},
    ${mysql.escape(new Date(info.endDate))}
  )`
  return query(cp, sqlQuery);
}

exports.getSubscriptionStatus = userID => {
  let sqlQuery = `SELECT
    endDate,
      P.description AS planDescription,
      P.price AS planCost
  FROM
    Subscription S
      INNER JOIN Plan P ON S.idPlan = P.idPlan
  WHERE
    idCustomer = ${mysql.escape(userID)}
    AND CURRENT_TIMESTAMP() BETWEEN startDate AND endDate`
  
  return query(cp, sqlQuery);
}