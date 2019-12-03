import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class ArtworkInfo extends React.Component {
  render() {
    return (
      <Col>
        {this.props.artwork.title && (
          <React.Fragment>
            <h1>{this.props.artwork.title}</h1>
            <h2>
              <Link
                to={`/artist/${this.props.artwork.idArtist}`}
                className="knack-link"
              >
                {this.props.artist.name}
              </Link>
            </h2>
            <br />
            <div>{this.props.medium.mediumType}</div>
            <div>
              {this.props.artwork.height}m x {this.props.artwork.width}m
            </div>
            <br />
            <div>
              Owned by: {this.props.sellerEntity.name},{" "}
              {this.props.sellerInfo.city}
            </div>
            <div>
              Address: {this.props.sellerInfo.address},{" "}
              {this.props.sellerInfo.city}
            </div>
            <br />
            <p>{this.props.artwork.description}</p>
            <br />
            <div className="artworkActions">
              <div class="cost-breakdown">
                <h3 className="artwork-price">
                  ${this.props.artwork.listPrice}
                </h3>
                Experience this artwork at{" "}
                <b>${this.props.artwork.rentPrice}/month</b>
              </div>
              {this.props.monthlyArtSubscription && (
                <small>
                  (Rent this Artwork for no cost with your Monthly Artwork
                  subsription!)
                </small>
              )}
              <div>
                <button
                  onClick={this.props.onClickRent}
                  className="rentBtn knack-btn knack-btn-dark"
                >
                  RENT
                </button>
                <button className="buyBtn knack-btn knack-btn-light">
                  BUY
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
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
  monthlyArtSubscription: PropTypes.bool.isRequired,
  onClickRent: PropTypes.func.isRequired
};
