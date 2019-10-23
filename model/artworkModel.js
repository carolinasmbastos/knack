const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");


exports.findArtworkByArtistName = (artistName, result) => {

    var options = {sql: `SELECT * from Artwork artwork, Artist artist 
                    where artwork.idArtist = artist.idArtist 
                    and artist.name like '%${artistName}%'`, nestTables: true};

    return query(cp, options);
}

exports.findArtworkByKeyword = (keyword) => {

    var options = {sql: `select * from Artwork artwork
                            inner join Seller seller on artwork.idSeller = seller.idSeller
                            left join Artist artistSeller on artwork.idSeller = artistSeller.idSeller
                            left join ArtGallery artGallery on artwork.idSeller = artGallery.idSeller
                            inner join Artist artist on artwork.idArtist = artist.idArtist
                            inner join Period period on artwork.idPeriod = period.idPeriod
                            where (artist.name like '%${keyword}%'
                            or (artwork.title like '%${keyword}%')
                            or (artwork.description like '%${keyword}%')
                            or (period.periodDescription like '%${keyword}%')
                            or (artGallery.name like '%${keyword}%')
                            or (artistSeller.name like '%${keyword}%'))`, nestTables: true};                          
                            
    return query(cp, options);
}

//