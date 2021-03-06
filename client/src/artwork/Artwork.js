import React from "react";
import {
  findArtwork,
  requestOrder,
  favoriteArtworkToggle
} from "../artwork/api-artwork.js";
import { Col, Container, Row } from "reactstrap";
import ArtworkInfo from "./ArtworkInfo";
import OrderSummary from "./OrderSummary";
import { getMonthlyArtSubscriptionStatus } from "../monthlyArt/api-monthly-art";

const styles = {
  containerSpacing: {
    marginTop: "3rem"
  }
};

export default class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: "info",
      viewinSpace: false,
      isFav: false,
      id: "",
      artwork: {},
      artist: {},
      medium: {},
      sellerInfo: {},
      sellerEntity: {},
      subscriptionDetails: {}
    };
    this.rentArtwork = this.rentArtwork.bind(this);
    this.requestArtwork = this.requestArtwork.bind(this);
  }

  componentDidMount() {
    findArtwork(this.props.match.params.id, 2)
      .then(data => {
        const isFav =
          data[0].favorite.idCustomer != null &&
          data[0].favorite.idArtwork != null;
        this.setState({
          artwork: data[0].artwork,
          artist: data[0].artist,
          medium: data[0].medium,
          sellerInfo: data[0].seller,
          sellerEntity:
            data[0].artGallery.idSeller == null
              ? data[0].artistSeller
              : data[0].artGallery, // Can be either Art Gallery or Artist
          id: this.props.match.params.id,
          isFav: isFav
        });
      })
      .catch(error => {
        console.log(error);
      });

    // Replace the hardcoded User ID with an actual value
    getMonthlyArtSubscriptionStatus(2)
      .then(data => {
        if (data.length == 1) {
          this.setState({
            subscriptionDetails: data[0]
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  rentArtwork() {
    this.setState({
      viewMode: "summary"
    });
  }

  requestArtwork() {
    let rentalStartDate = new Date();
    rentalStartDate.setDate(rentalStartDate.getDate() + 5);

    let rentalEndDate = new Date();
    rentalEndDate.setDate(rentalEndDate.getDate() + 95);

    const info = {
      idArtwork: this.state.id,
      idCustomer: 2, // remove hardcoding when sign in is implemented
      orderType: "rent"
    };
    requestOrder(info)
      .then(data => {
        const insertId = data.insertId;

        const { history } = this.props;
        if (history) history.push(`/confirmation/${insertId}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  viewInSpace = () => {
    this.setState({
      viewinSpace: !this.state.viewinSpace
    });
  };

  favoriteArtworkToggle = event => {
    event.preventDefault();
    const info = {
      idArtwork: this.state.id,
      idCustomer: 2 // remove hardcoding when sign in is implemented
    };
    const operation = this.state.isFav ? "remove" : "insert";
    favoriteArtworkToggle(info, operation)
      .then(data => {
        const { affectedRows } = data;
        if (affectedRows == 1)
          this.setState({
            isFav: !this.state.isFav
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let monthlyArtAvailability = false;
    if (
      this.state.artwork.monthlyArtAvailability == 1 && // Check if the Artwork is AVAILABLE for Monthly Art
      Date(this.state.subscriptionDetails.endDate) >= Date() && // Check if the user has an active subscription
      this.state.subscriptionDetails.artworkBalance > 0 && // Check if the user has any more arworks for redeeming through Monthly Art
      this.state.artwork.year >= this.state.subscriptionDetails.planYearStart && // Artwork's year is greater than the Beginning Year of the Subscription Plan
      this.state.artwork.year <= this.state.subscriptionDetails.planYearEnd //// Artwork's year is less than the Ending Year of the Subscription Plan
    )
      monthlyArtAvailability = true;

    return (
      <Container style={styles.containerSpacing}>
        <img
          src="/img/assets/view-in-space-background.jpg"
          alt="Room Background. Source: https://www.freepik.com/free-photo/pink-chair-white-room_4100643.htm"
          className={`backgroundImages ${
            this.state.viewinSpace ? "visible" : "hidden"
          }`}
        />
        <img
          id="cancelViewInSpace"
          className={this.state.viewinSpace ? "visible" : "hidden"}
          onClick={this.viewInSpace}
          alt="Cancel"
          src="/img/assets/close.svg"
        />
        <Row>
          <Col md="6" className="my-auto">
            {this.state.artwork.title && (
              <React.Fragment>
                <Col md="12">
                  <img
                    src={`/img/artworks/${
                      this.state.artwork.imageUrl
                        ? this.state.artwork.imageUrl
                        : "default.jpg"
                    }`}
                    className={`artwork-image ${
                      this.state.viewinSpace ? "in-focus" : "default"
                    }`}
                    alt="Artwork"
                  />
                  <img
                    src={`/img/artworks/${
                      this.state.artwork.imageUrl
                        ? this.state.artwork.imageUrl
                        : "default.jpg"
                    }`}
                    className={`artwork-image view-in-space ${
                      this.state.viewinSpace ? "in-focus" : "default"
                    }`}
                    alt="Artwork View in Space"
                  />
                </Col>
                <Row className="auxiliaryActions">
                  <div
                    id="favoriteArtwork"
                    onClick={this.favoriteArtworkToggle}
                    className={this.state.isFav ? "selected" : ""}
                  >
                    <img
                      src="/img/assets/favourite.svg"
                      alt="Favourite Artwork"
                      className={`favouriteArtworkIcon ${
                        this.state.isFav ? "selected" : ""
                      }`}
                    />
                    <a href="#">FAVORITE</a>
                  </div>
                  <div id="viewInSpace" onClick={this.viewInSpace}>
                    <img
                      src="/img/assets/viewInSpace.svg"
                      alt="View Artwork in Space"
                      className="viewInSpaceIcon"
                    />
                    <a href="#" className="knack-link">
                      VIEW IN SPACE
                    </a>
                  </div>
                </Row>
              </React.Fragment>
            )}
          </Col>
          <Col md="6" className="artworkDetails my-auto">
            {this.state.viewMode === "info" && (
              <ArtworkInfo
                artwork={this.state.artwork}
                artist={this.state.artist}
                medium={this.state.medium}
                sellerInfo={this.state.sellerInfo}
                sellerEntity={this.state.sellerEntity}
                monthlyArtSubscription={monthlyArtAvailability}
                onClickRent={this.rentArtwork}
              />
            )}
            {this.state.viewMode === "summary" && (
              <OrderSummary
                artwork={this.state.artwork}
                artist={this.state.artist}
                sellerInfo={this.state.sellerInfo}
                sellerEntity={this.state.sellerEntity}
                monthlyArtSubscription={monthlyArtAvailability}
                onClickRequest={this.requestArtwork}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
