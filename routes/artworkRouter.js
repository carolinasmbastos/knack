const express = require("express");
const router = express.Router();

let artworkController = require('../controllers/artworkController')

//Developer: Carol
// EndPoint to fetch all the artwork 
// by keywords: Artwork Description, Artist (Creator) name, Seller (Gallery or Artist) name, Period, Medium, 
// When keyword === 'featured', returns featured artwork
router.get('/artworks/search/:keyword?', artworkController.getArtworkByKeyword);

//Developer: Carol
// EndPoint to fetch all the artwork by id
router.get('/artworks/:id', artworkController.getArtworkByArtworkId);

exports.artworkRouter = router;