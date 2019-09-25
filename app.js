const express = require('express');
const app = express();
bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

//This is to serve dynamic contents
//Use EJS view engine
app.set('view engine', 'ejs');

var data = {artists:{}};

app.get('/artists', (req, res) => {
    
    // don't need extension, the file is the views folder
    res.render('artists', data);
});

app.post('/artistSearch', (req, res) => {
    
    //get form param
    let artist = req.body.artist;
    console.log(req.body)
    data = {artists:
        [{name: "Emily Carr",
          birthDate: "Sept 27 1500"},
         {name: "Emily Carr",
          birthDate: "Jan 15 1500"},
         {name:"Van Gogh",
          birthDate: "Aug 10 1900"}]
    };

    console.log("artist param: " + artist);

    if (artist) {
        var results = data.artists.filter(item => 
            item.name === artist);

        data.artists = results; 
    }

    console.log("results: " + data.artists);

    res.send(data.artists)
    //res.render('artists', data);
});

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), ()=>{
    console.log("Listening on port: "+ app.get('port'));
});