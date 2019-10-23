const express = require("express");
const router = express.Router();

let artworkModel = require("../model/artworkModel.js");

//Developer: Carol
// EndPoint to fetch all the artwork 
// by keywords: Artwork Description, Artist (Creator) name, Seller (Gallery or Artist) name, Period, Medium, 
router.get('/artworkByKeyword/:keyword?', (req, res) => {

    let keyword = (req.params.keyword == undefined ? "" : req.params.keyword);

    artworkModel.findArtworkByKeyword(keyword)
    .then(artwork=>{res.send(artwork)})
    .catch(err=>{res.send(err)})

});


//Developer: Carol
// EndPoint to fetch all the artwork by artist name
router.get('/artworkByArtist/:artistName', (req, res) => {

    let artistName = req.params.artistName;

    artworkModel.findArtworkByArtistName(artistName)
    .then(artwork=>{res.send(artwork)})
    .catch(err=>{res.send(err)})

});

exports.artworkRouter = router;