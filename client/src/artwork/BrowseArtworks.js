import React from "react";
import { searchArtworks } from "./api-artwork.js";
import TimelineSlider from "./TimelineSlider.js";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import ArtworkSearchForm from "./ArtworkSearchForm";

const styles = {
  containerSpacing: {
    marginBottom: "1rem"
  },
  rowSpacing: {
    marginBottom: "2rem"
  },
  resultsSpacing: {
    marginTop: "2rem"
  }
};

export default class BrowseArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      artworks: [],
      idPeriod: 0
    };
    this.filterByTimeline = this.filterByTimeline.bind(this);
  }

  loadArtworks() {
    if (
      (this.props.match &&
        this.props.match.params.searchString !== this.state.searchString) ||
      (this.props.featured == "true" && this.state.searchString == "")
    ) {
      const searchKeyword = this.props.match
        ? this.props.match.params.searchString
        : "featured";
      searchArtworks(searchKeyword)
        .then(data => {
          this.setState({
            artworks: data,
            searchString: searchKeyword
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  filterByTimeline = timeline => {
    this.setState({ idPeriod: timeline == "" ? 0 : parseInt(timeline) });
  };

  render() {
    this.loadArtworks();
    return (
      <Container style={styles.containerSpacing} className="artworksGrid">
        {this.props.featured == "true" && (
          <React.Fragment>
            <ArtworkSearchForm />
            <h2 className="browseArtworksHeading">BROWSE ARTWORKS FOR RENT</h2>
          </React.Fragment>
        )}
        <TimelineSlider onSelect={this.filterByTimeline} />
        <Row style={styles.resultsSpacing}>
          {this.state.artworks.map(
            artwork =>
              (this.state.idPeriod == 0 ||
                artwork.period.idPeriod == this.state.idPeriod) && (
                <Col sm="6" lg="4" style={styles.rowSpacing}>
                  <Card>
                    <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                      <CardImg
                        top
                        className="artwork-thumbnail"
                        src={`/img/artworks/${
                          artwork.artwork.imageUrl
                            ? artwork.artwork.imageUrl
                            : "default.jpg"
                        }`}
                        alt="Picsum"
                      />
                    </Link>
                    <CardBody>
                      <div className="cardInfo">
                        <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                          <CardTitle>{artwork.artwork.title}</CardTitle>
                        </Link>
                        <CardSubtitle>
                          By{" "}
                          <Link to={`/artist/${artwork.artist.idArtist}`}>
                            {artwork.artist.name}
                          </Link>
                        </CardSubtitle>
                      </div>
                      <div className="cardActions">
                        <Link
                          to={`/artwork/${artwork.artwork.idArtwork}`}
                          className="knack-btn knack-btn-light"
                        >
                          View
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )
          )}
        </Row>
      </Container>
    );
  }
}
