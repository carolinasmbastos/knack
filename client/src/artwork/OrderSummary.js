import React from "react";
import { Col, Button } from "reactstrap";
import PropTypes from "prop-types";

export default class OrderSummary extends React.Component {
  render() {
    return (
      <Col>
        <h1>{this.props.artwork.title}</h1>
        <h2>{this.props.artist.name}</h2>
        <br />
        <div>
          Owned by: {this.props.sellerEntity.name}, {this.props.sellerInfo.city}
        </div>
        <div>Address: {this.props.sellerInfo.address}</div>
        <div class="cost-breakdown">
          Rent: ${this.props.artwork.rentPrice}
          <br />
          Taxes: ${this.props.artwork.rentPrice * 0.12}
          <br />
          {this.props.monthlyArtSubscription && (
            <React.Fragment>
              Monthly Art: -$
              {this.props.artwork.rentPrice +
                this.props.artwork.rentPrice * 0.12}
              <br />
            </React.Fragment>
          )}
          Total: ${this.props.monthlyArtSubscription && "0"}
          {!this.props.monthlyArtSubscription &&
            this.props.artwork.rentPrice + this.props.artwork.rentPrice * 0.12}
        </div>
        <div className="artworkActions">
          <button
            className="knack-btn knack-btn-dark"
            onClick={this.props.onClickRequest}
          >
            REQUEST
          </button>
        </div>
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
  monthlyArtSubscription: PropTypes.bool.isRequired,
  onClickRequest: PropTypes.func.isRequired
};
