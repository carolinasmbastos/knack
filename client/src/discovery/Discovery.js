import React from "react";
import Map from '../publicInstallations/Map'
import PopularArtists from '../artist/PopularArtists'
import './Discovery.css'

export default class Discovery extends React.Component {
    render() {
        return (
            <div className="discoverySections">
                <div>
                    <PopularArtists />
                </div>
                <div>
                    News

                </div>
                <div>
                    Events

                </div>

                <div> 
                    
                    <Map />
                </div>
                

            </div>
        );
    }
}