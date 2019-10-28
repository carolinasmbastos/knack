import React from "react";
import {searchArtworks} from '../artwork/api-artwork.js'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import { Link } from "react-router-dom";

const styles = {
  containerSpacing : {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  rowSpacing: {
    marginBottom: "2rem"
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
    if (this.props.match && this.props.match.params.searchString !== this.state.searchString) {
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
            {this.state.artworks.map(artwork => (
              <Col sm="4" style={styles.rowSpacing}>
                <Card>
                <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                  <CardImg top width="100%" height="200px" src={`/img/artworks/${artwork.artwork.imageUrl ? artwork.artwork.imageUrl : 'default.jpg'}`} alt="Picsum" />
                </Link>
                <CardBody>
                  <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                    <CardTitle>{artwork.artwork.title}</CardTitle>
                  </Link>
                  <CardSubtitle>By {artwork.artist.name}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
            ))}
        </Row> 
      </Container>
    );
  }
}