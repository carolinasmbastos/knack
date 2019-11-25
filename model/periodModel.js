const { cp } = require("../db/connection.js");
const { query } = require("../db/promise-mysql.js");

exports.getTimelinePeriods = () => {
  let sqlQuery = `SELECT idPeriod, periodDescription FROM Period
  UNION 
  SELECT 0, 'All'`;

  return query(cp, sqlQuery);
};
