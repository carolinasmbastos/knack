const {connectionPool} = require("../db.js");

// Developer: Pratt
exports.getArtGalleryByID = (artGalleryID, result) => {
    let sqlQuery = 'SELECT' + '\n' +
                        'name,' + '\n' +
                        'description' + '\n' +
                    'FROM' + '\n' +
                        'ArtGallery' + '\n' +
                    'WHERE' + '\n' +
                        'idArtGallery  = ?'

    connectionPool.query(sqlQuery, artGalleryID, (err, res)=>{
        if (err) {
            console.log("Error finding the ArtGallery", err);
            result(err, null);
        } else {
            result(null, res);
        } 
    });
}

// Developer: John

exports.getArtGalleries = (result) => {
    let sqlQuery = 'SELECT' + '\n' +
                        'name,' + '\n' +
                        'description' + '\n' 
                    
    connectionPool.query(sqlQuery,(err, res)=>{
        if (err) {
            console.log("Error finding the ArtGallery", err);
            result(err, null);
        } else {
            result(null, res);
        } 
    });
}
