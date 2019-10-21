import React from "react";
import ArtistSearchForm from './ArtistSearchForm'
import {searchArtist} from './api-artist.js'
import {Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'

export default class ArtistSearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artists:[]
        };
    }

    search = (artist) => {
      searchArtist(artist)
        .then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            this.setState({
              artists: data
            })
          }
        })
    }

    render() {
        return (
            <div>
            <ArtistSearchForm onSubmit={this.search}/>
            <Container>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <ListGroup>
                  {this.state.artists.map(artist => (
                    <ListGroupItem>
                      <ListGroupItemHeading>{artist.name}</ListGroupItemHeading>
                      <ListGroupItemText>{artist.nationality}</ListGroupItemText>
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