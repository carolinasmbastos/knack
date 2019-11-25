const { cp } = require("../db/connection.js");
const { query } = require("../db/promise-mysql.js");
const mysql = require("mysql");

exports.getPlans = () => {
  let sqlQuery = `SELECT * FROM Plan`;
  return query(cp, sqlQuery);
};

exports.subscribe = info => {
  let sqlQuery = `INSERT INTO Subscription (
    idCustomer, 
    idPlan, 
    idPaymentMethod, 
    artworkBalance,
    startDate, 
    endDate
  ) SELECT
    ${mysql.escape(info.idCustomer)},
    idPlan,
    ${mysql.escape(info.idPaymentMethod)},
    artworksCount,
    ${mysql.escape(new Date(info.startDate))},
    ${mysql.escape(new Date(info.endDate))}
  FROM
    Plan
  WHERE
    idPlan = ${mysql.escape(info.idPlan)}`;

  return query(cp, sqlQuery);
};

exports.getSubscriptionStatus = userID => {
  let sqlQuery = `SELECT
    endDate,
    artworkBalance,
    P.description AS planDescription,
    P.price AS planCost,
    P.timelineStart AS planYearStart,
    P.timelineEnd AS planYearEnd
  FROM
    Subscription S
      INNER JOIN Plan P ON S.idPlan = P.idPlan
  WHERE
    idCustomer = ${mysql.escape(userID)}
    AND ${mysql.escape(new Date())} BETWEEN startDate AND endDate`;

  return query(cp, sqlQuery);
};
