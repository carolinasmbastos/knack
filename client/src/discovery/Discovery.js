import React from "react";
import Map from '../publicInstallations/Map'
import PublicInstallationsList from '../publicInstallations/PublicInstallationsList'

export default class Discovery extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Artists on the Rise!
                </div>

                Public Art Installations
                <Map />

            </div>
        );
    }
}