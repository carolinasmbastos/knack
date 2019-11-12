// MAPBOX stuff
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { getPublicInstalations } from './api-publicInstallations.js'
import './mapStyles.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFubWlsbGVyIiwiYSI6ImNqcW41bTZxZjdlc3I0MnBkcWtrc2xlYW8ifQ.SBX1hj-2nItwHZatTC72Dw';

// GEOCODING STUFF
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

class MapTools {
    constructor() {

        this.mapboxgl = mapboxgl;

        //markers for installations
        this.markers = [];

        this.cx = 0;
        this.cy = 0;

        this.geocodingClient = mbxGeocoding({ accessToken: 'pk.eyJ1Ijoiam9yZGFubWlsbGVyIiwiYSI6ImNqcW41bTZxZjdlc3I0MnBkcWtrc2xlYW8ifQ.SBX1hj-2nItwHZatTC72Dw' });

    }

    // create map and return it for dom
    initializeMap() {

        // New map
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [0, 0],
            zoom: 11,
            maxZoom: 15
        });

        // Send the map to Vancouver
        this.geocodingClient.forwardGeocode({

            query: `Vancouver BC, Canada`,
            limit: 1
        })
            .send()
            .then(response => {

                this.cx = response.body.features[0].center[0];
                this.cy = response.body.features[0].center[1];

                this.map.setCenter([this.cx, this.cy]);

                console.log("center: " + this.cx + " " + this.cy)

            });

        // return for dom
        return this.map;
    }

    updateMap() {

        getPublicInstalations()
        .then(result => {
            result.map(item => {

               
                //Some installations do not have geoLocation returned
                if (item.fields.geom != undefined) {

                    let x = item.fields.geom.coordinates[0];
                    let y = item.fields.geom.coordinates[1];

                    // console.log("long: "+ x);
                    // console.log("lat: "+ y);

                    // create the popup
                    let imgSrc = 'img/vancouver-logo.png';
                    if (item.fields.photourl !== undefined)
                        imgSrc = `https://opendata.vancouver.ca/api/datasets/1.0/public-art/images/${item.fields.photourl.id }`;

                    let linkText = 'Visit Artwork';
                    if (item.fields.siteaddress !== undefined)
                        linkText = item.fields.siteaddress;


                    let popupHtml = `<a href='${item.fields.url}'><img src='${imgSrc}' class='thumbnailMap'/></a>
                        <a href='${item.fields.url}' target='_blank'>${linkText}</a>`
                    let popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(popupHtml);
                
                    
                    let marker = new this.mapboxgl.Marker() // initialize a new marker
                        .setLngLat([x, y])
                        .setPopup(popup)
                        .addTo(this.map);

                    this.map.setCenter([x, y]);

                    // Push this new marker onto array of markers
                    this.markers.push(marker);
                }

            })
            this.map.setCenter([this.cx, this.cy]);
        })
        .catch(error => {
            console.log(error);
        });
            
    }

}

export default MapTools;
