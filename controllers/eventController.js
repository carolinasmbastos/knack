const eventsCache = require('./events.json');
const axios = require('axios');
const utils = require('./Utils');

exports.getEvents = (req, res) => {

    // EventBride API doen't allow subsequent calls within minutes, so to prevent error on the FE,
    // we are reading previously saved data in Json object (events.json) and using it in case of API call failure
    let events = eventsCache;


    // Query events within 10km from Vancouver and from the subcategories 
    // 5008 -> 'Fine Art'
    // 5011 -> 'Sculpture'
    // 5012 -> 'Painting' 
    // 5013 -> 'Design'

    let url = 'https://www.eventbriteapi.com/v3/events/search/?location.address=vancouver&location.within=10km&expand=venue&subcategories=5008%2C5011%2C5012%2C5013&token=DPEHG42NN6YYGTZP6CXZ'



    console.log(url)
    axios.get(url)
        .then(result => {
            console.log("success")
            console.log(result)
            let pos = utils.randomPos(result.data.events.length);
            res.send(result.data.events.slice(pos, pos+3))
        })
        .catch(err => {

            console.log("error "+ err)
            //console.log("error "+ (err.response !==undefined ? err.response.status : " no response code"))
            console.log("Using cached copy")
            let pos = utils.randomPos(events.events.length);
            res.send(events.events.slice(pos, pos+3))
        })

    
}