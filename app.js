const express = require('express');
const app = express();
bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

let artistModel = require(__dirname + "/model/artistModel.js");

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

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), ()=>{
    console.log("Listening on port: "+ app.get('port'));
});
