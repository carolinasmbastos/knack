import React from "react";
import {searchArtworks} from './api-artwork.js'
import TimelineSlider from './TimelineSlider.js'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import { Link } from "react-router-dom";

const styles = {
  containerSpacing : {
    marginTop: "5rem",
    marginBottom: "1rem"
  },
  rowSpacing: {
    marginBottom: "2rem"
  },
  resultsSpacing : {
    marginTop: "2rem",
  }
}

export default class BrowseArtworks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      artworks: [],
      idPeriod: 0
    }
    this.filterByTimeline = this.filterByTimeline.bind(this);
  }

  loadArtworks() {
    if ((this.props.match && this.props.match.params.searchString !== this.state.searchString) || this.props.featured == 'true' && this.state.searchString == '') {
      const searchKeyword = this.props.match ? this.props.match.params.searchString : 'featured'
      console.log(searchKeyword)
      searchArtworks(searchKeyword)
        .then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            this.setState({
              artworks: data,
              searchString: searchKeyword
            })
          }
        })
    }
  }

  filterByTimeline = timeline => {
    this.setState({idPeriod: timeline == '' ? 0 : parseInt(timeline)})
  }
  
  render() {
    this.loadArtworks()
    return (
      <Container style={styles.containerSpacing}>
        {this.props.featured == "true" && (
          <React.Fragment>
            <hr />
            <h2 className="browseArtworksHeading">BROWSE ARTWORKS FOR RENT</h2>
          </React.Fragment>
        )}
        <TimelineSlider onSelect={this.filterByTimeline} />
        <Row style={styles.resultsSpacing}>
            {this.state.artworks.map(artwork => 
              (this.state.idPeriod == 0 || artwork.period.idPeriod == this.state.idPeriod) && (
                <Col sm="6" lg="4" style={styles.rowSpacing}>
                  <Card>
                    <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                      <CardImg top className="artwork-thumbnail" src={`/img/artworks/${artwork.artwork.imageUrl ? artwork.artwork.imageUrl : 'default.jpg'}`} alt="Picsum" />
                    </Link>
                    <CardBody>
                      <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                        <CardTitle>{artwork.artwork.title}</CardTitle>
                      </Link>
                      <CardSubtitle>By {artwork.artist.name}</CardSubtitle>
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