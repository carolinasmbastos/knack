import React from "react";
import {findArtwork, requestOrder} from '../artwork/api-artwork.js'
import {Col, Container, Row} from 'reactstrap'
import ArtworkInfo from './ArtworkInfo'
import OrderSummary from './OrderSummary'
import {formatDate} from '../helpers/dateOps'

const styles = {
  containerSpacing: {
    marginTop: "1rem"
  }  
}

export default class Artwork extends React.Component {
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
            sellerEntity: data[0].artGallery.idSeller == null ? data[0].artistSeller : data[0].artGallery, // Can be either Art Gallery or Artist
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
    let rentalStartDate = new Date()
    rentalStartDate.setDate(rentalStartDate.getDate() + 5)

    let rentalEndDate = new Date()
    rentalEndDate.setDate(rentalEndDate.getDate() + 95)

    const info = {
      idArtwork: this.state.id,
      idCustomer: 2,  // remove hardcoding when sign in is implemented
      orderType: 'rent',
      idPaymentMethod: 26, // remove parameter since this isn't a purchase; it's a mere request
      rentalStartDate: formatDate(rentalStartDate),  // DESIGN CHANGE! The designers are probably not looking to get any more updates to the designs, but we need a field for this in the interface!
      rentalEndDate: formatDate(rentalEndDate)
    }
    requestOrder(info)
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          const insertId = data.insertId

          const { history } = this.props;
          if(history) 
            history.push(`/confirmation/${insertId}`);
        }
      })
  }
  
  render() {
    return (
      <Container style={styles.containerSpacing}>
        <Row>
          <Col md="6">
            <img src={`/img/artworks/${this.state.artwork.imageUrl ? this.state.artwork.imageUrl : 'default.jpg'}`} className="artwork-image" alt="Artwork"/>
          </Col>
          {this.state.viewMode === "info" && (
            <ArtworkInfo 
              artwork={this.state.artwork}
              artist={this.state.artist}
              medium={this.state.medium}
              sellerInfo={this.state.sellerInfo}
              sellerEntity={this.state.sellerEntity}
              onClickRent={this.rentArtwork}
          />
          )}
          {this.state.viewMode === "summary" && (
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