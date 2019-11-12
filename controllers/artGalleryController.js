let artGalleryModel = require("../model/artGalleryModel.js");


exports.getArtGalleryByID = (req, res) => {
    const artGalleryId = req.params.artGalleryId

    artGalleryModel.getArtGalleryByID(artGalleryId)
    .then(artGallery=>{res.send(artGallery)})
    .catch(err=>{res.send(err)})
}


exports.getArtGalleries = (req, res) => {

    artGalleryModel.getArtGalleries()
    .then(artGallerys=>{res.send(artGallerys)})
    .catch(err=>{res.send(err)})
}

