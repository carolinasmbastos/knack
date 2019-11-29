let artworkModel = require("../model/artworkModel.js");

exports.getArtworkByKeyword = (req, res) => {
  let keyword = req.params.keyword == undefined ? "" : req.params.keyword;

  if (keyword.toLowerCase() === "featured") {
    artworkModel
      .findFeaturedArtwork()
      .then(artwork => {
        res.send(artwork);
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    artworkModel
      .findArtworkByKeyword(keyword)
      .then(artwork => {
        res.send(artwork);
      })
      .catch(err => {
        res.send(err);
      });
  }
};

exports.getArtworkByArtistName = (req, res) => {
  let artistName = req.params.artistName;

  artworkModel
    .findArtworkByArtistName(artistName)
    .then(artwork => {
      res.send(artwork);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.getArtworkByArtistId = (req, res) => {
  let artistId = req.params.artistId;

  artworkModel
    .findArtworkByArtistId(artistId)
    .then(artwork => {
      res.send(artwork);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.getArtworkByArtworkId = (req, res) => {
  let id = req.params.id;

  artworkModel
    .findArtworkByArtworkId(id)
    .then(artwork => {
      res.send(artwork);
    })
    .catch(err => {
      res.send(err);
    });
};
