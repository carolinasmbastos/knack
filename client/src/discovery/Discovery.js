import React from "react";
import Map from '../publicInstallations/Map'
import PopularArtists from '../artist/PopularArtists'

export default class Discovery extends React.Component {
    render() {
        return (
            <div>
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