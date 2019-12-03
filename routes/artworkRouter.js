const express = require("express");
const router = express.Router();

let artworkController = require("../controllers/artworkController");

//Developer: Carol
// EndPoint to fetch all the artwork
// by keywords: Artwork Description, Artist (Creator) name, Seller (Gallery or Artist) name, Period, Medium,
// When keyword === 'featured', returns featured artwork
router.get("/artworks/search/:keyword?", artworkController.getArtworkByKeyword);


//Developer: Carol
// EndPoint to fetch all the artwork by id
router.get("/artworks/:id(\\d+)/:userID(\\d+)", artworkController.getArtworkByArtworkId);


//Developer: Carol
// EndPoint to fetch all the artwork by the artistid
router.get("/artworks/artists/:artistId(\\d+)", artworkController.getArtworkByArtistId);


//Developer: Pratt
// EndPoint to toggle on/off a favorite artwork for a customer
// receives artworkId and CustomerId from req.body
router.post("/artworks/favorites/toggle",artworkController.favoriteArtworkToggle);

exports.artworkRouter = router;
