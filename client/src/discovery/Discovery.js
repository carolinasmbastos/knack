import React from "react";
import PopularArtists from '../artist/PopularArtists'
import News from '../news/News'
import Events from '../events/Events'
import './Discovery.css'
import {Container} from 'reactstrap'

export default class Discovery extends React.Component {
    render() {
        return (
            <Container className="discoverySections">
                <div>
                  <h2 className='popularArtistsHeading'>ARTISTS ON THE RISE</h2>
                    <PopularArtists /> 
                </div>
                <hr />
                <div>
                    <h2>EXHIBITIONS & FAIRS</h2>
                    <Events />
                </div>
                <hr />
                <div>
                    <h2>CURRENT AFFAIRS & ARTICLES</h2>
                    <News />
                </div>
                
            </Container>
        );
    }
}