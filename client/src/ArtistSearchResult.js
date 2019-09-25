import React from "react";
import axios from 'axios'
import ArtistSearchForm from './ArtistSearchForm'

export default class ArtistSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artists:[]
        };
    }

    
    
    searchArtist = (artist) => {
        console.log(artist)
        axios
        .post('/artistSearch', artist)
        .then(res => {
            console.log(res)
            this.setState({
                artists: res.data
            })
        })
    }

    render() {
        return (
            <div>
            <ArtistSearchForm onSubmit={this.searchArtist}/>
            <ul>
            {this.state.artists.map(artist => (
                <div>
                    <li>{artist.name}</li>
                    <li>{artist.birthDate}</li>
                    <br/>
                </div>
            ))}
            </ul>
        </div>
        );
    }
}