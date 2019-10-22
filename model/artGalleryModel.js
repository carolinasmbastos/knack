const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");

// Developer: Pratt
exports.getArtGalleryByID = (artGalleryID, result) => {
    let sqlQuery = `SELECT  
                        *
                    FROM 
                        ArtGallery 
                    WHERE 
                        idArtGallery  = ${artGalleryID}`

    console.log(sqlQuery)
    let options = {sql: sqlQuery, nestTables: true};

    return query(cp, options);
}

// Developer: John

exports.getArtGalleries = (result) => {
    let sqlQuery = `SELECT  
                        *
                    FROM 
                        ArtGallery `
                       
                    
    console.log(sqlQuery)
    let options = {sql: sqlQuery, nestTables: true};

    return query(cp, options);
}
