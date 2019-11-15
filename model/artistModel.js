const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");

//api to get artists, searching by artist Name
exports.getArtistByName = (artistName) => {

    var options = {sql: `SELECT * from Artist where name like '%${artistName}%'`, nestTables: true};

    return query(cp, options);
}

// Developer: Pratt
exports.fetchPopularArtists = () => {
    
    let sqlQuery = `SELECT 
                        artist.name as Name, 
                        SUM(orders.paymentAmount) AS Count,
                        artist.idArtist as idArtist,
                        artwork.imageUrl as url
                        FROM 
                            Artist artist 
                            INNER JOIN Artwork artwork ON artist.idArtist = artwork.idArtist 
                            INNER JOIN owl_knack.Order orders ON artwork.idArtwork = orders.idArtwork 
                        GROUP BY 
                            artist.idArtist, 
                            artist.name 
                        ORDER BY 
                            SUM(orders.paymentAmount) DESC limit 30`


    let options = {sql: sqlQuery, nestTables: false};

    return query(cp, options);
}

// Developer: Pratt
exports.getArtistByID = (artistID) => {
    let sqlQuery = `SELECT
                        *
                        FROM
                        Artist artist
                        WHERE
                        idArtist  = ${artistID}`

    console.log(sqlQuery)
    let options = {sql: sqlQuery, nestTables: true};

    return query(cp, options);
}

// Developer: John
exports.getAllArtists = () => {
    let sqlQuery = `SELECT
                        *
                        FROM
                        Artist`

    console.log(sqlQuery)
    let options = {sql: sqlQuery, nestTables: true};

    return query(cp, options);
}