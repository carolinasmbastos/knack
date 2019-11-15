import React from "react";
import {Container} from 'reactstrap'
import Map from '../publicInstallations/Map'
import './Explore.css'

export default class Explore extends React.Component {
    render() {
        return (
            <Container className="exploreSections">
                <div className="exploreMap"> 
                    <h2>EXPLORE PUBLIC ARTWORKS IN YOUR CITY</h2>
                    <Map /> 
                </div>
            </Container>
        );
    }
}