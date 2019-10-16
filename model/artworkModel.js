const {connectionPool} = require("../db.js");

//api to find artwork, searching by artist Name


exports.findArtworkByArtistName = (artistName, result) => {

    var options = {sql: "SELECT * from Artwork artwork, Artist artist "
    +"where artwork.idArtist = artist.idArtist "
    +"and artist.name like ? ", nestTables: true};


    connectionPool.query(options, "%"+artistName+"%", (err, res)=>{

            if (err) {
                console.log("Error listing Artowork by Artists", err);
                result(err, null);
                
            } else {

                result(null, res);
            } 
    });
}

//