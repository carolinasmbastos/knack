
import React from "react";

export default class ArtistSearchForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {artist:""};
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("1")
        this.props.onSubmit({
            artist: this.state.artist
        });
        this.setState({
            artist: ""
        })


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               Search Artist  <input 
                    name="artist"
                    value={this.state.artist}
                    onChange={this.handleChange}
                    placeholder="Search Artist..."
                />
                <button onClick={this.handleSubmit}> Search </button>
            </form>
        );
    }
}