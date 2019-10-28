import React from "react";
import {findArtwork} from '../artwork/api-artwork.js'
import {Col, Container, Row, Button} from 'reactstrap'

const styles = {
  containerSpacing: {
    marginTop: "1rem"
  }  
}

export default class Artworks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      artwork: {},
      artist: {},
      medium: {},
      sellerInfo: {},
      sellerEntity: {}
    }
  }

  componentDidMount() {
    findArtwork(this.props.match.params.id)
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          this.setState({
            artwork: data[0].Aw,
            artist: data[0].Ar,
            medium: data[0].Md,
            sellerInfo: data[0].Sel,
            sellerEntity: data[0].SelAg.idSeller == null ? data[0].SelAr : data[0].SelAg, //Can be either Art Gallery or Artist
            id: this.props.match.params.id
          })
        }
      })
  }
  
  render() {
    return (
      <Container style={styles.containerSpacing}>
        <Row>
          <Col md="6">
            <img src={`/img/artworks/${this.state.artwork.imageUrl}`} className="img-fluid" alt="Artwork image"/>
          </Col>
          <Col md="6">
            <h1>{this.state.artwork.title}</h1>
            <h2>{this.state.artist.name}</h2>
            <div>{this.state.medium.mediumType}</div>
            <div>{this.state.artwork.height} x {this.state.artwork.width}</div>
            <div>Owned by: {this.state.sellerEntity.name}, {this.state.sellerInfo.city}</div>
            <div>Address: {this.state.sellerInfo.address}</div>
            <p>{this.state.artwork.description}</p>
            <h3>${this.state.artwork.rentPrice}</h3>
            <Button color="info">RENT</Button>
          </Col>
        </Row> 
      </Container>
    );
  }
}