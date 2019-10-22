const mysql = require("mysql");

//Create a pool of connections
const connectionPool = mysql.createPool({
  host: 'carolinabastos.wmdd.ca',
  user: 'owl_knack',
  port: '3306',
  password: '&a20pAq8',
  database: 'owl_knack',
  multipleStatements: true,
  connectionLimit: 100
});

exports.cp = connectionPool;

