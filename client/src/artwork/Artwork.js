import React from "react";
import {findArtwork} from '../artwork/api-artwork.js'
import {Col, Container, Row, Button} from 'reactstrap'
import ArtworkInfo from './ArtworkInfo'
import OrderSummary from './OrderSummary'

const styles = {
  containerSpacing: {
    marginTop: "1rem"
  }  
}

export default class Artworks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: 'info',
      id: '',
      artwork: {},
      artist: {},
      medium: {},
      sellerInfo: {},
      sellerEntity: {}
    }
    this.rentArtwork = this.rentArtwork.bind(this);
    this.requestArtwork = this.requestArtwork.bind(this);
  }

  componentDidMount() {
    findArtwork(this.props.match.params.id)
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          this.setState({
            artwork: data[0].artwork,
            artist: data[0].artist,
            medium: data[0].medium,
            sellerInfo: data[0].seller,
            sellerEntity: data[0].seller_gallery.idSeller == null ? data[0].seller_artist : data[0].seller_gallery, // Can be either Art Gallery or Artist
            id: this.props.match.params.id
          })
        }
      })
  }

  rentArtwork() {
    this.setState({
      viewMode: 'summary'
    })
  }

  requestArtwork() {
    alert('Artwork resuqested')
  }
  
  render() {
    return (
      <Container style={styles.containerSpacing}>
        <Row>
          <Col md="6">
            <img src={`/img/artworks/${this.state.artwork.imageUrl}`} className="img-fluid" alt="Artwork image"/>
          </Col>
          {this.state.viewMode == "info" && (
            <ArtworkInfo 
              artwork={this.state.artwork}
              artist={this.state.artist}
              medium={this.state.medium}
              sellerInfo={this.state.sellerInfo}
              sellerEntity={this.state.sellerEntity}
              onClickRent={this.rentArtwork}
          />
          )}
          {this.state.viewMode == "summary" && (
            <OrderSummary 
              artwork={this.state.artwork}
              artist={this.state.artist}
              sellerInfo={this.state.sellerInfo}
              sellerEntity={this.state.sellerEntity}
              onClickRequest={this.requestArtwork}
          />
          )}
        </Row> 
      </Container>
    );
  }
}