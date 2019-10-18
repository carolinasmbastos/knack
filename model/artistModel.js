const {connectionPool} = require("../db.js");

//api to find artists, searching by artist Name
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

// Developer: Pratt
exports.fetchPopularArtists = (result) => {
    // We should probably look for a string method (if there's any in Javascript) that can help us avoid concatenating strings with the new line character.
    let sqlQuery = 'SELECT' + '\n' +
                        'A.idArtist,' + '\n' +
                        'A.name,' + '\n' +
                        'SUM(O.paymentAmount) AS netGross' + '\n' + // Total income calculated by summing up all the sales of all of the artist's artworks.
                        // Artist photo or any of their artwork's photo can also be included in the response to display in the visualization.
                    'FROM' + '\n' +
                        'Artist A' + '\n' +
                        'INNER JOIN Artwork AW' + '\n' +
                            'ON A.idArtist = AW.idArtist' + '\n' +
                        'INNER JOIN owl_knack.Order O' + '\n' + // It's necessary to use owl_knack.Order. Otherwise, MySQL confuses it with the 'ORDER' keyword from it's syntax.
                            'ON AW.idArtwork = O.idArtwork' + '\n' +
                    'GROUP BY' + '\n' +
                        'A.idArtist,' + '\n' +
                        'A.name' + '\n' +
                    'ORDER BY' + '\n' +
                        'SUM(O.paymentAmount) DESC' + '\n' +    // This helps us place the highest grossing artists at the top of the results array.
                    'LIMIT 30'  // Limit to Top 30. This can be changed later if D3 needs more/less records for visualization.

    connectionPool.query(sqlQuery, (err, res)=>{
        if (err) {
            console.log("Error listing Popular Artists", err);
            result(err, null);
        } else {
            result(null, res);
        } 
    });
}

// Developer: Pratt
exports.getArtistByID = (artistID, result) => {
    let sqlQuery = 'SELECT' + '\n' +
                        'name,' + '\n' +
                        'nationality,' + '\n' +
                        'bio,' + '\n' +
                        'active' + '\n' +
                    'FROM' + '\n' +
                        'Artist' + '\n' +
                    'WHERE' + '\n' +
                        'idArtist  = ?'

    connectionPool.query(sqlQuery, artistID, (err, res)=>{
        if (err) {
            console.log("Error finding the Artist", err);
            result(err, null);
        } else {
            result(null, res);
        } 
    });
}

// Developer: John
exports.getAllArtists = (result) => {
    let sqlQuery = 'SELECT' + '\n' +
                        'name,' + '\n' +
                        'nationality,' + '\n' +
                        'bio,' + '\n' +
                        'active' + '\n' +
                    'FROM' + '\n' +
                        'Artist'

    connectionPool.query(sqlQuery, (err, res)=>{
        if (err) {
            console.log("Error finding Artists", err);
            result(err, null);
        } else {
            result(null, res);
        } 
    });
}