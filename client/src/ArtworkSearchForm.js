
import React from "react";

export default class ArtworkSearchForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {search:""};
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("search form value:" + this.state.search);
        this.props.onSubmit(
            this.state.search
        );
        this.setState({
            search: ""
        })


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               Search Artwork  <input 
                    name="search"
                    value={this.state.search}
                    onChange={this.handleChange}
                    placeholder="Search Artwork..."
                />
                <button onClick={this.handleSubmit}> Search </button>
            </form>
        );
    }
}