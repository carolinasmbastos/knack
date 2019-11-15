const express = require("express");
const router = express.Router();

let artGalleryController = require("../controllers/artGalleryController.js");

// Developer: John
// Get Art Galleries
router.get('/artGalleries', artGalleryController.getArtGalleries)


// Art Gallery routes
// Developer: Pratt
// Get Art Gallery information by ID
router.get('/artGalleries/:artGalleryId', artGalleryController.getArtGalleryByID)

exports.artGalleryRouter = router;