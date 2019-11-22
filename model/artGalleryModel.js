const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");

// Developer: Pratt
exports.getArtGalleryByID = (artGalleryID) => {
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

exports.getArtGalleries = () => {
    let sqlQuery = `SELECT  
                        *
                    FROM 
                        ArtGallery `
                       
                    
    console.log(sqlQuery)
    let options = {sql: sqlQuery, nestTables: true};

    return query(cp, options);
}
