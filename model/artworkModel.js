const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");


exports.findArtworkByArtistName = (artistName, result) => {

    var options = {sql: `SELECT * from Artwork artwork, Artist artist 
                    where artwork.idArtist = artist.idArtist 
                    and artist.name like '%${artistName}%'`, nestTables: true};

    return query(cp, options);
}

exports.findArtworkByKeyword = (keyword) => {

    var options = {sql: `SELECT *
	                from Artwork artwork, Artist artist, mediumType mediumType,
                    Period period, Seller seller, ArtGallery artGallery
	                where artwork.idArtist = artist.idArtist
                    and artwork.idSeller = seller.idSeller
                    and artwork.idmediumType = mediumType.idmediumType
                    and (artist.name like '%${keyword}%'
                    or (artwork.description like '%${keyword}%')
                    or (artwork.year between period.yearBegin and period.yearEnd and period.periodDescription like '%${keyword}%')
                    or (seller.idSeller = artGallery.idSeller and artGallery.name like '%${keyword}%')
	                or (seller.idSeller = artist.idSeller and artist.name like '%${keyword}%'))`, nestTables: true};

    return query(cp, options);
}

//