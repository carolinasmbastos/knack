import React from "react";
import {Col, Button} from 'reactstrap'
import PropTypes from 'prop-types'

export default class ArtworkInfo extends React.Component {
  render() {
    return (
        <Col md="6">
            <h1>{this.props.artwork.title}</h1>
            <h2>{this.props.artist.name}</h2>
            <div>{this.props.medium.mediumType}</div>
            <div>{this.props.artwork.height} x {this.props.artwork.width}</div>
            <div>Owned by: {this.props.sellerEntity.name}, {this.props.sellerInfo.city}</div>
            <div>Address: {this.props.sellerInfo.address}</div>
            <p>{this.props.artwork.description}</p>
            <h3>${this.props.artwork.rentPrice}</h3>
            <Button color="info" onClick={this.props.onClickRent}>RENT</Button>
        </Col>
    );
  }
}

ArtworkInfo.propTypes = {
    artwork: PropTypes.object.isRequired,
    artist: PropTypes.object.isRequired,
    medium: PropTypes.object.isRequired,
    sellerInfo: PropTypes.object.isRequired,
    sellerEntity: PropTypes.object.isRequired,
    onClickRent: PropTypes.func.isRequired
}