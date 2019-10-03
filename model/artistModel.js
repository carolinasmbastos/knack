var sql = require('../db.js');

exports.listArtists = (artistName, result) => {
    sql.query("SELECT name, birthDate from artist where name like CONCAT('%', ?,  '%')", artistName, (err, res)=>{
        if (err) {
            console.log("Error listing Artists", err);
            result(err, null);
            
        } else {

            result(null, res);
        } 
    });
}
