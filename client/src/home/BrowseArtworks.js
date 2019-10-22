import React from "react";
import {searchArtworks} from '../artwork/api-artwork.js'
import {Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'

const styles = {
  containerSpacing : {
    marginTop: "1rem",
    marginBottom: "1rem"
  }
}

export default class BrowseArtworks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      artworks: []
    }
  }

  loadArtworks() {
    if (this.props.match && this.props.match.params.searchString != this.state.searchString) {
      searchArtworks(this.props.match.params.searchString)
        .then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            this.setState({
              artworks: data,
              searchString: this.props.match.params.searchString
            })
          }
        })
    }
  }
  
  render() {
    this.loadArtworks()
    return (
      <Container style={styles.containerSpacing}>
        <Row>
          <Col sm="12" lg={{size: 8, offset: 2}}>
          <ListGroup>
            {this.state.artworks.map(artwork => (
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
    );
  }
}