const {connectionPool} = require("../db.js");

exports.findArtistByName = (artistName, result) => {
    connectionPool.query("SELECT name, nationality from Artist where name like CONCAT('%', ?,  '%')", artistName, (err, res)=>{
        if (err) {
            console.log("Error listing Artists", err);
            result(err, null);
            
        } else {

            result(null, res);
        } 
    });
}
