const { cp } = require("../db/connection.js");
const { query } = require("../db/promise-mysql.js");

exports.findArtworkByArtistName = artistName => {
  var options = {
    sql: `SELECT * from Artwork artwork, Artist artist 
                    where artwork.idArtist = artist.idArtist 
                    and artist.name like '%${artistName}%'`,
    nestTables: true
  };

  return query(cp, options);
};

exports.findArtworkByArtworkId = id => {
  var options = {
    sql: `SELECT artwork.*, artist.name, medium.mediumType, seller.*, artGallery.*, artistSeller.*
                    from Artwork artwork
                    inner join Artist artist on artwork.idArtist = artist.idArtist
                    inner join mediumType medium on artwork.idMediumType = medium.idMediumType
                    inner join Seller seller on artwork.idSeller = seller.idSeller
                    left join ArtGallery artGallery on seller.idSeller = artGallery.idSeller
                    left join Artist artistSeller on seller.idSeller = artistSeller.idSeller
                    where artwork.idArtwork = ${id}`,
    nestTables: true
  };

  return query(cp, options);
};

exports.findArtworkByKeyword = keyword => {
  var options = {
    sql: `select * from Artwork artwork
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
                            or (artistSeller.name like '%${keyword}%'))`,
    nestTables: true
  };

  return query(cp, options);
};

exports.findFeaturedArtwork = () => {
  var options = {
    sql: `select * from Artwork artwork
                            inner join Seller seller on artwork.idSeller = seller.idSeller
                            left join Artist artistSeller on artwork.idSeller = artistSeller.idSeller
                            left join ArtGallery artGallery on artwork.idSeller = artGallery.idSeller
                            inner join Artist artist on artwork.idArtist = artist.idArtist
                            inner join Period period on artwork.idPeriod = period.idPeriod
                            where artwork.isFeatured = 1`,
    nestTables: true
  };

  return query(cp, options);
};

exports.findArtworkByArtistId = artistId => {
  artistId = cp.escape(artistId);
  var options = {
    sql: `select * from Artwork artwork
                              inner join Seller seller on artwork.idSeller = seller.idSeller
                              left join Artist artistSeller on artwork.idSeller = artistSeller.idSeller
                              left join ArtGallery artGallery on artwork.idSeller = artGallery.idSeller
                              inner join Artist artist on artwork.idArtist = artist.idArtist
                              inner join Period period on artwork.idPeriod = period.idPeriod
                              where artist.idArtist = ${artistId}`,
    nestTables: true
  };

  return query(cp, options);
};
