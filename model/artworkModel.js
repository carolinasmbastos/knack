const {connectionPool} = require("../db.js");

//api to find artwork, searching by artist Name
exports.findArtworkByArtistName = (artistName, result) => {
    connectionPool.query("SELECT * from Artwork aw, Artist a "
        +"where aw.idArtist = a.idArtist "
        +"and a.name like ? ", "%"+artistName+"%", (err, res)=>{

            if (err) {
                console.log("Error listing Artowork by Artists", err);
                result(err, null);
                
            } else {

                result(null, res);
            } 
    });
}

//