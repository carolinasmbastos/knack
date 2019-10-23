const express = require("express");
const router = express.Router();

let artGalleryModel = require("../model/artGalleryModel.js");

// Art Gallery routes
// Developer: Pratt
// Get Art Gallery information by ID
router.get('/getArtGalleryByID/:artGalleryId', (req, res) => {
    const artGalleryId = req.params.artGalleryId

    artGalleryModel.getArtGalleryByID(artGalleryId)
    .then(artGallery=>{res.send(artGallery)})
    .catch(err=>{res.send(err)})
})

// Developer: John
// Get Art Galleries
router.get('/getArtGalleries', (req, res) => {

    artGalleryModel.getArtGalleries()
    .then(artGallerys=>{res.send(artGallerys)})
    .catch(err=>{res.send(err)})
})

exports.artGalleryRouter = router;