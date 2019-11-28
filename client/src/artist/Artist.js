import React from "react"
import {Col, Container, Row} from 'reactstrap'
import {findArtist} from './api-artist'
import ArtworkGallery from '../artwork/ArtworkGallery'

const styles = {
    containerSpacing: {
      marginTop: "1rem"
    }  
  }

export default class Artist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            artist: {}
        }
    }

    componentDidMount() {
        findArtist(this.props.match.params.id)
            .then((data) => {
                this.setState({
                    artist: data[0].artist
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render() {
        return (
            <Container style={styles.containerSpacing}>
                <Row>
                <Col md="6">
                    <img src={(this.state.artist.imageUrl !== null) ? `/img/artists/${this.state.artist.imageUrl}` : '/img/artists/default.jpg'} className="artistImage" alt="artist"/>
                </Col>
                <Col md='6' className='artistDetails'>
                    <h2>{this.state.artist.name}</h2>
                    <h3>Nationality: {this.state.artist.nationality}</h3>
                
                    <span>About:</span>
                    <p>{this.state.artist.bio}</p>
                
                </Col>
                </Row> 
                <hr />
                <Row>
                    <h2 className="galleryHeader">MORE FROM THIS ARTIST</h2>
                    <ArtworkGallery artist={this.state.artist.idArtist}/>
                </Row>
            </Container>
        );
      }

}


