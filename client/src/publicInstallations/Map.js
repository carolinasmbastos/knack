import React from 'react';

import MapTools from './MapTools';
import './mapStyles.css'

const mapTools = new MapTools();

class Map extends React.Component {

  componentDidMount(){

    // Initial map setup
    const map = mapTools.initializeMap();
    mapTools.updateMap();
  }

  render() {

   // mapTools.updateMap();
    
    return (
      <div className="map-container">
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;
