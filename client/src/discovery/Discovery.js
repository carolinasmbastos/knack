import React from "react";
import Map from '../publicInstallations/Map'
import PopularArtists from '../artist/PopularArtists'
import Events from '../events/Events'
import './Discovery.css'

export default class Discovery extends React.Component {
    render() {
        return (
            <div className="discoverySections">
                <div>
                    <PopularArtists /> 
                </div>
                <div>
                    
                    <Events />
                </div>
                <div>
                    <Events />
                </div>

                <div> 
                    
                    <Map /> 
                </div>
                

            </div>
        );
    }
}