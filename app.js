const express = require('express');
const app = express();
bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

let artistModel = require(__dirname + "/model/artistModel.js");
let artGalleryModel = require(__dirname + "/model/artGalleryModel.js");
let transactionModel = require(__dirname + "/model/transactionModel.js");
let artworkModel = require(__dirname + "/model/artworkModel.js");



// Artist routes
app.post('/artistSearch', (req, res) => {
    let artistSearch = req.body.artist;
    console.log("artist param: " + artistSearch);

    artistModel.findArtistByName(artistSearch, (err, artists)=>{
        console.log('listing artists');
        if (err)
            res.send(err);
        console.log('artists', artists);
        res.send(artists);
    });
});

// Developer: John
// Endpoint to fetch all the artists in the Database
app.get('/getAllArtists', (req, res) => {
    artistModel.getAllArtists((err, artists)=>{
        if (err)
            res.send(err);
        else
            res.send(artists);
    });
})

app.get('/artworkByArtist/:artistName', (req, res) => {
    
    let artistName = req.params.artistName;
    console.log("artist param: " + artistName);

    artworkModel.findArtworkByArtistName(artistName, (err, artwork)=>{

        console.log('listing artwork by artist name');
        if (err)
            res.send(err);
        console.log('artwork', artwork);
        res.send(artwork);
    });

});


// Developer: Pratt
// Get Artist information by ID
app.get('/getArtistByID', (req, res) => {
    const artistID = req.query.artistID
    artistModel.getArtistByID(artistID, (err, artist) => {
        if (err)
            res.send(err);
        else 
            res.send(artist);
    })
})

// Developer: Pratt
// Endpoint to get the Top 30 artists of all time based on the income generated by their artworks through Knack.
app.get('/popularArtists', (req, res) => {
    artistModel.fetchPopularArtists((err, popularArtists) => {
        if (err)
            res.send(err);
        else 
            res.send(popularArtists);
    })
})


// Art Gallery routes
// Developer: Pratt
// Get Art Gallery information by ID
app.get('/getArtGalleryByID', (req, res) => {
    const artGalleryID = req.query.artGalleryID
    artGalleryModel.getArtGalleryByID(artGalleryID, (err, artGallery) => {
        if (err)
            res.send(err);
        else 
            res.send(artGallery);
    })
})

// Developer: John
// Get Art Galleries
app.get('/getArtGalleries', (req, res) => {
    artGalleryModel.getArtGalleries((err, artGallery)=>{
        if (err)
            res.send(err);
        else
            res.send(artGallery);
    });
})


//Transaction routes
// Developer: Pratt
// Handle the rent or purchase of an Artwork
app.post('/placeOrder', (req, res) => {
    const purchaseInfo = {
        idCustomer: req.body.idCustomer,
        idArtwork: req.body.idArtwork,
        orderType: req.body.orderType,
        idPaymentMethod: req.body.idPaymentMethod,
        rentalStartDate: req.body.rentalStartDate,
        rentalEndDate: req.body.rentalEndDate
    }

    transactionModel.placeOrder(purchaseInfo, (err, result)=>{
        if (err)
            res.send(err);
        else
            res.send(result);
    });
});

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), ()=>{
    console.log("Listening on port: "+ app.get('port'));
});
