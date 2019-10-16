import React from "react";
import axios from 'axios'
import ArtworkSearchForm from './ArtworkSearchForm'

export default class ArtworkSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artwork:[]
        };
    }

    
    
    searchArtwork = (keyword) => {
        console.log("search: "+ keyword)
        axios
        .get('/artworkByArtist/'+keyword)
        .then(res => {
            console.log(res)
            this.setState({
                artwork: res.data
            })
        })
    }

    render() {
        return (
            <div>
            <ArtworkSearchForm onSubmit={this.searchArtwork}/>
            <ul>
            {this.state.artwork.map(artwork => (
                <div>
                    <li><b>Artwork title: </b> {artwork.artwork.title}</li>
                    <li><b>Artwork Price: </b> {artwork.artwork.listPrice}</li>
                    <li><b>Artwork Rental Price: </b> {artwork.artwork.rentPrice}</li>
                    <li><b>Artist: </b> {artwork.artist.name}</li>
                    <br/>
                </div>
            ))}
            </ul>
        </div>
        );
    }
}