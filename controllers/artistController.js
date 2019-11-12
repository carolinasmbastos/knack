let artistModel = require("../model/artistModel.js");

exports.getArtistByID = (req, res) => {

    const artistId = req.params.artistId;

    artistModel.getArtistByID(artistId)
    .then(artist=>{res.send(artist)})
    .catch(err=>{res.send(err)})
}


exports.fetchPopularArtists = (req, res) => {

    artistModel.fetchPopularArtists()
    .then(popularArtists=>{res.send(popularArtists)})
    .catch(err=>{res.send(err)})
}


exports.getAllArtists = (req, res) => {

    artistModel.getAllArtists()
    .then(artists=>{res.send(artists)})
    .catch(err=>{res.send(err)})
}


exports.getArtistByName = (req, res) => {

    let artistName = req.params.artistName;

    artistModel.getArtistByName(artistName)
    .then(artists=>{res.send(artists)})
    .catch(err=>{res.send(err)})

}