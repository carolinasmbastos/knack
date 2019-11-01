import React from "react";
import Map from '../publicInstallations/Map'
import PopularArtists from '../artist/PopularArtists'
import './Discovery.css'

export default class Discovery extends React.Component {
    render() {
        return (
            <div className="discoverySections">
                <div>
                    Artists on the Rise!
                </div>
                <div>
                    Popular Artists
                    <PopularArtists />
                </div>

                <div> 
                    Public publicInstallations
                    <Map /> 
                </div>
                

            </div>
        );
    }
}