import React from "react";
import {Col, Button} from 'reactstrap'
import PropTypes from 'prop-types'

export default class OrderSummary extends React.Component {
    render() {
        return (
            <Col md="6">
                <h1>{this.props.artwork.title}</h1>
                <h2>{this.props.artist.name}</h2>
                <div>Owned by: {this.props.sellerEntity.name}, {this.props.sellerInfo.city}</div>
                <div>Address: {this.props.sellerInfo.address}</div>

                <h3>Rent: ${this.props.artwork.rentPrice}</h3>
                <h3>Taxes: ${this.props.artwork.rentPrice * .12}</h3>
                <h3>Total: ${this.props.artwork.rentPrice + (this.props.artwork.rentPrice * .12)}</h3>
                <Button color="info" onClick={this.props.onClickRequest}>REQUEST</Button>
            </Col>
        );
    }
}

OrderSummary.propTypes = {
    artwork: PropTypes.object.isRequired,
    artist: PropTypes.object.isRequired,
    medium: PropTypes.object.isRequired,
    sellerInfo: PropTypes.object.isRequired,
    sellerEntity: PropTypes.object.isRequired,
    onClickRequest: PropTypes.func.isRequired
}