import React from "react";
import axios from 'axios'
import ArtworkSearchForm from './ArtworkSearchForm'
import {Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'

export default class ArtworkSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artwork:[]
        };
        this.searchArtwork = this.searchArtwork.bind(this);
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
            <Container>
              <Row>
                <Col sm="12">
                <ListGroup>
                  {this.state.artwork.map(artwork => (
                    <ListGroupItem>
                      <ListGroupItemHeading>{artwork.artwork.title}</ListGroupItemHeading>
                      <ListGroupItemText>By {artwork.artist.name}</ListGroupItemText>
                      <ListGroupItemText>Purchase Price: ${artwork.artwork.listPrice}</ListGroupItemText>
                      <ListGroupItemText>Rent Price: ${artwork.artwork.rentPrice}</ListGroupItemText>
                    </ListGroupItem>
                  ))}
                </ListGroup>
                </Col>
              </Row> 
            </Container>
        </div>
        );
    }
}