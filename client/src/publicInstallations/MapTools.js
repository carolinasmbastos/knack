// MAPBOX stuff
import mapboxgl from 'mapbox-gl';
import {getPublicInstalations} from './api-publicInstallations.js'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFubWlsbGVyIiwiYSI6ImNqcW41bTZxZjdlc3I0MnBkcWtrc2xlYW8ifQ.SBX1hj-2nItwHZatTC72Dw';

// GEOCODING STUFF
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

class MapTools {
  constructor() {

    this.mapboxgl = mapboxgl;

    // markers of racks of current street
    this.markers = [];

    this.geocodingClient = mbxGeocoding({ accessToken: 'pk.eyJ1Ijoiam9yZGFubWlsbGVyIiwiYSI6ImNqcW41bTZxZjdlc3I0MnBkcWtrc2xlYW8ifQ.SBX1hj-2nItwHZatTC72Dw' });

  }

  // create map and return it for dom
  initializeMap() {

    // New map
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [0, 0],
      zoom: 10,
      maxZoom: 15
    });

    // Send the map to Vancouver
    this.geocodingClient.forwardGeocode({

      //  query: `Vancouver BC, Canada`,
      query: `Vancouver BC, Canada`,
      limit: 1
    })
      .send()
      .then(response => {

        const x = response.body.features[0].center[0];
        const y = response.body.features[0].center[1];

        this.map.setCenter([x, y]);

      });

    // return for dom
    return this.map;
  }

  updateMap() {

    console.log("uodating markers");

    getPublicInstalations()
        .then(result=>{
            result.map(item => {

              //Some installations do not have geoLocation returned
              if (item.fields.geom != undefined) {

                let marker = new this.mapboxgl.Marker() // initialize a new marker
                .setLngLat([item.fields.geom.coordinates[0], item.fields.geom.coordinates[1]])
                .addTo(this.map);
  
                // Push this new marker onto array of markers
                this.markers.push(marker);
              } 

            })
        })
        .catch(error=>{
            console.log(error);
        });

  }

}

export default MapTools;
