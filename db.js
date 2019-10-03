var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'carolinabastos.wmdd.ca',
  user: 'owl_knack',
  port: '3306',
  password: '&a20pAq8',
  database: 'owl_knack'
})

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;